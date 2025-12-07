import { AlertCircle } from "lucide-react";

const ReminderSection = () => {
  return (
    <section className="bg-secondary py-6 sm:py-8">
      <div className="container px-5">
        <div className="mx-auto max-w-md">
          <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-soft">
            <div className="flex-shrink-0 mt-0.5">
              <AlertCircle className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium leading-relaxed text-foreground">
              <span className="font-bold">Important:</span> Finish all required deals correctly. Incomplete deal submissions will not qualify for a payout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReminderSection;
