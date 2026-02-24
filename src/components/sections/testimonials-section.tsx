'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'YASHASVI',
    quote:
      'I truly enjoyed attending the communicational workshop. It gave me new perspectives and helped me understand the depth and importance of effective communication.',
  },
  {
    name: 'ANSHUL',
    quote:
      'I joined about 4 of the online sessions during my summer break and the interaction activities really helped me open up and it gave me a better perspective on networking.',
  },
  {
    name: 'SADHYA',
    quote:
      'I had attended two sessions where I felt the concepts were clearly elaborated with help of a ppt, and I was pushed outside my comfort zone through the impromptu activities which made the learning fun for me.',
  },
  {
    name: 'KUNJAL',
    quote:
      'Communicational has been a wonderful experience for me. The structured sessions and regular practice greatly improved my confidence in communication. The efforts of Bineet and Sanskar, both in the sessions and through their personal guidance and encouragement, made the experience even more valuable.',
  },
  {
    name: 'VEDA',
    quote:
      'The experience that I had with Communicational was truly AMAZING! It made me realise that the skill of communication is much more than just public speaking or the ability to overcome stage fear. Communication comes into play everyday in every single conversation and after 1 month with Communicational I was able to improve every single conversation of mine that came after.',
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent(c => Math.max(c - 1, 0));
  const next = () => setCurrent(c => Math.min(c + 1, total - 1));

  return (
    <section id="testimonials" className="py-4 md:py-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            What Our Clients Say
          </h2>
          <p className="mt-1 text-sm text-foreground/80">
            Real stories from people who found their voice with us.
          </p>
        </div>

        <div className="mt-4 mx-auto max-w-3xl">
          {/* Carousel track */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8 md:px-12">
                    <div className="rounded-2xl border bg-card/80 backdrop-blur-sm text-card-foreground shadow-lg p-6">
                      <p className="relative text-sm text-foreground leading-relaxed">
                        <span className="absolute -top-2 -left-2 text-5xl font-bold text-primary opacity-40 leading-none">
                          "
                        </span>
                        <span className="pl-4 block">{testimonial.quote}</span>
                      </p>
                      <p className="mt-4 text-right text-xs font-bold uppercase text-primary tracking-wider">
                        — {testimonial.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev arrow */}
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 p-1.5 rounded-full bg-card border border-border shadow hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>

            {/* Next arrow */}
            <button
              onClick={next}
              disabled={current === total - 1}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 p-1.5 rounded-full bg-card border border-border shadow hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  current === i
                    ? 'bg-primary w-5 h-2'
                    : 'bg-primary/30 w-2 h-2 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
