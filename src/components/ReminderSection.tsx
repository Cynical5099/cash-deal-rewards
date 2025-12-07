import { AlertCircle } from "lucide-react";

const ReminderSection = () => {
  return (
    <section className="bg-secondary py-8 md:py-10">
      <div className="container px-6">
        <div className="mx-auto max-w-lg">
          <div className="flex items-start gap-3 rounded-xl bg-card p-5 shadow-soft">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium leading-relaxed text-foreground md:text-base">
              <span className="font-bold">Important:</span> Finish all required deals correctly — incomplete deal submissions will not qualify for a payout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReminderSection;
