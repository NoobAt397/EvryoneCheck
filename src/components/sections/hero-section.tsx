import { AuthWidget } from '@/components/AuthWidget';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section flex min-h-[75vh] flex-col w-full items-center justify-center px-4 py-16 text-center"
    >
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center">
        <div className="w-full flex justify-center mb-2">
          <h1 className="hero-heading font-logo">
            COMMUNICATIONAL
          </h1>
        </div>
        <p className="max-w-2xl text-lg text-white/90 mx-auto mb-8 md:text-xl">
          Everyone knows how to speak,
          <br />
          Not everyone knows how to talk.
        </p>
        <div className="flex flex-col items-center gap-6">
          <AuthWidget />
          <Link href="#services" className="hero-button">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
