import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { AboutInstitute } from './components/AboutInstitute';
import { DepartmentsSection } from './components/DepartmentsSection';
import { ECESpotlight } from './components/ECESpotlight';
import { HeritageBand } from './components/HeritageBand';
import { CampusMapVirtualTour } from './components/CampusMapVirtualTour';
import { AdmissionsPredictor } from './components/AdmissionsPredictor';
import { PlacementsAndResearch } from './components/PlacementsAndResearch';
import { CampusCulture } from './components/CampusCulture';
import { NewsBulletins } from './components/NewsBulletins';
import { Footer } from './components/Footer';
import { AdmissionsEnquiryModal } from './components/AdmissionsEnquiryModal';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (program?: string) => {
    setSelectedProgram(program);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedProgram(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0a0600] text-[#f2e8d5] font-sans selection:bg-[#c8560a] selection:text-white flex flex-col">
      {/* Fixed Header with IST Clock & Audio Ambience */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section with 3D WebGL Canvas */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* Live Marquee Ticker */}
        <Ticker />

        {/* Scene 02: About Institute (REC 1959 Genesis & Legacy) */}
        <AboutInstitute />

        {/* Scene 03: Academic Departments Explorer */}
        <DepartmentsSection onSelectDepartmentForEnquiry={handleOpenEnquiry} />

        {/* Scene 04: ECE Center of Excellence & Semiconductor Hub */}
        <ECESpotlight onOpenEnquiry={handleOpenEnquiry} />

        {/* Kakatiya Cultural Heritage Band */}
        <HeritageBand />

        {/* Scene 05: 256-Acre Campus Life & Interactive Map */}
        <CampusMapVirtualTour />

        {/* Scene 06: JoSAA / CSAB Admissions & Rank Cutoff Predictor */}
        <AdmissionsPredictor onOpenEnquiry={handleOpenEnquiry} />

        {/* Scene 07: Placements & Sponsored Research Ecosystem */}
        <PlacementsAndResearch />

        {/* Scene 08: Student Festivals & Clubs */}
        <CampusCulture />

        {/* Scene 09: News Circulars & Public Bulletins */}
        <NewsBulletins />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Interactive Admissions Enquiry Modal */}
      <AdmissionsEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        preselectedProgram={selectedProgram}
      />
    </div>
  );
}
