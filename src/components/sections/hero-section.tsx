import { AuthWidget } from '@/components/AuthWidget';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section flex min-h-[75vh] md:min-h-[70vh] flex-col w-full items-center justify-center px-4 py-16 text-center"
    >
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center">
        <div className="w-full flex justify-center mb-2">
          <h1 className="hero-heading font-logo">
            COMMUNICATIONAL
          </h1>
        </div>
        <p className="max-w-4xl text-lg text-white/90 mx-auto mb-8 md:text-xl leading-relaxed hero-paragraph">
          Everyone knows how to speak, not everyone knows how to talk. At
          Communicational, we work to transform communication from an abstract
          talent into a learnable, practical skill accessible to anyone,
          anywhere. We focus on helping people express themselves with
          confidence, clarity, and authenticity. Our goal is to empower
          participants with real-world communication skills that prepare them for
          success — not just by improving spoken clarity and body language, but
          by building public speaking confidence and reducing the fear of
          judgment. We believe that when you learn to communicate right, every
          door in life opens a little easier. We’re excited to share our
          journey with you!
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
