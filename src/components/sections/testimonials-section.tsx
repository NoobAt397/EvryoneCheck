import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'A Life-Changing Experience!',
    quote: "Joining the BrandBloom community was the best decision I've made. The workshops are inspiring, and I've met so many wonderful people.",
    rating: 5,
  },
  {
    name: 'Michael B.',
    title: 'Incredibly Positive Atmosphere',
    quote: "From the moment I attended my first event, I felt welcomed. The positivity is contagious, and I always leave feeling uplifted and motivated.",
    rating: 5,
  },
  {
    name: 'Jessica T.',
    title: 'Finally Found My Tribe',
    quote: "I've been searching for a community like this for years. BrandBloom is more than a brand; it's a family. I'm so grateful to be a part of it.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Community is Saying
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Real stories from real people who have blossomed with us.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <blockquote className="text-lg font-medium leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter>
                <p className="font-bold text-foreground">{testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
