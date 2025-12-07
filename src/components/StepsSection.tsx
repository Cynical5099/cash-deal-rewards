import { Mail, ClipboardCheck, Banknote } from "lucide-react";

const steps = [
  {
    icon: Mail,
    title: "Enter your email",
    description: "Enter your email to access your reward portal. We'll use it only for payout updates.",
  },
  {
    icon: ClipboardCheck,
    title: "Complete deals & surveys",
    description: "Follow each deal's instructions. The more deals you complete correctly, the higher your payout. Most tasks take 2–5 minutes.",
  },
  {
    icon: Banknote,
    title: "Get paid",
    description: "After verification, you'll receive your payout in 2–4 business days.",
  },
];

const StepsSection = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container px-6">
        <h2 className="mb-12 text-center font-display text-2xl font-bold text-foreground md:text-3xl">
          How It Works
        </h2>

        <div className="mx-auto max-w-lg space-y-6 md:max-w-3xl md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </div>

              {/* Icon container */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-light shadow-soft">
                <step.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              {/* Arrow connector for mobile */}
              {index < steps.length - 1 && (
                <div className="mt-6 h-6 w-px bg-border md:hidden" />
              )}
            </div>
          ))}
        </div>

        {/* Arrow connectors for desktop */}
        <div className="hidden md:block">
          <div className="mx-auto mt-8 flex max-w-xl justify-between px-20">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
            <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
