import { useState } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section-compact';
import ProjectsSection from '@/components/projects-section-creative';
import ContactSection from '@/components/contact-section-modern';
import LoadingScreen from '@/components/loading-screen-3d';
import Footer from '@/components/footer';
import AdvancedBackground from '@/components/advanced-background';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative bg-portfolio-neutral">
      <AdvancedBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
