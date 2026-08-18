import LinkPreviewDemo from "@/components/link-preview-demo";
import TabsDemo from "@/components/tabs-demo";

export default function NoticesPage() {
  return (
    <main className="overflow-x-hidden bg-[var(--brand-fog)]">
      <section className="relative isolate z-10 bg-[var(--brand-fog)] pt-8 md:pt-12">
        <div className="page-shell pb-6 text-center md:pb-8">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-navy)]/60 uppercase">
            Notices
          </p>
          <h1 className="text-3xl font-semibold text-[var(--brand-navy)] md:text-5xl">
            What the school is saying{" "}
            <span className="text-[var(--brand-gold)]">today</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--muted-foreground)]">
            Admissions, exams, holidays, results, and everyday reminders — tap a
            tab, then read on when you are ready.
          </p>
        </div>
        <div className="pb-28 md:pb-36">
          <TabsDemo />
        </div>
      </section>
      <section className="relative z-0 overflow-hidden bg-white">
        <LinkPreviewDemo />
      </section>
    </main>
  );
}
