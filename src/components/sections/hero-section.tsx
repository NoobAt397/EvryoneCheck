import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/heroimage.jpg?alt=media&token=d2da7b86-0b6c-4869-9ba1-b3af4ea86007')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
