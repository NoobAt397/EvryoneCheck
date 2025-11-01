import { AnnouncementBanner } from '@/components/layout/announcement-banner';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { EventsSection } from '@/components/sections/events-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { AuthWidget } from '@/components/AuthWidget';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AnnouncementBanner />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-16 flex justify-center">
            <AuthWidget />
        </div>
        <AboutSection />
        <ServicesSection />
        <EventsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
