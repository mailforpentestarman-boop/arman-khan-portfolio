import React from 'react';
import { Shield, ArrowUp, Github, Linkedin, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Focus', href: '#focus' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050810] border-t border-slate-800/90 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Identity & Social Badges */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-sky-950 border border-sky-500/40 flex items-center justify-center font-mono font-bold text-sky-400 text-xs">
                {PORTFOLIO_DATA.personal.logoInitial}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {PORTFOLIO_DATA.personal.fullName}
              </h3>
            </div>
            <p className="text-xs font-mono text-sky-400">
              {PORTFOLIO_DATA.personal.title} <span className="text-slate-600">|</span> {PORTFOLIO_DATA.personal.organization}
            </p>
            <p className="text-xs text-slate-400 italic">
              &ldquo;{PORTFOLIO_DATA.metaDetails.tagline}&rdquo;
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com/mailforpentestarman-boop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/md-arman-khan-pentester"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-sky-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Scroll to Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Hosting Indicator */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            {PORTFOLIO_DATA.metaDetails.copyrightNotice}
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Ready for GitHub Pages Deployment</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
