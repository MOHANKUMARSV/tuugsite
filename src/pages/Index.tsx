import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TuugCRMSection from "@/components/TuugCRMSection";
import ResultsSection from "@/components/ResultsSection";
import ContentSection from "@/components/ContentSection";
import WhyTuugSection from "@/components/WhyTuugSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TuugCRMSection />
      <ResultsSection />
      <ContentSection />
      <WhyTuugSection />
      <CTASection />
      <Footer />
    </div>
  );
}
