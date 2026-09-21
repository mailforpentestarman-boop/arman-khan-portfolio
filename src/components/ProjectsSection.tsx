import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Terminal, 
  Shield, 
  Tag, 
  Info, 
  Sparkles, 
  X,
  Code
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const handleActionClick = (project: ProjectItem, actionType: 'github' | 'demo') => {
    if (actionType === 'github' && project.githubUrl && project.githubUrl.startsWith('http')) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (actionType === 'demo' && project.demoUrl && project.demoUrl.startsWith('http')) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    // Show placeholder information modal
    setActiveModalProject(project);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Hands-on Security Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Security Projects & Labs
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300/90 bg-amber-950/40 border border-amber-800/40 px-3 py-1.5 rounded-lg">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Practice labs & research environments (Editable in portfolioData.ts)</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project: ProjectItem, index: number) => {
            const isWide = index === 3 || index === 4;
            return (
              <div
                key={project.id}
                className={`rounded-xl bg-[#0a0f1d] hover:bg-[#0c1326] border border-slate-800/90 hover:border-sky-500/40 p-6 transition-all duration-200 flex flex-col justify-between shadow-xl ${
                  isWide && index === 3 ? 'lg:col-span-1 md:col-span-1' : ''
                } ${isWide && index === 4 ? 'lg:col-span-2 md:col-span-2' : ''}`}
              >
                <div>
                  {/* Top category & placeholder badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/40 px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                    {project.isPlaceholder && (
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                        Lab Environment
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Security Focus Tags */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1.5">
                      Security Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.securityFocus.map((sec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300"
                        >
                          {sec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1.5">
                      Technologies & Tools:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950/40 border border-sky-900/50 text-sky-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <button
                    onClick={() => handleActionClick(project, 'github')}
                    type="button"
                    className="flex-1 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-400" />
                    <span>GitHub</span>
                  </button>

                  <button
                    onClick={() => handleActionClick(project, 'demo')}
                    type="button"
                    className="flex-1 py-2 px-3 rounded-lg bg-sky-950/50 hover:bg-sky-900/60 border border-sky-700/50 hover:border-sky-500/60 text-xs font-mono text-sky-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                    <span>Lab Details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal (For Placeholders & Quick Customization Guidance) */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#0b101d] border border-slate-800 rounded-xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-400" />
                <h4 className="text-base font-bold text-white">
                  {activeModalProject.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <p className="leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                <span className="font-mono text-[11px] text-sky-400 block font-semibold">
                  Lab Status & Methodology:
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  This project represents a hands-on cybersecurity research and practice environment created by Md Arman Khan for continuous learning and methodology testing.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-sky-950/30 border border-sky-800/40 text-[11px] text-slate-300 space-y-1">
                <span className="font-mono text-sky-300 font-semibold block">
                  How to link your live repository or writeup:
                </span>
                <p className="text-slate-400">
                  You can link your real GitHub repository URL or write-up by updating the <code className="text-sky-300 bg-slate-900 px-1 py-0.5 rounded font-mono">githubUrl</code> and <code className="text-sky-300 bg-slate-900 px-1 py-0.5 rounded font-mono">demoUrl</code> fields in <code className="text-sky-300 bg-slate-900 px-1 py-0.5 rounded font-mono">src/portfolioData.ts</code>.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
