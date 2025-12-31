'use client';

import { useState, useEffect } from 'react';
import { Megaphone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ANNOUNCEMENT_KEY = 'communicational-announcement-dismissed';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    setIsClosing(true);
    try {
      localStorage.setItem(ANNOUNCEMENT_KEY, 'true');
    } catch (error) {
      console.error('Could not access localStorage:', error);
    }
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false);
    }, 400); // Match animation duration
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        'workshop-alert',
        isVisible && !isClosing && 'animate-slide-down',
        isClosing && 'animate-fade-out'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center flex-1 min-w-0">
            <Megaphone className="mr-3 h-5 w-5 flex-shrink-0" />
            <div className="text-center sm:text-left min-w-0">
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
            className="workshop-alert-close h-10 w-10 min-h-10 min-w-10 ml-2 hover:bg-white/30 flex-shrink-0"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
