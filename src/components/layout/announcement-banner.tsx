'use client';

import { useState, useEffect } from 'react';
import { Megaphone, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ANNOUNCEMENT_KEY = 'communicational-announcement-dismissed';
const COURSE_SLUG = 'public-speaking-mastery'; // Update this when course is available

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

  const handleCourseClick = () => {
    // Also dismiss the banner when they click to view the course
    handleDismiss();
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        'workshop-alert',
        isVisible ? 'animate-slide-down' : 'hidden'
      )}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-3 px-2">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 bg-white/10 rounded-full p-2">
              <Megaphone className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm sm:text-base mb-0.5">New Workshop Alert!</p>
              <p className="text-xs sm:text-sm text-white/90">
                Enroll in our "Public Speaking Mastery" course. Limited seats available!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href={`/course/${COURSE_SLUG}`} onClick={handleCourseClick}>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-105 text-xs sm:text-sm"
              >
                Learn More
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="workshop-alert-close h-8 w-8 min-w-[32px] hover:bg-white/20 rounded-full transition-transform hover:rotate-90 duration-200"
              onClick={handleDismiss}
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
