import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FixedCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm p-4 shadow-lg">
      <div className="mx-auto max-w-md">
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
  );
};

export default FixedCTA;
