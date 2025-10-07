'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#home" className="flex items-center gap-2 font-bold text-lg">
            <Image 
              src="https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/Blue%20Modern%20Podcast%20Typographic%20Logo.png?alt=media&token=1f54d3a7-3088-486f-be18-aa917a2fadf9" 
              alt="COMMUNICATIONAL Logo"
              width={346}
              height={150}
              style={{ height: '150px', width: 'auto' }}
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-slate-400 transition-colors hover:text-white" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-slate-400 transition-colors hover:text-white" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-slate-400 transition-colors hover:text-white" />
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} COMMUNICATIONAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
