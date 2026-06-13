/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LogoTicker from './components/LogoTicker';
import KeepMovingSection from './components/KeepMovingSection';
import AskAssistantsSection from './components/AskAssistantsSection';
import SearchAndNotesSection from './components/SearchAndNotesSection';
import DocsAndKbSection from './components/DocsAndKbSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans tracking-tight selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Notion Sticky Navigation & Top Language banner bar */}
      <Header />

      {/* Dark interactive Hero section depicting Page 1 "Ramp HQ" workspace & Night shift simulation */}
      <HeroSection />

      {/* Brand logo endless carousel/marquee of Page 1 & 2 */}
      <LogoTicker />

      {/* Keep work moving section containing the active agent selector and chat playground of Page 2 & 3 */}
      <KeepMovingSection />

      {/* On-demand assistants grid & live-typing compiler doc builder of Page 4 & 5 */}
      <AskAssistantsSection />

      {/* Twins section: Enterprise Search & Live Meeting notes checkbox actions of Page 5 & 6 */}
      <SearchAndNotesSection />

      {/* Docs & Knowledge Base twins layout with dynamic commenting system of Page 7 */}
      <DocsAndKbSection />

      {/* Projects Timeline roadmap and interactive Release board Checklist of Page 8 */}
      <ProjectsSection />

      {/* Premium quote and footer navigation of Page 8 */}
      <Footer />
    </div>
  );
}

