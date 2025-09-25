import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '../ui/card';

export function AboutSection() {
  const founderImage = PlaceHolderImages.find(img => img.id === 'founder');

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            A Message From Our Founder
          </h2>
        </div>
        <Card className="mt-12 overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1">
              {founderImage && (
                <div className="relative h-full min-h-[300px] w-full">
                  <Image
                    src={founderImage.imageUrl}
                    alt={founderImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={founderImage.imageHint}
                  />
                </div>
              )}
            </div>
            <div className="md:col-span-2 p-8 md:p-12">
              <p className="text-lg font-medium leading-relaxed text-foreground/90">
                "When I started BrandBloom, my vision was simple: to create a space where everyone feels empowered to grow and connect. I wanted to build more than just a brand; I wanted to build a community founded on positivity, support, and shared joy. Every event we host, every product we create, is infused with this spirit."
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/70">
                "Seeing our community flourish has been the most rewarding experience of my life. Your stories inspire us every day. Thank you for being a part of this journey. Let's continue to bloom together."
              </p>
              <p className="mt-6 font-bold text-foreground">- Jane Doe, Founder</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
