import { Shield, Users, Smartphone, Quote } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container px-6">
        <div className="mx-auto max-w-lg">
          {/* Trust badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>Trusted by thousands</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span>Secure</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
            <div className="flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-primary" />
              <span>Mobile-friendly</span>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="relative rounded-2xl bg-card p-6 shadow-medium">
            <Quote className="absolute -top-3 left-6 h-8 w-8 text-primary opacity-20" />
            
            <blockquote className="relative">
              <p className="mb-4 text-base italic leading-relaxed text-foreground">
                "Completed a few quick deals and got my payout email in 3 days — super easy."
              </p>
              <footer className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-light text-sm font-bold text-primary">
                  A
                </div>
                <cite className="text-sm font-medium text-muted-foreground not-italic">
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
