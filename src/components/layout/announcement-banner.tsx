'use client';

import { useState, useEffect } from 'react';
import { Megaphone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ANNOUNCEMENT_KEY = 'communicational-announcement-dismissed';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        const dismissed = localStorage.getItem(ANNOUNCEMENT_KEY);
        if (dismissed !== 'true') {
          setIsVisible(true);
        }
      } catch (error) {
        // In environments where localStorage is not available, we can default to not showing the banner.
        console.error('Could not access localStorage:', error);
      }
    }
  }, [isMounted]);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(ANNOUNCEMENT_KEY, 'true');
    } catch (error) {
      console.error('Could not access localStorage:', error);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        'workshop-alert',
        isVisible ? 'animate-slide-down' : 'hidden'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center">
            <Megaphone className="mr-3 h-5 w-5" />
            <div className="text-center sm:text-left">
              <p className="font-bold">New Workshop Alert!</p>
              <p className="text-sm">
                Enroll in our "Public Speaking Mastery" course. Limited seats
                available!
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="workshop-alert-close h-8 w-8 hover:bg-white/20"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
