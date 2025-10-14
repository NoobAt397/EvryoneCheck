import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const founders = [
  {
    id: 'founder1',
    name: 'Bineet Singh Chawla',
    message: 'To build a future India where the mastery of communication is not a privilege, but a practical skill accessible to anyone, everywhere. By turning Indians into phenomenal communicators one person at a time.',
  },
  {
    id: 'founder2',
    name: 'Sanskaar Dutt',
    message: "“At Communicational, we’ve always believed that communication isn’t just about speaking well — it’s about connecting deeply. Our goal is to help people express themselves with confidence, clarity, and authenticity, because when you learn to communicate right, every door in life opens a little easier.”",
  },
];

export function AboutSection() {
  const founderImages = PlaceHolderImages.filter(img => img.id.startsWith('founder'));

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl gradient-text">
            Meet Our Founders
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            The driving force behind our vision of clearer communication.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {founders.map((founder) => {
            const founderImage = founderImages.find(img => img.id === founder.id);
            return (
              <div key={founder.id} className="overflow-hidden rounded-lg border border-gray-200">
                <div className="p-0">
                  {founderImage && (
                    <div className="relative h-80 w-full">
                       <Image
                          src={founderImage.imageUrl}
                          alt={founderImage.description}
                          fill
                          className="object-cover rounded-t-lg"
                          data-ai-hint={founderImage.imageHint}
                          quality={100}
                       />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{founder.name}</h3>
                    <p className="mt-2 text-foreground/80">"{founder.message}"</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
