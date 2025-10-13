import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/malik-shibly-j6zZFVoY9ss-unsplash.jpg?alt=media&token=1fb5a30f-3feb-461d-adb2-e474ad23d85a')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/Blue%20Modern%20Podcast%20Typographic%20Logo.png?alt=media&token=1f54d3a7-3088-486f-be18-aa917a2fadf9"
          alt="COMMUNICATIONAL Logo"
          width={800}
          height={346}
          style={{ 
            filter: 'drop-shadow(0 0 10px #FFEEB3)',
            mixBlendMode: 'lighten' 
          }}
          priority
          className="w-full max-w-lg md:max-w-xl lg:max-w-2xl"
        />
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
