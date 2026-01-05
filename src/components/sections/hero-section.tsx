'use client';

import { AuthWidget } from '@/components/AuthWidget';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useAnimate, stagger, AnimatePresence } from 'framer-motion';

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

function FlipSubheading() {
  const words = ["confidence", "clarity", "authenticity", "power", "impact"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="max-w-4xl text-lg sm:text-xl md:text-2xl text-white/95 mx-auto mb-4 font-semibold hero-subheading px-4">
      Transform communication into a learnable skill—express yourself with{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="inline-block gradient-text"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      .
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
          <h1 className="hero-heading font-logo bg-gradient-to-r from-white via-white/95 to-white/80 text-transparent bg-clip-text">
            COMMUNICATIONAL
          </h1>
        </div>
        <HeroHeadline />
        <FlipSubheading />
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
