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
          Bloom Into Your Best Self
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          We believe in the power of personal growth and positive connection.
          Join our community and start your journey of transformation today.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="text-lg">
            <Link href="#about">Discover Our Story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
