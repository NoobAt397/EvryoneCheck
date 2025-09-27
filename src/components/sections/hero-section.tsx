import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background/80"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="gradient-text">COMMUNICATIONAL</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
          Our vision is to empower individuals and organizations to connect with clarity, confidence, and creativity.
        </p>
        <div className="mt-10">
          <Link href="#services" className="gradient-button">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
