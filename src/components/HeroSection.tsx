import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dollar-cycle.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-light to-background">
      <div className="container px-6 py-12 md:py-20">
        <div className="mx-auto max-w-lg text-center">
          {/* Hero Image */}
          <div className="mb-8 flex justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img
              src={heroImage}
              alt="Dollar sign with arrows representing cash flow cycle"
              className="h-48 w-auto object-contain md:h-64 drop-shadow-lg"
            />
          </div>

          {/* Headline */}
          <h1 
            className="mb-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in md:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.2s" }}
          >
            Turn Small Tasks Into Real Cash —{" "}
            <span className="text-primary">Earn Up to $750</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-8 text-lg text-muted-foreground opacity-0 animate-fade-in md:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            Complete quick deals & surveys — the more you finish, the bigger your payout.
          </p>

          {/* CTA Button */}
          <div 
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              variant="cta"
              size="full"
              className="group"
            >
              <a
                href="https://glctrk.org/aff_c?offer_id=1595&aff_id=21664&source=tictac1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Earning Now
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
