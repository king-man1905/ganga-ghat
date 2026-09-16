import { useState } from "react";
import { IconChevronDown } from "./icons";

const ITEMS = [
  {
    q: "What is Pind Daan?",
    a: "Pind Daan is a Hindu ancestral ritual performed to honour and pay respects to one's forefathers, traditionally carried out at Gaya Ji according to Vedic guidance.",
  },
  {
    q: "Where is the service performed in Gaya?",
    a: "Rituals are arranged near Vishnupad Temple, including at Pindvechi, Chandchora and the Phalgu riverbank, as per tradition.",
  },
  {
    q: "What rituals are included?",
    a: "Depending on your family's requirement, this can include Pind Daan, Tarpan, Shraddha Karma, Sankalp & Pitru Aavahan, Brahmin Bhojan and Asthi Visarjan assistance.",
  },
  {
    q: "Can families get guidance from a Pandit?",
    a: "Yes. A Pandit personally guides your family through each step of the ritual, explaining the process as it happens.",
  },
  {
    q: "Is Satvik food available?",
    a: "Yes, pure Satvik food (no onion, no garlic) is arranged with care for the occasion.",
  },
  {
    q: "Are stay/travel arrangements available?",
    a: "We assist with comfortable stay and local travel arrangements during your visit to Gaya Ji.",
  },
  {
    q: "How can I book?",
    a: "You can book by messaging us on WhatsApp or calling us directly. We will discuss your requirement and confirm the arrangements.",
  },
  {
    q: "What is the advance booking amount?",
    a: "The advance booking amount is ₹2,100/-. Please contact us to confirm your ritual requirements.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-gold/25">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold text-maroon">{q}</span>
        <IconChevronDown
          className={`h-5 w-5 shrink-0 text-forest transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-sm leading-relaxed text-ink/75">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="divider-motif mb-4 font-devanagari text-sm">प्रश्न</div>
          <h2 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10">
          {ITEMS.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
