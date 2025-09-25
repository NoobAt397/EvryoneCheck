import Link from 'next/link';
import { Instagram, Linkedin, Twitter, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#home" className="flex items-center gap-2 font-bold text-lg">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span>COMMUNICATIONAL</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} COMMUNICATIONAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
