import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative min-h-screen bg-[#FFF1E6] px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients
            have to say about working with us.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
