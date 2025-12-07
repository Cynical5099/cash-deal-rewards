import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-money-green-light to-background">
      <div className="container px-5 py-10 sm:py-16">
        <div className="mx-auto max-w-md text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20">
              <DollarSign className="h-10 w-10 text-primary" strokeWidth={2.5} />
            </div>
          </div>

          {/* Headline */}
          <h1 
            className="mb-4 font-display text-2xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in sm:text-3xl"
            style={{ animationDelay: "0.2s" }}
          >
            Turn Small Tasks Into{" "}
            <span className="text-primary">Real Cash</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-8 text-base text-muted-foreground opacity-0 animate-fade-in sm:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Complete quick deals and surveys. The more you finish, the bigger your payout.
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
    </section>
  );
};

export default HeroSection;
