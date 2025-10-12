import { useEffect, useRef, useState } from 'react';

const hasWindow = typeof window !== 'undefined';

export default function Reveal({
  as: Component = 'div',
  className = '',
  children,
  delay = 0,
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    if (!hasWindow) {
      setIsVisible(true);
      return;
    }

    const preferReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (preferReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const classes = ['reveal', isVisible && 'visible', className]
    .filter(Boolean)
    .join(' ');

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Component ref={elementRef} className={classes} style={style} {...rest}>
      {children}
    </Component>
  );
}
