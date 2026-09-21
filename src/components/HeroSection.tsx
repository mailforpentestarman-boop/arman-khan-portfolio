import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  FileDown, 
  Terminal as TerminalIcon, 
  Lock, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Radio, 
  Layers,
  Github,
  Linkedin
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

interface HeroSectionProps {
  onOpenCv: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCv }) => {
  const [telemetryState, setTelemetryState] = useState<'idle' | 'running' | 'verified'>('idle');

  const runTelemetry = () => {
    if (telemetryState === 'running') return;
    setTelemetryState('running');
    setTimeout(() => {
      setTelemetryState('verified');
    }, 1400);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 cyber-grid overflow-hidden"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Header Identity Row: Profile Photo + Status */}
            <div className="flex items-center gap-5">
              {/* Professional Profile Picture Frame */}
              <div className="relative group shrink-0">
                {/* Cyber Glow Accent */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/40 via-blue-600/30 to-teal-500/30 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300 pointer-events-none" />
                
                {/* Image Container */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-sky-400/80 bg-[#090e1a] shadow-xl shadow-sky-950/40">
                  <img
                    src={PORTFOLIO_DATA.personal.profileImage}
                    alt={PORTFOLIO_DATA.personal.profileImageAlt}
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    width={96}
                    height={96}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (PORTFOLIO_DATA.personal.profileImageFallback && !target.src.includes('457557646')) {
                        target.src = PORTFOLIO_DATA.personal.profileImageFallback;
                      }
                    }}
                  />
                  {/* Subtle Tech Grid / Scanline Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Real-time Status Badge Indicator */}
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#070b14] ring-1 ring-emerald-500/40 flex items-center justify-center shadow"
                  title="Active Security Researcher • Available for Assessments"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </span>
              </div>

              {/* Status Pill Badge & Availability */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-mono shadow-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-slate-300 font-medium">{PORTFOLIO_DATA.personal.organization}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-sky-400 font-semibold">{PORTFOLIO_DATA.personal.title}</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400 hidden sm:block">
                  Verified Penetration Testing Operator
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {PORTFOLIO_DATA.personal.fullName}
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl font-mono text-sky-400 font-medium">
                <span className="text-slate-400">Role:</span>
                <span className="bg-sky-500/10 px-3 py-0.5 rounded border border-sky-500/30 text-sky-300">
                  {PORTFOLIO_DATA.personal.title}
                </span>
                <span className="text-slate-500">@</span>
                <span className="text-slate-200 font-sans font-semibold">
                  {PORTFOLIO_DATA.personal.organization}
                </span>
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PORTFOLIO_DATA.personal.heroIntro}
            </p>

            {/* Action Buttons & Secondary Link */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="#projects"
                  id="hero-btn-view-work"
                  className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-sky-950/50 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#contact"
                  id="hero-btn-contact"
                  className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Secondary Link: Download CV & Social Quick Links */}
              <div className="flex items-center gap-3 self-start sm:self-center">
                <button
                  onClick={onOpenCv}
                  type="button"
                  id="hero-btn-download-cv"
                  className="text-xs sm:text-sm font-medium text-slate-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors py-2 px-1 focus:outline-none focus:underline"
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span className="underline underline-offset-4 decoration-slate-600 hover:decoration-sky-400">Download CV</span>
                </button>

                <div className="h-4 w-px bg-slate-800" />

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/mailforpentestarman-boop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-white transition-all shadow-sm"
                    title="GitHub: @mailforpentestarman-boop"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-arman-khan-pentester"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-sky-400 transition-all shadow-sm"
                    title="LinkedIn: Md Arman Khan"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Micro Highlights / Trust Indicators */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Ethical & Authorized</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Layers className="w-4 h-4 text-sky-400 shrink-0" />
                <span>OWASP Methodology</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 col-span-2 sm:col-span-1">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Active Researcher</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Cybersecurity Telemetry Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="rounded-xl bg-[#0b101d] border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden">
                
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400 tracking-wider">
                      node://bytecapsule/pentest-audit
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                    <Radio className="w-3 h-3 animate-pulse" />
                    ONLINE
                  </div>
                </div>

                {/* Technical Node Details */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  
                  {/* Researcher Identity Details with Operator Portrait */}
                  <div className="flex items-center gap-3.5 pb-3 border-b border-slate-800/80">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-sky-500/50 shrink-0 bg-slate-900 shadow-sm">
                      <img
                        src={PORTFOLIO_DATA.personal.profileImage}
                        alt={PORTFOLIO_DATA.personal.profileImageAlt}
                        className="w-full h-full object-cover object-[center_20%]"
                        referrerPolicy="no-referrer"
                        width={48}
                        height={48}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (PORTFOLIO_DATA.personal.profileImageFallback && !target.src.includes('457557646')) {
                            target.src = PORTFOLIO_DATA.personal.profileImageFallback;
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex justify-between text-slate-400">
                        <span className="text-slate-500">OPERATOR:</span>
                        <span className="text-slate-200 font-semibold truncate">{PORTFOLIO_DATA.personal.fullName}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span className="text-slate-500">ROLE:</span>
                        <span className="text-sky-300 font-semibold">{PORTFOLIO_DATA.personal.title}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span className="text-slate-500">TEAM:</span>
                        <span className="text-slate-300 truncate">{PORTFOLIO_DATA.personal.organization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Scope & Methodology Matrix */}
                  <div className="space-y-2">
                    <span className="text-slate-500 text-[11px] uppercase tracking-wider block">Security Domains In Scope:</span>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-sky-400" />
                        <span className="text-slate-300">Web App Security</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-sky-400" />
                        <span className="text-slate-300">API Testing</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                        <Radio className="w-3.5 h-3.5 text-sky-400" />
                        <span className="text-slate-300">Network Recon</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                        <span className="text-slate-300">Vuln Assessment</span>
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic Console Box */}
                  <div className="rounded bg-[#080d16] border border-slate-800 p-3 space-y-1.5 text-[11px]">
                    <div className="text-slate-500 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <TerminalIcon className="w-3 h-3 text-sky-400" />
                        AUDIT TELEMETRY STATUS
                      </span>
                      <span className="text-[10px] text-slate-400">SHA-256 VERIFIED</span>
                    </div>

                    {telemetryState === 'idle' && (
                      <div className="text-slate-400 space-y-1 py-1">
                        <p className="text-sky-400/90">&gt; Target scope: Ethical engagement only</p>
                        <p className="text-slate-400">&gt; Standard: OWASP Top 10 + PTES</p>
                        <p className="text-emerald-400/90">&gt; Ready for penetration testing</p>
                      </div>
                    )}

                    {telemetryState === 'running' && (
                      <div className="text-slate-300 space-y-1 py-1">
                        <p className="text-amber-400 animate-pulse">&gt; Initializing test telemetry scan...</p>
                        <p className="text-slate-400">&gt; Checking port state: 80/tcp, 443/tcp [OPEN]</p>
                        <p className="text-slate-400">&gt; Inspecting HTTP security headers...</p>
                      </div>
                    )}

                    {telemetryState === 'verified' && (
                      <div className="text-slate-300 space-y-1 py-1">
                        <p className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 inline" /> Check completed: 0 hostile vectors detected
                        </p>
                        <p className="text-slate-400">&gt; Security assessment baseline normal</p>
                        <p className="text-sky-400">&gt; Prepared by Md Arman Khan (Bytecapsule)</p>
                      </div>
                    )}
                  </div>

                  {/* Interactive Button */}
                  <button
                    onClick={runTelemetry}
                    type="button"
                    disabled={telemetryState === 'running'}
                    className="w-full py-2 px-3 rounded bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Activity className={`w-3.5 h-3.5 text-sky-400 ${telemetryState === 'running' ? 'animate-spin' : ''}`} />
                    <span>
                      {telemetryState === 'running'
                        ? 'Simulating Telemetry Verification...'
                        : telemetryState === 'verified'
                        ? 'Re-run Telemetry Check'
                        : 'Run Telemetry Check'}
                    </span>
                  </button>

                  <div className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
                    <span>Strict compliance with authorized security testing scopes</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
