import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function EventsSection() {
  const eventImages = PlaceHolderImages.filter(img => img.id.startsWith('event'));

  return (
    <section id="events" className="py-16 lg:py-24 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Our Events in Action
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Moments of connection and growth from our workshops and gatherings.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {eventImages.map((image) => (
            <Card key={image.id} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
