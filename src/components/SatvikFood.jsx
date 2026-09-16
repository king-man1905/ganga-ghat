import PhotoFrame from "./PhotoFrame";

export default function SatvikFood() {
  return (
    <section className="bg-forest-dark px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <PhotoFrame
          src="/images/satvik-bhojan-banana-leaf.jpg"
          alt="Simple traditional Satvik food served on banana leaves in a religious setting"
          caption="Photo: Satvik Bhojan served on banana leaves"
          className="order-2 aspect-4/3 w-full rounded-xl heritage-border lg:order-1"
        />

        <div className="order-1 lg:order-2">
          <div className="divider-motif mb-4 justify-start font-devanagari text-sm">भोजन</div>
          <h2 className="font-display text-3xl font-semibold text-ivory sm:text-4xl">
            Pure Satvik Bhojan
          </h2>
          <p className="mt-3 inline-block rounded-full border border-gold/50 px-4 py-1.5 font-body text-sm font-medium text-gold">
            No Onion • No Garlic
          </p>
          <p className="mt-5 font-body leading-relaxed text-ivory/80">
            Traditional Satvik food arranged with care and respect for the ritual, prepared in keeping
            with family tradition and the sanctity of the occasion.
          </p>
        </div>
      </div>
    </section>
  );
}
