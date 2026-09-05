'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'zoom-in' | 'slide-left' | 'slide-right';
}

export default function ScrollRevealCard({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}: ScrollRevealCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  let transformInitial = 'translateY(32px)';
  if (animation === 'zoom-in') transformInitial = 'scale(0.92)';
  if (animation === 'slide-left') transformInitial = 'translateX(-32px)';
  if (animation === 'slide-right') transformInitial = 'translateX(32px)';

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : transformInitial,
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
