import HeroParallaxDemo from "@/components/hero-parallax-demo";
import Cards from "@/blocks/interface-crafts-cards";
import LampDemo from "@/components/lamp-demo";

export default function EventsPage() {
  return (
    <main className="bg-white">
      <LampDemo />
      <HeroParallaxDemo />
      <section className="relative isolate z-10 bg-white pb-40 pt-8 md:pb-52">
        <div className="mx-auto mb-6 max-w-3xl px-4 text-center md:mb-2">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
            Pick a moment
          </p>
          <h2 className="text-3xl font-semibold text-[var(--brand-navy)] md:text-4xl">
            Tap a card. Watch the year unfold.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--muted-foreground)]">
            Each card is a chapter of campus life — select one to bring it
            forward, then scroll when you are ready for the next story.
          </p>
        </div>
        <Cards />
      </section>
    </main>
  );
}
