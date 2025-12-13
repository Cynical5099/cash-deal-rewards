import { Quote } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="bg-background py-8 sm:py-10">
      <div className="container px-5">
        <div className="mx-auto max-w-sm">
          {/* Simple note */}
          <p className="mb-5 text-center text-xs text-muted-foreground">
            Used by people looking for a little extra help with bills, groceries, or everyday expenses.
          </p>

          {/* Testimonial card */}
          <div className="relative rounded-lg bg-card p-4 shadow-sm border border-border/50">
            <Quote className="absolute -top-2 left-3 h-5 w-5 text-primary/40" />
            
            <blockquote className="relative">
              <p className="mb-2 text-sm leading-relaxed text-foreground">
                "I completed a few offers over a couple days. Got my payment about a week later. Nothing crazy, but it helped cover groceries that month."
              </p>
              <footer className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  M
                </div>
                <cite className="text-xs text-muted-foreground not-italic">
                  M. from Texas
                </cite>
              </footer>
            </blockquote>
          </div>

          {/* Realistic disclaimer */}
          <p className="mt-4 text-center text-[10px] leading-relaxed text-muted-foreground/70">
            Results vary. Earnings depend on completing offers correctly and meeting each partner's requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
