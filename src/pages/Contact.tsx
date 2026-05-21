import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('mgoqkwok');

  useEffect(() => {
    document.title = 'Contact Us | Veloxa';
  }, []);

  return (
    <div>
      <PageHeader 
        title="Get in Touch" 
        description="Ready to elevate your digital presence? We'd love to hear from you. Drop us a message below." 
      />
      
      <section className="section container">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="mb-4">Contact Information</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="card-icon w-12 h-12 mb-0 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-muted">hello@veloxa.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="card-icon w-12 h-12 mb-0 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Phone</h4>
                  <p className="text-muted">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="card-icon w-12 h-12 mb-0 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Office</h4>
                  <p className="text-muted">123 Digital Ave, Tech District<br/>San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="mb-4">Send a Message</h3>
            {state.succeeded ? (
              <div className="text-center py-8">
                <p className="text-secondary text-xl font-semibold mb-2">Message Sent Successfully!</p>
                <p className="text-muted">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-muted mb-1 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 rounded-lg border border-white/10 bg-white/5 text-white outline-none focus:border-primary"
                    required
                  />
                  <ValidationError field="name" errors={state.errors} />
                </div>
                <div>
                  <label className="text-muted mb-1 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 rounded-lg border border-white/10 bg-white/5 text-white outline-none focus:border-primary"
                    required
                  />
                  <ValidationError field="email" errors={state.errors} />
                </div>
                <div>
                  <label className="text-muted mb-1 block">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    className="w-full p-3 rounded-lg border border-white/10 bg-white/5 text-white outline-none focus:border-primary"
                    required
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary mt-2"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
