'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageSquare, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' },
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

  const renderNavLink = (link: typeof navLinks[0]) => (
    <li key={link.href}>
      <a
        href={link.href}
        onClick={() => setIsMobileMenuOpen(false)}
        className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/80 hover:text-primary-foreground md:inline-block"
      >
        {link.label}
      </a>
    </li>
  );

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
        <Link href="#home" className="flex items-center gap-2 text-lg font-bold">
          <MessageSquare className="h-6 w-6 text-primary" />
          <span>COMMUNICATIONAL</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navLinks.map(renderNavLink)}
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
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span>COMMUNICATIONAL</span>
                  </Link>
                </div>
                <nav className="mt-6 flex-grow">
                  <ul className="flex flex-col gap-4">
                    {navLinks.map(renderNavLink)}
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
