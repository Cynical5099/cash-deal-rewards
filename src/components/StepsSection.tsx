import { Mail, ClipboardCheck, Banknote } from "lucide-react";

const steps = [
  {
    icon: Mail,
    title: "Sign up with your email",
    description: "We only use it to send you payout updates. No spam.",
  },
  {
    icon: ClipboardCheck,
    title: "Complete partner offers",
    description: "Each offer has clear instructions. Follow them carefully to qualify. Takes a few minutes each.",
  },
  {
    icon: Banknote,
    title: "Get paid after verification",
    description: "Once your completed offers are verified, expect payment within a few business days.",
  },
];

const StepsSection = () => {
  return (
    <section className="bg-muted/30 py-8 sm:py-10">
      <div className="container px-5">
        <h2 className="mb-6 text-center font-display text-lg font-semibold text-foreground sm:text-xl">
          How It Works
        </h2>

        <div className="mx-auto max-w-sm space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Step number */}
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="mb-0.5 flex items-center gap-1.5">
                  <step.icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <h3 className="font-display text-sm font-medium text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
