'use client';

import Link from 'next/link';
import { CheckCircle2, Star } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

const services = [
  {
    title: 'PERSONAL TRAINING',
    slug: 'personal-branding-workshops',
    description: 'Define your unique story and learn how to communicate it effectively across all platforms.',
    price: '₹8,000',
    demoVideoUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/communicational%20video.mp4?alt=media&token=ba5950e8-7c78-4830-acd4-52c2dafc83d8'
  },
];

const highlights = [
  'Personal Brand Development',
  'Public Speaking Mastery',
  'Confidence & Clarity Coaching',
  'Networking & Social Skills',
];

export function ServicesSection() {
  return (
    <section id="services" className="py-5 md:py-7">
      <div className="container mx-auto px-4 md:px-6">

        <FadeIn direction="up">
          <div className="mb-5 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
              Our Services
            </h2>
            <p className="mt-1 text-sm text-foreground/70">
              Tailored solutions to help you communicate with impact.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">

          {/* Left — highlights as pills */}
          <FadeIn className="lg:col-span-2" delay={0.1}>
            <ul className="flex flex-col gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-primary/20 bg-primary/5 text-sm text-foreground/80 font-medium"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right — premium product card (3/5 width) */}
          {services.map((service) => (
            <FadeIn key={service.title} className="lg:col-span-3" delay={0.2}>
              <div className="relative">
                {/* Ambient glow behind card */}
                <div className="absolute -inset-2 -z-10 rounded-3xl bg-blue-500/10 blur-2xl" />

                <div className="rounded-2xl border border-blue-500/40 bg-card/90 backdrop-blur-sm text-card-foreground shadow-[0_0_40px_rgba(59,130,246,0.18)] p-7">
                  {/* Featured badge */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-[11px] font-semibold tracking-wider uppercase">
                      <Star className="h-3 w-3 fill-primary" />
                      Featured Programme
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-wide">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                  {/* Price badge */}
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-cyan-400">₹8,000</span>
                    <span className="text-sm text-muted-foreground font-medium">/ programme</span>
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    <Link href={`/course/${service.slug}`} passHref>
                      <button
                        className="glass-glow-button w-full"
                        style={{
                          fontSize: '0.78rem',
                          letterSpacing: '0.09em',
                          padding: '1rem 1.5rem',
                          boxShadow: '0 0 22px 4px hsla(var(--primary), 0.4), 0 4px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.5)',
                        }}
                      >
                        PROGRAMME STARTS AT Rs. 8,000/-
                      </button>
                    </Link>
                    <button className="w-full py-2 px-4 text-xs font-semibold rounded-full border border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 transition-colors duration-200 tracking-wide">
                      Application Form
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

        </div>
      </div>
    </section>
  );
}
