const MARQUEE_TEXT = "AdsLogic - AI-Powered Marketing Solutions";

export default function MarqueeBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="px-8 text-center text-[clamp(2rem,8vw,5rem)] font-bold uppercase tracking-tight text-[#FF6B00]/10">
          {MARQUEE_TEXT}
        </span>
      </div>
    </div>
  );
}
