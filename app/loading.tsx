export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center bg-[var(--brand-fog)]/90 backdrop-blur-sm"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex items-center gap-3 text-sm font-semibold text-[var(--brand-navy)]">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--brand-red)]" />
        Loading
      </div>
    </div>
  );
}