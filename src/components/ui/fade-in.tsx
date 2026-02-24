'use client';

import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'none';
}

export function FadeIn({ children, className, delay = 0, direction = 'up' }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: direction === 'up' ? 28 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
