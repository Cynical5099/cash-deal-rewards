import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long until I get paid?",
    answer: "2 to 4 business days after all deals are verified.",
  },
  {
    question: "What happens if I don't finish enough deals?",
    answer: "You must complete the required valid deals. Incomplete tasks will not receive a payout.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-secondary py-10 sm:py-12">
      <div className="container px-5">
        <div className="mx-auto max-w-md">
          <h2 className="mb-6 text-center font-display text-xl font-bold text-foreground sm:text-2xl">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border-none bg-card px-4 shadow-soft"
              >
                <AccordionTrigger className="py-4 text-left font-display text-sm font-semibold text-foreground hover:no-underline sm:text-base [&[data-state=open]>svg]:text-primary">
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
