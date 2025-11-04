import { AuthWidget } from '@/components/AuthWidget';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section relative grid w-full place-items-center overflow-hidden pt-16 md:pt-0"
      style={{
        minHeight: '100vh',
      }}
    >
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 py-8 text-center sm:py-0">
        <div className="w-full flex justify-center">
          <h1 className="hero-heading font-logo text-white">
            COMMUNICATIONAL
          </h1>
        </div>
        <p className="mt-6 max-w-3xl text-base text-white/90 md:text-lg">
          Everyone knows how to speak,
          <br />
          Not everyone knows how to talk.
        </p>
        <div className="mt-10 flex flex-col items-center gap-6">
          <AuthWidget />
          <Link href="#services" className="hero-button">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
