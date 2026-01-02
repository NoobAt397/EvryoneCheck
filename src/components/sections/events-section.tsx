import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function EventsSection() {
  const eventImages = PlaceHolderImages.filter(img => img.id.startsWith('event'));

  return (
    <section id="events" className="py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            Our Events
          </h2>
          <p className="mt-2 text-base text-foreground/80">
            Moments of connection and growth from our workshops and gatherings.
          </p>
        </div>
        <div className="mt-6 md:mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {eventImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-2xl border bg-card/80 text-card-foreground shadow-lg interactive-element">
              <div className="p-0">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    data-ai-hint={image.imageHint}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
