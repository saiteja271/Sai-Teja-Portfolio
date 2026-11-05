import React, { useState } from 'react';
import { Phone, MapPin, Copy, Check, Send, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto fallback link with prefilled body
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
                Direct Communication
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Open for internships, technical project collaborations, and academic opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-card space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">
                  Let's create something meaningful.
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Whether you have an internship opportunity, a creative technology collaboration, or want to explore my project work, my inbox is always open.
                </p>
              </div>

              {/* One-Click Copy Email Card */}
              <div className="p-4 rounded-xl bg-bg border border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary">
                    Official Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:text-accent-hover transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm font-semibold text-primary font-mono select-all break-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>

              {/* Direct Details List */}
              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-bg border border-border text-xs text-primary hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-[10px] font-mono text-secondary uppercase">Telephone</p>
                      <p className="font-medium font-mono">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-bg border border-border text-xs text-primary">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-secondary uppercase">Location</p>
                    <p className="font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-secondary">Connect Online</span>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-bg border border-border text-secondary hover:text-primary hover:border-accent transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-bg border border-border text-secondary hover:text-primary hover:border-accent transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Callout */}
            <div className="p-5 rounded-xl bg-surface border border-border flex items-center gap-3 shadow-subtle">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-xs text-secondary leading-snug">
                <strong className="text-primary font-medium">Undergraduate Availability:</strong> Open to summer 2025/2026 internships, technical research, and select frontend development projects.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-card">
            <h3 className="font-display font-bold text-xl text-primary mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-secondary mb-6 font-mono">
              Fill out the form below to initiate communication directly via your email client.
            </p>

            {formSubmitted ? (
              <div className="p-8 text-center bg-bg rounded-xl border border-border space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-primary">Message Prepared!</h4>
                <p className="text-xs text-secondary max-w-md mx-auto">
                  Your mail client has been opened with your message. If it didn't open automatically, you can also write directly to <strong className="text-primary">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-mono text-accent hover:underline"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-secondary uppercase tracking-wider block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-bg border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-secondary uppercase tracking-wider block">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-bg border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-secondary uppercase tracking-wider block">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-bg border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-secondary uppercase tracking-wider block">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, role, or ideas here..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-bg border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary text-white text-xs font-medium hover:bg-accent transition-colors shadow-subtle"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Sai Teja</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
