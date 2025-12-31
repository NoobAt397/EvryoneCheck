'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useUser } from '@/supabase';
import { handleSignOut, signInWithGoogle } from '@/supabase/auth';
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

  // Get user display info from Supabase user metadata
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  const photoURL = user?.user_metadata?.avatar_url;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-slate-900/90 shadow-md backdrop-blur-sm'
          : 'bg-slate-900'
      )}
    >
      <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 text-lg font-bold md:-ml-8">
          <Image
            src="/communicational-logo.png"
            alt="Communicational Logo"
            width={1024}
            height={1024}
            className="h-12 md:h-16 w-auto object-contain"
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
                    <AvatarImage src={photoURL ?? undefined} alt={displayName} />
                    <AvatarFallback>
                      {displayName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{displayName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleSignOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-slate-300 hover:bg-slate-700 hover:text-white"
              onClick={() => signInWithGoogle()}
            >
              Sign Up
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
            <SheetContent side="right" className="w-[280px] bg-background text-foreground">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link
                    href="#home"
                    className="flex items-center gap-2 font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="/communicational-logo.png"
                      alt="Communicational Logo"
                      width={1024}
                      height={1024}
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                </div>
                <nav className="mt-6 flex-grow">
                  <ul className="flex flex-col gap-4">
                    {navLinks.map(mobileRenderNavLink)}
                    <li>
                      {user ? (
                        <Button
                          className="w-full justify-start"
                          variant="ghost"
                          onClick={() => {
                            handleSignOut();
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Sign Out
                        </Button>
                      ) : (
                        <Button
                          className="w-full justify-start"
                          variant="ghost"
                          onClick={() => {
                            signInWithGoogle();
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <LogIn className="mr-2 h-4 w-4" />
                          Sign Up
                        </Button>
                      )}
                    </li>
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
