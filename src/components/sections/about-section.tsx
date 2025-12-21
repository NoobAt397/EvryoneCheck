import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Instagram, Linkedin } from 'lucide-react';

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
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            Meet Our Founders
          </h2>
          <p className="mt-2 text-base text-foreground/80">
            The driving force behind our vision of clearer communication.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {founders.map((founder) => {
            const founderImage = founderImages.find(img => img.id === founder.id);
            return (
              <div key={founder.id} className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg interactive-element">
                <div className="p-0">
                  {founderImage && (
                    <div className="relative h-80 w-full bg-accent/20">
                       <Image
                          src={founderImage.imageUrl}
                          alt={founderImage.description}
                          fill
                          className="object-contain object-top"
                          data-ai-hint={founderImage.imageHint}
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                       />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-headline">{founder.name}</h3>
                    <p className="mt-2 text-muted-foreground text-sm font-body leading-relaxed">"{founder.message}"</p>
                    <div className="mt-4 flex items-center gap-4">
                      <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                      </Link>
                      <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                      </Link>
                    </div>
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
