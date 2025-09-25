'use client';

import { useState, useEffect } from 'react';
import { Megaphone, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ANNOUNCEMENT_KEY = 'brandbloom-announcement-dismissed';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(ANNOUNCEMENT_KEY);
    if (dismissed !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(ANNOUNCEMENT_KEY, 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-secondary">
      <div className="container mx-auto">
        <Alert
          className={cn(
            'border-0 rounded-none bg-secondary text-secondary-foreground flex items-center justify-between p-3'
          )}
        >
          <div className="flex items-center">
            <Megaphone className="h-5 w-5 mr-3" />
            <div>
              <AlertTitle className="font-bold">New Event!</AlertTitle>
              <AlertDescription className="text-sm">
                Join our summer workshop next month. Spots are limited!
              </AlertDescription>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-white/20"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </Button>
        </Alert>
      </div>
    </div>
  );
}
