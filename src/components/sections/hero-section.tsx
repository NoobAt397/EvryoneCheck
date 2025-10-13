import Link from 'next/link';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative grid w-full place-items-center overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/malik-shibly-j6zZFVoY9ss-unsplash.jpg?alt=media&token=1fb5a30f-3feb-461d-adb2-e474ad23d85a')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 text-center">
        <h1 
          className="night-sky-heading font-logo"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem) !important', lineHeight: '1.1' }}
        >
          COMMUNICATIONAL
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-white md:text-xl">
          Everyone knows how to speak,
          <br />
          Not everyone knows how to talk.
        </p>
        <div className="mt-10">
          <Link href="#services" className="night-sky-button">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
