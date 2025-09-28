import ParticlesBackground from "@/components/ParticlesBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <footer className="py-8 px-6 border-t border-border/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © 2024 Portfolio. Built with passion and modern technology.
          </div>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
};

export default Index;
