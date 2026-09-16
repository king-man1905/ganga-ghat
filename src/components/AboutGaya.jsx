import PhotoFrame from "./PhotoFrame";

export default function AboutGaya() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <PhotoFrame
          src="/images/vishnupad-temple-architecture-gaya.jpg"
          alt="Vishnupad Temple, the central pilgrimage site for Pind Daan in Gaya Ji"
          caption="Photo: Vishnupad Temple, Gaya Ji"
          className="aspect-4/3 w-full rounded-xl heritage-border"
        />

        <div className="text-center lg:text-left">
          <div className="divider-motif mb-5 justify-center font-devanagari text-sm lg:justify-start">ॐ</div>
          <h2 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">Why Gaya Ji?</h2>

          <p className="mt-6 font-body text-base leading-relaxed text-ink/80 sm:text-lg">
            Gaya Ji, in Bihar, is one of the most significant pilgrimage destinations in Hindu tradition,
            long associated with ancestral rites and Pind Daan. Families travel here from across India and
            abroad to perform Shraddha karma for their forefathers, guided by Vedic tradition passed down
            through generations of local Pandits.
          </p>

          <p className="mt-4 font-body text-base leading-relaxed text-ink/80 sm:text-lg">
            We provide complete assistance for performing the ritual according to your family tradition and
            Vedic guidance — from the first enquiry to the final Asthi Visarjan — so you can focus on your
            family and your ancestors, with the arrangements taken care of.
          </p>
        </div>
      </div>
    </section>
  );
}
