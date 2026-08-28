export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center bg-white/60 backdrop-blur-xs pointer-events-none transition-opacity duration-200"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-md border border-black/5 text-xs font-semibold text-[var(--brand-navy)]">
        <span className="h-2 w-2 animate-ping rounded-full bg-[var(--brand-gold)]" />
        <span className="font-display tracking-wide">Loading...</span>
      </div>
    </div>
  );
}