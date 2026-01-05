'use client';

import { AuthWidget } from '@/components/AuthWidget';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion, useAnimate, stagger } from 'framer-motion';

function HeroHeadline() {
  const [scope, animate] = useAnimate();
  const words = "Everyone knows how to speak, not everyone knows how to talk.".split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      { duration: 2, delay: stagger(0.2) }
    );
  }, [animate]);

  return (
    <p className="max-w-4xl text-base sm:text-lg text-white/90 mx-auto hero-paragraph px-4" ref={scope}>
      {words.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0 inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section flex min-h-[60vh] md:min-h-[65vh] flex-col w-full items-center justify-center px-6 py-10 md:py-14 text-center"
    >
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center max-w-6xl">
        <div className="w-full flex justify-center mb-1">
          <h1 className="hero-heading font-logo">
            COMMUNICATIONAL
          </h1>
        </div>
        <HeroHeadline />
        <p className="max-w-4xl text-lg sm:text-xl md:text-2xl text-white/95 mx-auto mb-4 font-semibold hero-subheading px-4">
          Transform communication into a learnable skill—express yourself with confidence, clarity, and authenticity.
        </p>
        <div className="flex flex-col items-center gap-3 mt-1">
          <AuthWidget />
          <Link href="#services" className="hero-button">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
