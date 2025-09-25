'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
  { href: '/shop', label: 'Shop', isExternal: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLink = (link: typeof navLinks[0], isMobile = false) => {
    const commonClasses =
      'text-sm font-medium transition-colors hover:text-primary-foreground hover:bg-primary/80 px-3 py-2 rounded-md';
    const mobileClasses = isMobile ? 'block w-full text-left' : '';

    const linkContent = link.isExternal ? (
      <Link href={link.href} className={cn(commonClasses, mobileClasses)}>
        {link.label}
      </Link>
    ) : (
      <a href={link.href} className={cn(commonClasses, mobileClasses)}>
        {link.label}
      </a>
    );

    return <li key={link.href}>{linkContent}</li>;
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg">
          <Leaf className="h-6 w-6 text-primary" />
          <span>BrandBloom</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => renderNavLink(link))}
          </ul>
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link
                    href="#home"
                    className="flex items-center gap-2 font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Leaf className="h-6 w-6 text-primary" />
                    <span>BrandBloom</span>
                  </Link>
                </div>
                <nav className="mt-6 flex-grow">
                  <ul
                    className="flex flex-col gap-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {navLinks.map((link) => renderNavLink(link, true))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
