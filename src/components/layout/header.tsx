'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useFirebase, useUser } from '@/firebase';
import { handleSignOut, signInWithGoogle } from '@/lib/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

  const { user, isUserLoading } = useUser();
  const { auth, firestore } = useFirebase();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLink = (link: typeof navLinks[0]) => (
    <li key={link.href}>
      <a
        href={link.href}
        onClick={() => setIsMobileMenuOpen(false)}
        className="block rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white md:inline-block"
      >
        {link.label}
      </a>
    </li>
  );
  
  const mobileRenderNavLink = (link: typeof navLinks[0]) => (
    <li key={link.href}>
      <a
        href={link.href}
        onClick={() => setIsMobileMenuOpen(false)}
        className="block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-primary/80 hover:text-primary-foreground"
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
          ? 'bg-slate-900/90 shadow-md backdrop-blur-sm'
          : 'bg-slate-900'
      )}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 text-lg font-bold -ml-8">
          <Image 
            src="https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/Blue%20Modern%20Podcast%20Typographic%20Logo.png?alt=media&token=1f54d3a7-3088-486f-be18-aa917a2fadf9" 
            alt="COMMUNICATIONAL Logo"
            width={346}
            height={150}
            className="h-[150px] w-auto"
            style={{ mixBlendMode: 'lighten' }}
            priority
          />
        </Link>
        <div className='flex items-center gap-4'>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navLinks.map(renderNavLink)}
            </ul>
          </nav>
          
          {isUserLoading ? (
            <div className="h-10 w-10 animate-pulse rounded-full bg-slate-700" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full transition-opacity hover:opacity-80">
                  <Avatar>
                    <AvatarImage src={user.photoURL ?? undefined} alt={user.displayName ?? 'User'} />
                    <AvatarFallback>
                      {user.displayName?.charAt(0) ?? user.email?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{user.displayName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleSignOut(auth)}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="ghost"
              className="text-slate-300 hover:bg-slate-700 hover:text-white"
              onClick={() => signInWithGoogle(auth, firestore)}
            >
              <LogIn className="mr-2 h-5 w-5" />
              Login
            </Button>
          )}
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:bg-slate-700 hover:text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background text-foreground">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link
                    href="#home"
                    className="flex items-center gap-2 font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                     <Image 
                        src="https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/Blue%20Modern%20Podcast%20Typographic%20Logo.png?alt=media&token=1f54d3a7-3088-486f-be18-aa917a2fadf9" 
                        alt="COMMUNICATIONAL Logo"
                        width={346}
                        height={150}
                        style={{ mixBlendMode: 'lighten' }}
                        className="h-[150px] w-auto"
                     />
                  </Link>
                </div>
                <nav className="mt-6 flex-grow">
                  <ul className="flex flex-col gap-4">
                    {navLinks.map(mobileRenderNavLink)}
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
