'use client';

import Link from 'next/link';

const services = [
  {
    title: 'PERSONAL TRAINING',
    slug: 'personal-branding-workshops',
    description: 'Define your unique story and learn how to communicate it effectively across all platforms.',
    price: '₹10,000',
    demoVideoUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/communicational%20video.mp4?alt=media&token=ba5950e8-7c78-4830-acd4-52c2dafc83d8'
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            Our Services
          </h2>
          <p className="mt-2 text-base text-foreground/80">
            Tailored solutions to help you or your organization communicate with impact.
          </p>
        </div>
        <div className="mt-5 md:mt-7 flex justify-center">
          {services.map((service) => (
            <div 
              key={service.title}
              className="flex flex-col text-center rounded-2xl border bg-card text-card-foreground shadow-lg max-w-sm interactive-element"
            >
              <div className="flex flex-col flex-grow p-6 text-center">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
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
