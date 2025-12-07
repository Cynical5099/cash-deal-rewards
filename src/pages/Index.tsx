import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import TrustSection from "@/components/TrustSection";
import FixedCTA from "@/components/FixedCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pb-24">
      <HeroSection />
      <StepsSection />
      <TrustSection />
      <FixedCTA />
    </main>
  );
};

export default Index;
