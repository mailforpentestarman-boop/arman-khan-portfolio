import React from 'react';
import { ShieldCheck, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#0d1428] to-[#0a0f1d] border border-sky-500/20 p-8 sm:p-12 text-center shadow-xl">
          
          {/* Subtle icon badge */}
          <div className="mx-auto w-12 h-12 rounded-full bg-sky-950/70 border border-sky-500/40 flex items-center justify-center text-sky-400 mb-6 shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-4">
            Security Philosophy
          </div>

          {/* Philosophy Statement */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-relaxed max-w-2xl mx-auto">
            &ldquo;{PORTFOLIO_DATA.personal.philosophy}&rdquo;
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span className="text-slate-300 font-semibold">{PORTFOLIO_DATA.personal.fullName}</span>
            <span className="text-slate-600">•</span>
            <span>{PORTFOLIO_DATA.personal.title}, {PORTFOLIO_DATA.personal.organization}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
