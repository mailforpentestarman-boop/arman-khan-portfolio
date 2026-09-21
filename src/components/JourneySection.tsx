import React from 'react';
import { 
  GraduationCap, 
  ShieldAlert, 
  Crosshair, 
  Globe2, 
  Binary, 
  Compass, 
  CheckCircle2, 
  Clock, 
  RefreshCw 
} from 'lucide-react';
import { PORTFOLIO_DATA, JourneyStep } from '../portfolioData';

export const JourneySection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-4 h-4 text-sky-400" />;
      case 1:
        return <ShieldAlert className="w-4 h-4 text-sky-400" />;
      case 2:
        return <Crosshair className="w-4 h-4 text-sky-400" />;
      case 3:
        return <Globe2 className="w-4 h-4 text-sky-400" />;
      case 4:
        return <Binary className="w-4 h-4 text-sky-400" />;
      case 5:
        return <Compass className="w-4 h-4 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-sky-400" />;
    }
  };

  const getStatusBadge = (status: JourneyStep['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/70 border border-sky-800/60 text-sky-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Active Milestone
          </span>
        );
      case 'Ongoing':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/70 border border-blue-800/60 text-blue-300 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
            Continuous
          </span>
        );
    }
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Cybersecurity Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Learning & Career Journey
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            A transparent and factual chronology of academic grounding, self-directed security training, and ongoing penetration testing specializations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {PORTFOLIO_DATA.journeyTimeline.map((step: JourneyStep, index: number) => (
            <div key={index} className="relative group">
              
              {/* Node Marker */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-[#0a0f1d] border border-sky-500/50 flex items-center justify-center shadow-md group-hover:border-sky-400 transition-colors">
                {getStepIcon(index)}
              </div>

              {/* Step Card Content */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#0a0f1d] border border-slate-800/90 group-hover:border-slate-700 transition-all shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-sky-400 font-bold">
                      STAGE 0{index + 1}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="font-mono text-xs text-slate-400">
                      {step.phase}
                    </span>
                  </div>
                  {getStatusBadge(step.status)}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  {step.description}
                </p>

                {step.highlight && (
                  <div className="inline-block text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    Focus: <span className="text-slate-200">{step.highlight}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
