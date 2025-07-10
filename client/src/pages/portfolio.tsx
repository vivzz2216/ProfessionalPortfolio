import { useState } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSectionClean from '@/components/about-section-clean';
import SkillsSectionClean from '@/components/skills-section-clean';
import ProjectsSectionClean from '@/components/projects-section-clean';
import ContactSectionClean from '@/components/contact-section-clean';
import LoadingScreen from '@/components/loading-screen';
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
    <div className="min-h-screen relative bg-white">
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSectionClean />
        <SkillsSectionClean />
        <ProjectsSectionClean />
        <ContactSectionClean />
      </main>
      <Footer />
    </div>
  );
}
