import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily R.',
    quote: "The Personal Branding workshop was a game-changer. I feel so much more confident in how I present myself professionally.",
    rating: 5,
  },
  {
    name: 'David Chen',
    quote: "An incredibly positive and supportive atmosphere. The trainers are experts who genuinely care about your growth.",
    rating: 5,
  },
  {
    name: 'Maria G.',
    quote: "I used to be terrified of public speaking. After the coaching sessions, I can now command a room with confidence. Highly recommend!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Real stories from people who found their voice with us.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-md bg-card">
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
