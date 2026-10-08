import type { Testimonial } from "./testimonialsData";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="ui-card group relative flex flex-col overflow-hidden rounded-2xl border p-8 hover:border-[#FF6B00]/60 sm:p-10">
      <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-[#FF6B00]/20 blur-2xl" />
      <div className="relative flex-1">
        <div className="mb-4 text-3xl text-[#FF6B00]/55">&quot;</div>

        <p className="mb-6 text-sm leading-relaxed text-neutral-700 sm:text-base">
          {testimonial.text}
        </p>

        <div className="mb-6 flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-lg text-[#FF6B00]">
              ★
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <h3 className="text-lg font-semibold text-[#111111]">
            {testimonial.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}
