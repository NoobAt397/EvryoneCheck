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
        {/* Gradient bridge: hero dark navy → dissolves into page background */}
        <div
          aria-hidden="true"
          style={{
            height: '200px',
            width: '100%',
            background: 'linear-gradient(to bottom, #0f2027 0%, #162e3a 18%, #1e3d4f 34%, #2a4f5e 48%, #3d6472 60%, #7a9aaa 73%, #b4c8d0 84%, #d8e4e8 92%, hsl(220, 22%, 94%) 100%)',
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
