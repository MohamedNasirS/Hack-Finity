
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface SquareProps {
  orientation?: 'horizontal' | 'vertical' | 'diagonal';
  delay?: number;
}

const Square: React.FC<SquareProps> = ({ orientation = 'horizontal', delay = 0 }) => {
  const squareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = squareRef.current;
    if (!element) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true, delay });

    if (!orientation || orientation === "horizontal" || orientation === "vertical" || orientation === "diagonal") {
      let xPercent = 0;
      let yPercent = 0;

      if (orientation === 'horizontal') {
        xPercent = 100;
      } else if (orientation === 'vertical') {
        yPercent = 100;
      } else if (orientation === 'diagonal') {
        xPercent = 100;
        yPercent = 100;
      }

      tl.fromTo(
        element,
        { xPercent: 0, yPercent: 0 },
        {
          xPercent: xPercent,
          yPercent: yPercent,
          duration: 2,
          ease: 'power1.inOut',
        }
      );
    }

    return () => {
      tl.kill();
    };
  }, [orientation, delay]);

  return (
    <div
      ref={squareRef}
      className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-hackfinity-blue origin-center rounded-sm"
    ></div>
  );
};

export default Square;
