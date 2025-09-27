import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const founders = [
  {
    id: 'founder1',
    name: 'Alex Doe',
    message: "Our goal is to build bridges through words. In a world that's more connected yet more divided than ever, clear and empathetic communication is the key to unlocking potential.",
  },
  {
    id: 'founder2',
    name: 'Jordan Smith',
    message: "We started COMMUNICATIONAL to create a space for growth. Seeing our clients find their voice and confidence is the most rewarding part of our journey.",
  },
];

export function AboutSection() {
  const founderImages = PlaceHolderImages.filter(img => img.id.startsWith('founder'));

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Meet Our Founders
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            The driving force behind our vision of clearer communication.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {founders.map((founder) => {
            const founderImage = founderImages.find(img => img.id === founder.id);
            return (
              <Card key={founder.id} className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-card">
                <CardContent className="p-0">
                  {founderImage && (
                    <div className="relative h-80 w-full">
                       <Image
                          src={founderImage.imageUrl}
                          alt={founderImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={founderImage.imageHint}
                       />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{founder.name}</h3>
                    <p className="mt-4 text-foreground/80">"{founder.message}"</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
