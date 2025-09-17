'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function ScrollAnimatedSection({ children, className = '', id }: ScrollAnimatedSectionProps) {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id={id} className={`fade-on-scroll ${className}`}>
      {children}
    </section>
  );
}
