'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DownloadRibbon() {
  return (
    <section className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold">Free Personal Training Guide</h3>
            <p className="text-md">Download our exclusive guide to kickstart your journey. (Coming Soon)</p>
          </div>
          <Button disabled variant="outline" className="bg-secondary hover:bg-secondary/90 border-secondary-foreground/50 hover:border-secondary-foreground text-secondary-foreground">
            <Download className="mr-2 h-4 w-4" />
            Download Now
          </Button>
        </div>
      </div>
    </section>
  );
}
