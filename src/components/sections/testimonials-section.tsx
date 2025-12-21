'use client';

const testimonials = [
  {
    name: 'YASHASVI',
    quote:
      'I truly enjoyed attending the communicational workshop. It gave me new perspectives and helped me understand the depth and importance of effective communication.',
    rotation: 'rotate-[-2deg]',
  },
  {
    name: 'ANSHUL',
    quote:
      'I joined about 4 of the online sessions during my summer break and the interaction activities really helped me open up and it gave me a better perspective on networking.',
    rotation: 'rotate-[2deg]',
  },
  {
    name: 'SADHYA',
    quote:
      'I had attended two sessions where I felt the concepts were clearly elaborated with help of a ppt, and I was pushed outside my comfort zone through the impromptu activities which made the learning fun for me.',
    rotation: 'rotate-[-1deg]',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-base text-foreground/80">
            Real stories from people who found their voice with us.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative transform ${testimonial.rotation} transition-transform hover:scale-105`}
            >
              <div className="speech-bubble p-8 rounded-lg shadow-lg bg-card/80 text-card-foreground">
                <p className="relative text-sm text-foreground">
                  <span className="absolute -top-4 -left-4 text-6xl font-bold text-primary opacity-50">
                    “
                  </span>
                  <span className="pl-4">{testimonial.quote}</span>
                </p>
              </div>
              <p className="mt-6 text-right font-bold uppercase text-primary tracking-wider">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
