export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[250] flex items-center justify-center bg-white"
      role="status"
      aria-label="Loading page"
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
        <img
          src="/preloading/Every-page.gif"
          alt="Loading"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}