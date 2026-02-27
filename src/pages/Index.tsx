import HeroSection from "@/components/home/HeroSection";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import ServiceTypesSection from "@/components/home/ServiceTypesSection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <MarqueeStrip />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <ServiceTypesSection />
    </div>
  );
};

export default Index;
