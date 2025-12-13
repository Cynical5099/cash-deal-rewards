import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-money-green-light to-background">
      <div className="container px-5 py-10 sm:py-16">
        <div className="mx-auto max-w-md text-center">
          {/* Icon */}
          <div className="mb-5 flex justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <DollarSign className="h-8 w-8 text-primary" strokeWidth={2} />
            </div>
          </div>

          {/* Headline */}
          <h1 
            className="mb-3 font-display text-xl font-semibold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in sm:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            A Simple Way to Earn Extra Cash
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-6 text-sm text-muted-foreground opacity-0 animate-fade-in sm:text-base"
            style={{ animationDelay: "0.3s" }}
          >
            Complete partner offers and surveys at your own pace. Payouts depend on how many you finish correctly.
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

          {/* Expectation Setting */}
          <p 
            className="mt-4 text-xs leading-relaxed text-muted-foreground/80 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Your earnings depend on completing partner offers correctly. Each offer has specific requirements. Incomplete or invalid submissions won't qualify. Most people use this for groceries, bills, or a little extra spending money.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
