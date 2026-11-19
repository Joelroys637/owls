import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Reveal3DProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export function Reveal3D({ children, className = '', delayMs = 0 }: Reveal3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`reveal-3d ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
