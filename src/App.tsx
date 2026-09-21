/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FocusSection } from './components/FocusSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { TechWallSection } from './components/TechWallSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Full-screen Hero Section */}
        <HeroSection onOpenCv={() => setIsCvOpen(true)} />

        {/* About Me Section & Identity Card */}
        <AboutSection />

        {/* What I Focus On */}
        <FocusSection />

        {/* Modern Skills & Proficiencies */}
        <SkillsSection />

        {/* Security Projects & Labs */}
        <ProjectsSection />

        {/* Learning / Career Journey Timeline */}
        <JourneySection />

        {/* Tools & Technologies Wall */}
        <TechWallSection />

        {/* Security Philosophy */}
        <PhilosophySection />

        {/* Direct Contact Section */}
        <ContactSection />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Interactive & Printable CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
