import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  Building2, 
  MapPin, 
  Crosshair, 
  Check, 
  Copy, 
  Mail, 
  Phone, 
  ShieldAlert,
  Terminal,
  Github,
  Linkedin
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export const AboutSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Content & Security Mindset */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90 leading-relaxed text-slate-300 space-y-4">
              <p className="text-lg text-slate-200 font-medium leading-relaxed">
                {PORTFOLIO_DATA.personal.aboutBio}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                My approach combines systematic reconnaissance, adherence to established testing frameworks like OWASP and PTES, and an ethical mindset dedicated to eliminating security blindspots before hostile adversaries can exploit them.
              </p>
            </div>

            {/* Security Ethics Commitment Card */}
            <div className="p-5 rounded-xl bg-[#0a0f1d] border border-sky-500/20 shadow-sm flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-sky-950/60 border border-sky-500/30 text-sky-400 shrink-0 mt-0.5">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                  <span>Ethical Security Commitment</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/60 text-emerald-400">
                    AUTHORIZATION MANDATE
                  </span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  All penetration testing, vulnerability discovery, and research activities are conducted exclusively on authorized systems, controlled lab targets, and environments with explicit written testing permissions.
                </p>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-300">{PORTFOLIO_DATA.personal.email}</span>
                <button
                  onClick={copyEmail}
                  type="button"
                  className="ml-2 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-300">{PORTFOLIO_DATA.personal.phone}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0c1222] border border-slate-800 shadow-xl overflow-hidden">
              
              {/* Profile Card Header with Portrait */}
              <div className="p-5 bg-gradient-to-r from-slate-900 via-[#0d1428] to-[#0c1222] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Portrait Avatar Frame */}
                  <div className="relative group shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-sky-400/80 bg-slate-900 shadow-lg shadow-sky-950/40">
                      <img
                        src={PORTFOLIO_DATA.personal.profileImage}
                        alt={PORTFOLIO_DATA.personal.profileImageAlt}
                        className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        width={80}
                        height={80}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (PORTFOLIO_DATA.personal.profileImageFallback && !target.src.includes('457557646')) {
                            target.src = PORTFOLIO_DATA.personal.profileImageFallback;
                          }
                        }}
                      />
                    </div>
                    <span 
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0c1222] flex items-center justify-center shadow"
                      title="Security Clearance Verified"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {PORTFOLIO_DATA.personal.fullName}
                    </h3>
                    <p className="text-xs text-sky-400 font-mono font-medium">
                      {PORTFOLIO_DATA.personal.title}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {PORTFOLIO_DATA.personal.organization}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-1 rounded shrink-0 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Profile Card Table Elements */}
              <div className="p-5 divide-y divide-slate-800/80 text-xs">
                
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-sky-400" />
                    <span>Name</span>
                  </span>
                  <span className="text-slate-200 font-semibold font-mono">
                    {PORTFOLIO_DATA.personal.fullName}
                  </span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                    <span>Role</span>
                  </span>
                  <span className="text-sky-300 font-semibold font-mono bg-sky-950/50 px-2 py-0.5 rounded border border-sky-800/40">
                    {PORTFOLIO_DATA.personal.title}
                  </span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Organization</span>
                  </span>
                  <span className="text-slate-200 font-semibold font-mono">
                    {PORTFOLIO_DATA.personal.organization}
                  </span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>Location</span>
                  </span>
                  <span className="text-slate-200 font-semibold font-mono">
                    {PORTFOLIO_DATA.personal.location}
                  </span>
                </div>

                <div className="py-2.5 flex items-start justify-between gap-4">
                  <span className="text-slate-400 flex items-center gap-2 shrink-0">
                    <Crosshair className="w-3.5 h-3.5 text-sky-400" />
                    <span>Focus</span>
                  </span>
                  <span className="text-slate-200 font-medium text-right">
                    Cybersecurity & Penetration Testing
                  </span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Github className="w-3.5 h-3.5 text-sky-400" />
                    <span>GitHub</span>
                  </span>
                  <a
                    href="https://github.com/mailforpentestarman-boop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-mono text-xs font-semibold hover:underline"
                  >
                    @mailforpentestarman-boop
                  </a>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                    <span>LinkedIn</span>
                  </span>
                  <a
                    href="https://www.linkedin.com/in/md-arman-khan-pentester"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-mono text-xs font-semibold hover:underline"
                  >
                    md-arman-khan-pentester
                  </a>
                </div>

              </div>

              {/* Bottom footer bar */}
              <div className="px-5 py-3 bg-[#080d18] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Available for Assessments</span>
                </span>
                <span className="text-slate-400">Bytecapsule Security</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
