'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#home" className="flex items-center gap-2 font-bold text-lg">
            <Image
              src="/communicational-logo.png"
              alt="Communicational Logo"
              width={1024}
              height={1024}
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link href="#" aria-label="Instagram" className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors duration-200 ease-in-out hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors duration-200 ease-in-out hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Twitter" className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors duration-200 ease-in-out hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear ?? ''} COMMUNICATIONAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
