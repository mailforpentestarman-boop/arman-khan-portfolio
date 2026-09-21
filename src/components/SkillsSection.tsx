import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Code2, 
  Sparkles, 
  CheckCheck, 
  HelpCircle,
  Terminal
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory, SkillItem } from '../portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Focus Area':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-sky-950/80 border border-sky-500/50 text-sky-300">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Focus Area
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/50 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Working Knowledge
          </span>
        );
      case 'Learning':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/40 text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Learning
          </span>
        );
      default:
        return null;
    }
  };

  const getCategoryIcon = (title: string) => {
    if (title.includes('Offensive')) return <ShieldCheck className="w-5 h-5 text-sky-400" />;
    if (title.includes('Tools')) return <Wrench className="w-5 h-5 text-sky-400" />;
    return <Code2 className="w-5 h-5 text-sky-400" />;
  };

  const filteredCategories = selectedCategory === 'all'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Technical Competency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Proficiencies
            </h2>
          </div>

          {/* Level Legend: No Fake Percentages! */}
          <div className="flex flex-wrap items-center gap-3 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="text-slate-400 text-[11px] mr-1">Status Legend:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Focus Area</span>
            </div>
            <span className="text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Working Knowledge</span>
            </div>
            <span className="text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Learning</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            type="button"
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              selectedCategory === 'all'
                ? 'bg-sky-600 text-white font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Disciplines ({PORTFOLIO_DATA.skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {PORTFOLIO_DATA.skillCategories.map(cat => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              type="button"
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                selectedCategory === cat.title
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.title} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category: SkillCategory) => (
            <div
              key={category.title}
              className="rounded-xl bg-[#0a0f1d] border border-slate-800/90 shadow-xl overflow-hidden flex flex-col"
            >
              {/* Category Header */}
              <div className="p-5 bg-gradient-to-r from-slate-900 to-[#0c1324] border-b border-slate-800">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="p-2 rounded-lg bg-sky-950/70 border border-sky-500/30">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-5 space-y-3 flex-1 divide-y divide-slate-800/60">
                {category.skills.map((skill: SkillItem, sIdx: number) => (
                  <div
                    key={skill.name}
                    className={`pt-3 first:pt-0 group hover:bg-slate-900/40 p-2 rounded-lg transition-colors`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                        {skill.name}
                      </span>
                      {getLevelBadge(skill.level)}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-slate-400 leading-normal">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Category Footer */}
              <div className="px-5 py-3 bg-[#080d16] border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{category.skills.length} Technical Disciplines</span>
                <span className="text-sky-400">Verified Self-Evaluation</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
