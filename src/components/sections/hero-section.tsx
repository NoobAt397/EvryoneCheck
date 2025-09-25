import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          COMMUNICATIONAL
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
          Our vision is to empower individuals and organizations to connect with clarity, confidence, and creativity.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="text-lg">
            <Link href="#services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
