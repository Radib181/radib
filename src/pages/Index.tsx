import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkflowSection from "@/components/WorkflowSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyMeSection from "@/components/WhyMeSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SmartBackground from "@/components/SmartBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Global smart background animation */}
      <SmartBackground />
      
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ProjectsSection />
        <WorkflowSection />
        <TechStackSection />
        <TestimonialsSection />
        <WhyMeSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
