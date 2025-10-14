import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative grid w-full place-items-center overflow-hidden pt-16 md:pt-0"
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/malik-shibly-j6zZFVoY9ss-unsplash.jpg?alt=media&token=1fb5a30f-3feb-461d-adb2-e474ad23d85a')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 py-8 text-center sm:py-0">
        <div className="w-full flex justify-center">
          <h1
            className="font-logo night-sky-heading text-[clamp(2.5rem,10vw,2.5rem)] md:text-[clamp(3rem,10vw,6rem)]"
          >
            COMMUNICATIONAL
          </h1>
        </div>
        <p className="mt-6 max-w-3xl text-lg text-white md:text-xl">
          Everyone knows how to speak,
          <br />
          Not everyone knows how to talk.
        </p>
        <div className="mt-10">
          <Link href="#services" className="glass-glow-button">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
