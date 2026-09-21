import React from 'react';
import { 
  Terminal, 
  Cpu, 
  GitBranch, 
  Github, 
  Network, 
  Radio, 
  FileCode2, 
  Code2, 
  Globe, 
  Laptop,
  Layers,
  Shield
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export const TechWallSection: React.FC = () => {
  const getTechIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'python':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'burp suite':
        return <Shield className="w-5 h-5 text-sky-400" />;
      case 'nmap':
        return <Radio className="w-5 h-5 text-sky-400" />;
      case 'wireshark':
        return <Network className="w-5 h-5 text-sky-400" />;
      case 'linux':
        return <Laptop className="w-5 h-5 text-sky-400" />;
      case 'git':
        return <GitBranch className="w-5 h-5 text-sky-400" />;
      case 'github':
        return <Github className="w-5 h-5 text-sky-400" />;
      case 'java':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'html':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'css':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'javascript':
        return <FileCode2 className="w-5 h-5 text-sky-400" />;
      default:
        return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="tech-wall" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Operational Toolchain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tools & Technologies
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Key software, operating systems, and scripting languages utilized across vulnerability assessments, packet inspection, and web exploitation testing.
          </p>
        </div>

        {/* Technologies Grid Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {PORTFOLIO_DATA.technologiesWall.map((tech) => (
            <div
              key={tech.name}
              className="group p-4 rounded-xl bg-[#0a0f1d] hover:bg-[#0c1326] border border-slate-800/80 hover:border-sky-500/40 transition-all duration-200 flex flex-col items-center text-center justify-center space-y-2 shadow-sm"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-sky-400 group-hover:border-sky-500/30 transition-colors">
                {getTechIcon(tech.name)}
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-100 group-hover:text-sky-300 transition-colors block">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 block truncate max-w-[120px]">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
