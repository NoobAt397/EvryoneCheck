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

const services = [
  {
    title: 'Personal Branding Workshops',
    description: 'Define your unique story and learn how to communicate it effectively across all platforms.',
    price: '$299',
  },
  {
    title: 'Corporate Communication Training',
    description: 'Equip your team with the skills to foster a collaborative and efficient work environment.',
    price: '$1,500',
  },
  {
    title: 'Public Speaking Coaching',
    description: 'Overcome stage fright and master the art of delivering compelling presentations.',
    price: '$450',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Tailored solutions to help you or your organization communicate with impact.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <AlertDialog key={service.title}>
              <div className="service-card-gradient">
                <div className="service-card-inner flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-sm text-white/80">{service.description}</p>
                    <p className="mt-4 text-3xl font-bold">{service.price}</p>
                  </div>
                  <div className="mt-6">
                    <AlertDialogTrigger asChild>
                      <button className="neu-button w-full">Buy Now</button>
                    </AlertDialogTrigger>
                  </div>
                </div>
              </div>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Coming Soon!</AlertDialogTitle>
                  <AlertDialogDescription>
                    Our payment system is being set up. Please check back later!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>OK</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </div>
      </div>
    </section>
  );
}
