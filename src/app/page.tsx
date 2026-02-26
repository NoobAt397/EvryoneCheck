import { AnnouncementBanner } from '@/components/layout/announcement-banner';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { DownloadRibbon } from '@/components/sections/download-ribbon';
import { EventsSection } from '@/components/sections/events-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBanner />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* FREE GUIDE BANNER — temporarily hidden, re-enable when ready */}
        <div className="hidden">
          <DownloadRibbon />
        </div>
        {/* Gradient bridge: hero dark navy → mid blue → background white */}
        <div
          aria-hidden="true"
          className="h-28 w-full"
          style={{
            background: 'linear-gradient(to bottom, #0f2027 0%, #203a43 35%, #2c5364 65%, hsl(220, 22%, 94%) 100%)',
          }}
        />
        <div className="relative">
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <EventsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
