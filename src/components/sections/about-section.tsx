import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Instagram, Linkedin } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

const founders = [
  {
    id: 'founder1',
    name: 'Bineet Singh Chawla',
    message: 'To build a future India where the mastery of communication is not a privilege, but a practical skill accessible to anyone, everywhere. By turning Indians into phenomenal communicators one person at a time.',
    instagram: 'https://www.instagram.com/bineet_81?igsh=MXhucHlzem5xODk1Mg==',
    linkedin: 'https://www.linkedin.com/in/bineet-singh-80b158214/',
  },
  {
    id: 'founder2',
    name: 'Sanskaar Dutt',
    message: "At Communicational, we've always believed that communication isn't just about speaking well — it's about connecting deeply. Our goal is to help people express themselves with confidence, clarity, and authenticity, because when you learn to communicate right, every door in life opens a little easier.",
    instagram: 'https://www.instagram.com/sanskaar_dutt?igsh=MThhaGpuYmFoNDlneg%3D%3D&utm_source=qr',
    linkedin: 'https://www.linkedin.com/in/sanskaar-dutt-b48400216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
];

export function AboutSection() {
  const founderImages = PlaceHolderImages.filter(img => img.id.startsWith('founder'));

  return (
    <section id="about" className="py-5 md:py-7">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-5">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
              Meet Our Founders
            </h2>
            <p className="mt-1 text-sm text-foreground/80">
              The driving force behind our vision of clearer communication.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {founders.map((founder, index) => {
            const founderImage = founderImages.find(img => img.id === founder.id);
            return (
              <FadeIn key={founder.id} delay={index * 0.12}>
                <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border bg-card/80 backdrop-blur-sm text-card-foreground shadow-lg interactive-element h-full md:flex-row md:items-start md:gap-6">
                  {/* Circular avatar — smaller on mobile, larger on desktop */}
                  {founderImage && (
                    <div className="relative w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden shrink-0 border-2 border-primary/30">
                      <Image
                        src={founderImage.imageUrl}
                        alt={founderImage.description}
                        fill
                        className="object-cover object-top"
                        data-ai-hint={founderImage.imageHint}
                        sizes="(max-width: 768px) 100px, 130px"
                      />
                    </div>
                  )}
                  {/* Text content */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-lg font-bold font-headline text-center md:text-left">{founder.name}</h3>
                    <p className="mt-1.5 text-muted-foreground text-sm font-body leading-relaxed line-clamp-5 text-center md:text-left">
                      "{founder.message}"
                    </p>
                    <div className="mt-4 flex items-center gap-1 justify-center md:justify-start">
                      <Link href={founder.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 hover:bg-accent rounded-xl transition-colors">
                        <Instagram className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
                      </Link>
                      <Link href={founder.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 hover:bg-accent rounded-xl transition-colors">
                        <Linkedin className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
