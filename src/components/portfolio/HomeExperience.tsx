"use client";

import { useScrollJourney } from "@/hooks/useScrollJourney";
import SpaceExperience from "@/components/space/SpaceExperience";
import Navigation from "@/components/portfolio/Navigation";
import HudOverlay from "@/components/portfolio/HudOverlay";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import GrainOverlay from "@/components/portfolio/GrainOverlay";
import Loader from "@/components/portfolio/Loader";
import Hero from "@/components/portfolio/Hero";
import MissionProfile from "@/components/portfolio/MissionProfile";
import TechnologySection from "@/components/portfolio/TechnologySection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function HomeExperience() {
  useScrollJourney();

  return (
    <div className="universe">
      <SpaceExperience />
      <GrainOverlay />
      <Loader />
      <Navigation />
      <HudOverlay />
      <ScrollProgress />
      <main>
        <Hero />
        <MissionProfile />
        <TechnologySection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
