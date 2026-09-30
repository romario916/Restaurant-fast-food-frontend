import { Star } from "lucide-react";

import type { Testimonial } from "../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({
  testimonial,
}: TestimonialCardProps) => {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="h-14 w-14 rounded-full object-cover ring-2 ring-orange-500/20"
          />

          <div>
            <h3 className="font-black text-black">
              {testimonial.name}
            </h3>

            <div className="mt-1 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  fill={
                    index < testimonial.rating
                      ? "currentColor"
                      : "none"
                  }
                  className={
                    index < testimonial.rating
                      ? "text-orange-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-gray-600">
        “{testimonial.text}”
      </p>
    </article>
  );
};

export default TestimonialCard;