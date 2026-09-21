import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Building2, Shield, CheckCircle2, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl my-8 bg-[#0b101e] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100">
        
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-[#0d1426] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-sky-950/80 border border-sky-500/40 text-sky-400">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs font-semibold text-slate-200">
              Curriculum Vitae Preview • {PORTFOLIO_DATA.personal.fullName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs flex items-center gap-1.5 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable Content Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#090d18] text-slate-200 overflow-y-auto max-h-[80vh]">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-sky-500/60 bg-slate-900 shrink-0 shadow-md">
                  <img
                    src={PORTFOLIO_DATA.personal.profileImage}
                    alt={PORTFOLIO_DATA.personal.profileImageAlt}
                    className="w-full h-full object-cover object-[center_20%]"
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
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {PORTFOLIO_DATA.personal.fullName}
                  </h1>
                  <p className="text-sm font-mono text-sky-400 font-semibold mt-1">
                    {PORTFOLIO_DATA.personal.title} <span className="text-slate-500">|</span> {PORTFOLIO_DATA.personal.organization}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Specialization: Web Application, API & Network Security Testing
                  </p>
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="text-xs font-mono space-y-1.5 text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-sky-300 transition-colors">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="hover:text-sky-300 transition-colors">
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-sky-400" />
                  <a
                    href="https://github.com/mailforpentestarman-boop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-300 transition-colors"
                  >
                    github.com/mailforpentestarman-boop
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <a
                    href="https://www.linkedin.com/in/md-arman-khan-pentester"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-300 transition-colors"
                  >
                    linkedin.com/in/md-arman-khan-pentester
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold border-b border-slate-800/80 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PORTFOLIO_DATA.personal.aboutBio}
            </p>
          </div>

          {/* Current Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold border-b border-slate-800/80 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs">
                <span className="font-bold text-white text-sm">
                  {PORTFOLIO_DATA.personal.title}
                </span>
                <span className="font-mono text-slate-400">
                  {PORTFOLIO_DATA.personal.organization} • Present
                </span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                <li>Conducting authorized vulnerability assessments and reconnaissance.</li>
                <li>Auditing web and API interfaces for OWASP Top 10 vulnerabilities.</li>
                <li>Executing structured testing methodologies and risk documentation.</li>
              </ul>
            </div>
          </div>

          {/* Core Focus & Methodology */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold border-b border-slate-800/80 pb-1">
              Core Technical Focus Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PORTFOLIO_DATA.focusAreas.map(f => (
                <div key={f.id} className="p-2.5 rounded bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="font-semibold text-slate-200 block">{f.title}</span>
                  <p className="text-[11px] text-slate-400">{f.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Proficiencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold border-b border-slate-800/80 pb-1">
              Skills & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-semibold text-sky-300 block font-mono text-[11px]">Offensive Security:</span>
                <p className="text-slate-400 text-[11px]">Penetration Testing, Web Security, API Security, Vuln Assessment, Network Recon</p>
              </div>
              <div className="p-3 rounded bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-semibold text-sky-300 block font-mono text-[11px]">Security Tools:</span>
                <p className="text-slate-400 text-[11px]">Burp Suite, Nmap, Wireshark, Linux (CLI/Bash), Git & GitHub</p>
              </div>
              <div className="p-3 rounded bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-semibold text-sky-300 block font-mono text-[11px]">Languages / Scripting:</span>
                <p className="text-slate-400 text-[11px]">Python, HTML, CSS, JavaScript, Java</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold border-b border-slate-800/80 pb-1">
              Education & Grounding
            </h2>
            <div className="text-xs space-y-1">
              <div className="flex justify-between font-semibold text-white">
                <span>Diploma in Computer Science & Technology</span>
                <span className="font-mono text-slate-400">Academic Background</span>
              </div>
              <p className="text-slate-400">
                Core coursework in operating systems, networks, algorithms, and software design.
              </p>
            </div>
          </div>

          {/* Security Philosophy */}
          <div className="p-4 rounded-lg bg-sky-950/20 border border-sky-800/40 text-xs text-center font-mono text-slate-300 italic">
            &ldquo;{PORTFOLIO_DATA.personal.philosophy}&rdquo;
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="no-print p-4 bg-[#0d1426] border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Editable in src/portfolioData.ts</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
