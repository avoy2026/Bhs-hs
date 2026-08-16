import TabsDemo from "@/components/tabs-demo";

export default function NoticesPage() {
  return (
    <main className="section-light min-h-[70vh]">
      <div className="page-shell pb-0 text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-navy)]/60 uppercase">
          Notices
        </p>
        <h1 className="text-3xl font-semibold text-[var(--brand-navy)] md:text-5xl">
          School Notices & Updates
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--muted-foreground)]">
          Stay informed about admissions, exams, holidays, results, and general
          announcements from Boromohonpur High School.
        </p>
      </div>
      <TabsDemo />
    </main>
  );
}
