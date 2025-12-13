import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FixedCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/95 backdrop-blur-sm p-3 shadow-md">
      <div className="mx-auto max-w-sm">
        <Button
          asChild
          variant="cta"
          size="full"
          className="text-sm font-medium"
        >
          <a
            href="https://glctrk.org/aff_c?offer_id=1595&aff_id=21664&source=tictac1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FixedCTA;
