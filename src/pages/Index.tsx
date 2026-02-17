import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
