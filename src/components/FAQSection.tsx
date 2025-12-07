import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long until I get paid?",
    answer: "2–4 business days after all deals are verified.",
  },
  {
    question: "What happens if I don't finish enough deals?",
    answer: "You must complete the required valid deals. Incomplete tasks will not receive a payout.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container px-6">
        <div className="mx-auto max-w-lg">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border-none bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="py-4 text-left font-display text-base font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
