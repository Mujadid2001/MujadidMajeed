import { lazy, Suspense, useEffect } from "react";
import CircuitBackground from "@/components/CircuitBackground";
import Navbar from "@/components/Navbar";
import ScrollProgressLine from "@/components/ScrollProgressLine";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold sections
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

// Loading fallback component
const SectionFallback = () => null;

const Index = () => {
  useEffect(() => {
    // Handle hash-based navigation
    const handleHashScroll = () => {
      const hash = window.location.hash.slice(1); // Remove '#'
      if (hash) {
        // Wait for lazy-loaded sections to render
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      }
    };

    // Scroll on initial load
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <div className="relative min-h-screen circuit-grid scanlines">
      <CircuitBackground />
      <ScrollProgressLine />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <EducationSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
