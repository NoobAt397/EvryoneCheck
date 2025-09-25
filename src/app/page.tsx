import { AnnouncementBanner } from '@/components/layout/announcement-banner';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { EventsSection } from '@/components/sections/events-section';
import { HeroSection } from '@/components/sections/hero-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBanner />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
