import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA, SocialLink } from '../portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(inquirySubject || 'Security Inquiry / Assessment Request');
    const body = encodeURIComponent(inquiryMessage || 'Hello Md Arman Khan,\n\nI would like to discuss a security testing inquiry or collaboration.');
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  const getSocialIcon = (name: SocialLink['name']) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-5 h-5 text-slate-300" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5 text-slate-300" />;
      case 'Telegram':
        return <Send className="w-5 h-5 text-slate-300" />;
      default:
        return <MessageSquare className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Reach out for authorized penetration testing, vulnerability assessments, security research collaborations, or ethical hacking inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Credentials & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Identity Card */}
            <div className="p-6 rounded-xl bg-[#0a0f1d] border border-slate-800 shadow-xl space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {PORTFOLIO_DATA.personal.fullName}
                </h3>
                <div className="text-xs font-mono text-sky-400 mt-1 flex items-center gap-2">
                  <span>{PORTFOLIO_DATA.personal.title}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300">{PORTFOLIO_DATA.personal.organization}</span>
                </div>
              </div>

              {/* Direct Primary Contact Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  id="contact-btn-email"
                  className="py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-sky-950/40 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  id="contact-btn-call"
                  className="py-3 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-100 hover:text-white font-medium text-sm border border-slate-700/80 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call Me</span>
                </a>
              </div>

              {/* Contact Information Details Box */}
              <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800/80 space-y-3 font-mono text-xs">
                
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>Email:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-slate-200 hover:text-sky-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                    <button
                      onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                      type="button"
                      className="p-1 text-slate-400 hover:text-white"
                      title="Copy email"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Phone:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                      className="text-slate-200 hover:text-sky-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                    <button
                      onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                      type="button"
                      className="p-1 text-slate-400 hover:text-white"
                      title="Copy phone"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Channels (With Honest Coming Soon Badges) */}
            <div className="p-6 rounded-xl bg-[#0a0f1d] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">
                  Social & Professional Profiles
                </h4>
                <span className="text-[11px] font-mono text-slate-400">
                  Configurable in portfolioData.ts
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PORTFOLIO_DATA.socials.map((social) => {
                  const hasLink = social.url && social.url.startsWith('http');
                  return (
                    <div
                      key={social.name}
                      className={`p-3.5 rounded-lg border transition-all flex flex-col justify-between ${
                        hasLink
                          ? 'bg-slate-900 hover:bg-slate-850 border-slate-800 hover:border-sky-500/40 cursor-pointer'
                          : 'bg-slate-900/60 border-slate-800/80 opacity-80'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        {getSocialIcon(social.name)}
                        {hasLink ? (
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300"
                            aria-label={`Open ${social.name}`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
                            <Clock className="w-2.5 h-2.5" />
                            {social.status}
                          </span>
                        )}
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-slate-200 block">
                          {social.name}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 block truncate">
                          {social.username || 'Not configured'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Draft */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#0a0f1d] border border-slate-800 p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Creates a prepared email draft directly addressed to Md Arman Khan
                  </p>
                </div>
                <div className="p-2 rounded bg-sky-950/60 border border-sky-500/30 text-sky-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <form onSubmit={handleComposeMail} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-subject" className="block text-xs font-mono text-slate-300 mb-1">
                    Subject / Engagement Scope
                  </label>
                  <input
                    id="inquiry-subject"
                    type="text"
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    placeholder="e.g. Web Security Assessment / Ethical Pentest"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder:text-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-mono text-slate-300 mb-1">
                    Message Details
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Detail your inquiry, testing scope, or project requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder:text-slate-500 transition-colors resize-none"
                  />
                </div>

                <div className="p-3 rounded bg-[#080d16] border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Submissions are strictly static & client-side. No user data stored.</span>
                </div>

                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  className="w-full py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-950/40 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Prepared Email in Mail Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
