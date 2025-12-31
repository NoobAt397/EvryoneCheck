import { AuthWidget } from '@/components/AuthWidget';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section flex min-h-[80vh] md:min-h-[85vh] flex-col w-full items-center justify-center px-6 py-20 md:py-24 text-center"
    >
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center max-w-6xl">
        <div className="w-full flex justify-center mb-2">
          <h1 className="hero-heading font-logo">
            COMMUNICATIONAL
          </h1>
        </div>
        <p className="max-w-4xl text-base sm:text-lg text-white/90 mx-auto hero-paragraph px-4">
          Everyone knows how to speak, not everyone knows how to talk.
        </p>
        <p className="max-w-4xl text-lg sm:text-xl md:text-2xl text-white/95 mx-auto mb-12 font-semibold hero-subheading px-4">
          Transform communication into a learnable skill—express yourself with confidence, clarity, and authenticity.
        </p>
        <div className="flex flex-col items-center gap-8 mt-4">
          <AuthWidget />
          <Link href="#services" className="hero-button">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
