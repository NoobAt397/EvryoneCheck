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
        <DownloadRibbon />
        {/* Subtle gradient bridge from dark hero into the cool-blue sections */}
        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#203a43]/10 to-transparent pointer-events-none -z-0" />
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
