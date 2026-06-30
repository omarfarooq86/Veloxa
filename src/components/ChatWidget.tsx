import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Bot, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string };

const SUGGESTIONS = [
  'What services do you offer?',
  'How much does SEO cost?',
  'How do I get started?',
];

const WELCOME: Message = {
  role: 'assistant',
  content: "Hi! I'm Velo, Veloxa's assistant. Ask me about our services, pricing, or how to start a project.",
};

/** Same Formspree form used by the Contact page (src/pages/Contact.tsx). */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgoqkwok';

type LeadStatus = 'idle' | 'sending' | 'success' | 'error';

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<'chat' | 'lead'>('chat');
  const [lead, setLead] = useState({ name: '', email: '', message: '' });
  const [leadStatus, setLeadStatus] = useState<LeadStatus>('idle');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages: Message[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      const reply =
        res.ok && data?.reply
          ? data.reply
          : data?.error ||
            "Sorry, I'm having trouble right now. Please try our Contact page so the team can help.";
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I couldn't reach the assistant. Please check your connection or visit our Contact page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadStatus === 'sending') return;
    setLeadStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          message: lead.message || 'Lead submitted via the Veloxa website chatbot.',
          source: 'Veloxa chatbot',
        }),
      });
      setLeadStatus(res.ok ? 'success' : 'error');
    } catch {
      setLeadStatus('error');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Launcher button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-5 right-5 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-[#1e4aff] text-white shadow-[0_8px_24px_rgba(47,107,255,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        {open ? <X size={26} /> : <MessageCircle size={26} />}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-5 z-[1000] flex w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(10,18,38,0.25)] ring-1 ring-black/5 transition-all duration-200 ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        style={{ height: 'min(560px, calc(100vh - 8rem))' }}
        role="dialog"
        aria-label="Veloxa chat assistant"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 bg-gradient-to-br from-[#0a1226] to-[#11203f] px-4 py-3 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e4aff]">
              <Bot size={20} />
            </div>
            <div>
              <p className="font-semibold leading-tight">Velo</p>
              <p className="text-xs text-white/60">{view === 'lead' ? 'Talk to the team' : 'Veloxa Assistant'}</p>
            </div>
          </div>
          {view === 'chat' ? (
            <button
              onClick={() => setView('lead')}
              title="Leave your details"
              aria-label="Leave your details"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Mail size={18} />
            </button>
          ) : (
            <button
              onClick={() => setView('chat')}
              title="Back to chat"
              aria-label="Back to chat"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ArrowLeft size={18} />
            </button>
          )}
        </div>

        {/* Messages */}
        {view === 'chat' && (
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-[#f3f6fd] p-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'rounded-br-sm bg-[#1e4aff] text-white'
                    : 'rounded-bl-sm bg-white text-[#0f1b33] ring-1 ring-black/5'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 ring-1 ring-black/5">
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#5a6b85] [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#5a6b85] [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#5a6b85]" />
              </div>
            </div>
          )}

          {/* Suggestions (only before first user message) */}
          {messages.length === 1 && !loading && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-[#1e4aff]/30 bg-white px-3 py-1.5 text-xs text-[#1e4aff] transition-colors hover:bg-[#1e4aff] hover:text-white"
                >
                  {s}
                </button>
              ))}
              <button
                onClick={() => setView('lead')}
                className="rounded-full border border-[#059669]/40 bg-white px-3 py-1.5 text-xs text-[#059669] transition-colors hover:bg-[#059669] hover:text-white"
              >
                Talk to the team
              </button>
            </div>
          )}
        </div>
        )}

        {/* Lead capture form */}
        {view === 'lead' && (
          <div className="flex-1 overflow-y-auto bg-[#f3f6fd] p-4">
            {leadStatus === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <CheckCircle2 size={44} className="mb-3 text-[#059669]" />
                <p className="mb-1 font-semibold text-[#0f1b33]">Thanks, {lead.name || 'there'}!</p>
                <p className="text-sm text-[#5a6b85]">We've got your details and will reply within 24 hours on business days.</p>
                <button
                  onClick={() => setView('chat')}
                  className="mt-4 rounded-full bg-[#1e4aff] px-4 py-2 text-sm text-white"
                >
                  Back to chat
                </button>
              </div>
            ) : (
              <form onSubmit={submitLead} className="flex flex-col gap-3">
                <p className="text-sm text-[#5a6b85]">
                  Leave your details and the Veloxa team will get back to you. Add a note about what you need (optional).
                </p>
                <input
                  type="text"
                  required
                  value={lead.name}
                  onChange={(e) => setLead((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-[rgba(15,27,51,0.14)] bg-white px-3 py-2.5 text-sm text-[#0f1b33] outline-none focus:border-[#1e4aff]"
                />
                <input
                  type="email"
                  required
                  value={lead.email}
                  onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
                  placeholder="Email address"
                  className="w-full rounded-lg border border-[rgba(15,27,51,0.14)] bg-white px-3 py-2.5 text-sm text-[#0f1b33] outline-none focus:border-[#1e4aff]"
                />
                <textarea
                  rows={3}
                  value={lead.message}
                  onChange={(e) => setLead((p) => ({ ...p, message: e.target.value }))}
                  placeholder="How can we help? (optional)"
                  className="w-full resize-none rounded-lg border border-[rgba(15,27,51,0.14)] bg-white px-3 py-2.5 text-sm text-[#0f1b33] outline-none focus:border-[#1e4aff]"
                />
                {leadStatus === 'error' && (
                  <p className="text-sm text-[#f43f5e]">Something went wrong. Please try again or use the Contact page.</p>
                )}
                <button
                  type="submit"
                  disabled={leadStatus === 'sending' || !lead.name.trim() || !lead.email.trim()}
                  className="rounded-lg bg-[#1e4aff] px-4 py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
                >
                  {leadStatus === 'sending' ? 'Sending...' : 'Send my details'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Input */}
        {view === 'chat' && (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-black/5 bg-white p-3">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our services..."
            className="flex-1 rounded-full border border-[rgba(15,27,51,0.14)] bg-[#f3f6fd] px-4 py-2.5 text-sm text-[#0f1b33] outline-none focus:border-[#1e4aff]"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e4aff] text-white transition-opacity disabled:opacity-40"
          >
            <Send size={18} />
          </button>
        </form>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
