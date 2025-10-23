'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Link from 'next/link';
import { Button } from '../ui/button';

const services = [
  {
    title: 'Personal Branding Workshops',
    slug: 'personal-branding-workshops',
    description: 'Define your unique story and learn how to communicate it effectively across all platforms.',
    price: '$299',
    demoVideoUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/communicational%20video.mp4?alt=media&token=ba5950e8-7c78-4830-acd4-52c2dafc83d8'
  },
  {
    title: 'Corporate Communication Training',
    slug: 'corporate-communication-training',
    description: 'Equip your team with the skills to foster a collaborative and efficient work environment.',
    price: '$1,500',
  },
  {
    title: 'Public Speaking Coaching',
    slug: 'public-speaking-coaching',
    description: 'Overcome stage fright and master the art of delivering compelling presentations.',
    price: '$450',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-foreground/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl gradient-text">
            Our Services
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            Tailored solutions to help you or your organization communicate with impact.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.title}
              className="flex flex-col text-center rounded-lg border border-white/10"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex flex-col flex-grow p-6 glass-card-content">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-foreground/80">{service.description}</p>
                </div>
                <div className="mt-6">
                  <p className="text-3xl font-bold gradient-text">{service.price}</p>
                  <div className="mt-4">
                    <Link href={`/course/${service.slug}`} passHref>
                      <button className="glass-glow-button w-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
