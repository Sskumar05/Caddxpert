import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer industry-focused CAD, Engineering, IT, AI, Software Development, Electrical, Mechanical, Civil, Digital Marketing, and Special Programs designed for students and working professionals.",
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes. We provide 100% placement assistance through resume preparation, interview training, mock interviews, and connections with hiring companies.",
  },
  {
    question: "Are certificates provided after course completion?",
    answer: "Yes. Students receive a course completion certificate after successfully completing the training program.",
  },
  {
    question: "Can I attend classes online?",
    answer: "Yes. Most of our courses are available in both Offline and Online modes for flexible learning.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer: "Absolutely. Our courses start from the fundamentals and gradually progress to advanced concepts with practical projects.",
  },
  {
    question: "How can I enroll in a course?",
    answer: "You can enroll by filling out the enquiry form on our website, contacting us by phone or WhatsApp, or visiting our training center directly.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="eyebrow mb-4">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Find answers to the most common questions about our courses, training, certifications, and placements.
          </p>
        </div>

        <div className="card-soft p-6 md:p-8" data-aos="fade-up" data-aos-delay="100">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={index === faqs.length - 1 ? "border-b-0" : ""}>
                <AccordionTrigger className="text-base md:text-lg font-bold text-charcoal hover:no-underline hover:text-brand-red text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
