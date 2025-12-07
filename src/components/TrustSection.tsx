import { Shield, Users, Smartphone, Quote } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="bg-background py-10 sm:py-12">
      <div className="container px-5">
        <div className="mx-auto max-w-md">
          {/* Trust badges */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground sm:text-sm">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>Trusted by thousands</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-border" />
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span>Secure</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-border" />
            <div className="flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-primary" />
              <span>Mobile friendly</span>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="relative rounded-xl bg-card p-5 shadow-soft">
            <Quote className="absolute -top-2 left-4 h-6 w-6 text-primary opacity-30" />
            
            <blockquote className="relative">
              <p className="mb-3 text-sm italic leading-relaxed text-foreground sm:text-base">
                "Completed a few quick deals and got my payout email in 3 days. Super easy."
              </p>
              <footer className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-money-green-light text-xs font-bold text-primary">
                  A
                </div>
                <cite className="text-xs font-medium text-muted-foreground not-italic sm:text-sm">
                  A. from Ohio
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
