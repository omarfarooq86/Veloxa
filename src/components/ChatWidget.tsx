import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

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

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
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
        <div className="flex items-center gap-3 bg-gradient-to-br from-[#0a1226] to-[#11203f] px-4 py-3 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e4aff]">
            <Bot size={20} />
          </div>
          <div>
            <p className="font-semibold leading-tight">Velo</p>
            <p className="text-xs text-white/60">Veloxa Assistant</p>
          </div>
        </div>

        {/* Messages */}
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
            </div>
          )}
        </div>

        {/* Input */}
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
      </div>
    </>
  );
};

export default ChatWidget;
