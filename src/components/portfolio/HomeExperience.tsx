"use client";

import { useScrollJourney } from "@/hooks/useScrollJourney";
import SpaceExperience from "@/components/space/SpaceExperience";
import Navigation from "@/components/portfolio/Navigation";
import HudOverlay from "@/components/portfolio/HudOverlay";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import GrainOverlay from "@/components/portfolio/GrainOverlay";
import Loader from "@/components/portfolio/Loader";
import InspectOverlay from "@/components/portfolio/InspectOverlay";
import Hero from "@/components/portfolio/Hero";
import IdentityIntro from "@/components/portfolio/IdentityIntro";
import MissionProfile from "@/components/portfolio/MissionProfile";
import ExperienceLog from "@/components/portfolio/ExperienceLog";
import TechnologySection from "@/components/portfolio/TechnologySection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import HireMe from "@/components/portfolio/HireMe";
import VoyagerSection from "@/components/portfolio/VoyagerSection";
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
      <InspectOverlay />
      <main>
        <Hero />
        <IdentityIntro />
        <MissionProfile />
        <ExperienceLog />
        <TechnologySection />
        <ProjectsSection />
        <HireMe />
        <ContactSection />
        <VoyagerSection />
      </main>
    </div>
  );
}
