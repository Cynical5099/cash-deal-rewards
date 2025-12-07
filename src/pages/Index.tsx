import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import ReminderSection from "@/components/ReminderSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StepsSection />
      <ReminderSection />
      <TrustSection />
      <FAQSection />
      <DisclaimerSection />
    </main>
  );
};

export default Index;
