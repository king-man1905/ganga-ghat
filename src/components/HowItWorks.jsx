const STEPS = [
  { n: "01", title: "Contact Us", desc: "Reach out on WhatsApp or by phone to begin." },
  { n: "02", title: "Discuss Your Requirement", desc: "Share your family tradition and dates with us." },
  { n: "03", title: "Pandit & Ritual Arrangements", desc: "We arrange the Pandit and all ritual essentials." },
  { n: "04", title: "Perform the Ritual with Guidance", desc: "Complete the Pind Daan with step-by-step guidance." },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="divider-motif mb-4 font-devanagari text-sm">प्रक्रिया</div>
          <h2 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">How It Works</h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-px bg-gold/40 lg:block"
            aria-hidden="true"
          />
          {STEPS.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-ivory font-display text-xl font-semibold text-maroon">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-maroon">{s.title}</h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-ink/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
