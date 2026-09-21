import React from 'react';
import { 
  Globe, 
  Server, 
  Network, 
  SearchCheck, 
  BookOpen, 
  CheckCircle2, 
  Info
} from 'lucide-react';
import { PORTFOLIO_DATA, FocusArea } from '../portfolioData';

export const FocusSection: React.FC = () => {
  const getFocusIcon = (id: string) => {
    switch (id) {
      case 'web-sec':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'api-sec':
        return <Server className="w-5 h-5 text-sky-400" />;
      case 'net-sec':
        return <Network className="w-5 h-5 text-sky-400" />;
      case 'vuln-assess':
        return <SearchCheck className="w-5 h-5 text-sky-400" />;
      case 'sec-research':
        return <BookOpen className="w-5 h-5 text-sky-400" />;
      default:
        return <Globe className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="focus" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Core Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What I Focus On
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg">
            <Info className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Presented as technical areas of focus & interest</span>
          </div>
        </div>

        {/* Focus Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.focusAreas.map((area: FocusArea, index: number) => {
            const isWide = index === 3 || index === 4;
            return (
              <div
                key={area.id}
                className={`group rounded-xl bg-[#0a0f1d] hover:bg-[#0d1427] border border-slate-800/90 hover:border-sky-500/40 p-6 transition-all duration-200 flex flex-col justify-between shadow-lg shadow-black/40 ${
                  isWide && index === 3 ? 'lg:col-span-1 md:col-span-1' : ''
                } ${isWide && index === 4 ? 'lg:col-span-2 md:col-span-2' : ''}`}
              >
                <div>
                  {/* Top bar with icon and sequence index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 group-hover:border-sky-500/40 transition-colors">
                      {getFocusIcon(area.id)}
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title and Tagline */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                    {area.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-400/90 mb-3">
                    {area.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {area.description}
                  </p>

                  {/* Key Highlights Bullet Points */}
                  <ul className="space-y-2 border-t border-slate-800/80 pt-4">
                    {area.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Scope: Ethical Pentesting</span>
                  <span className="text-sky-400/80">Active Focus</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
