import { Mail, ClipboardCheck, Banknote } from "lucide-react";

const steps = [
  {
    icon: Mail,
    title: "Enter your email",
    description: "Enter your email to access your reward portal. We'll use it only for payout updates.",
  },
  {
    icon: ClipboardCheck,
    title: "Complete deals and surveys",
    description: "Follow each deal's instructions. The more deals you complete correctly, the higher your payout. Most tasks take 2 to 5 minutes.",
  },
  {
    icon: Banknote,
    title: "Get paid",
    description: "After verification, you'll receive your payout in 2 to 4 business days.",
  },
];

const StepsSection = () => {
  return (
    <section className="bg-background py-10 sm:py-14">
      <div className="container px-5">
        <h2 className="mb-8 text-center font-display text-xl font-bold text-foreground sm:text-2xl">
          How It Works
        </h2>

        <div className="mx-auto max-w-md space-y-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex items-start gap-4 rounded-xl bg-card p-4 shadow-soft opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Step number */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="mb-1 flex items-center gap-2">
                  <step.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
