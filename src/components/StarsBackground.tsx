
import { useEffect, useRef } from "react";

export const StarsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('shooting-star');
      
      // Random position and delay
      const startX = Math.random() * window.innerWidth * 0.3;
      const startY = Math.random() * window.innerHeight * 0.3;
      const delay = Math.random() * 15; // Random delay up to 15 seconds
      
      // Set random start position
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      star.style.animationDelay = `${delay}s`;
      
      // Random animation duration between 4 and 8 seconds
      const duration = 4 + Math.random() * 4;
      star.style.animationDuration = `${duration}s`;
      
      // Random rotation to create different trajectories
      const angle = 15 + Math.random() * 30; // 15-45 degrees
      star.style.transform = `rotate(${angle}deg)`;
      
      star.style.opacity = '0';
      
      // Start animation
      container.appendChild(star);
      
      // Trigger reflow to ensure animation plays
      void star.offsetWidth;
      star.style.opacity = '1';
      star.style.animation = `shooting-star ${duration}s linear forwards`;
      
      // Remove the star after animation completes
      setTimeout(() => {
        if (container.contains(star)) {
          container.removeChild(star);
          createStar(); // Create a new star to replace the old one
        }
      }, duration * 1000);
    };
    
    // Initial stars
    for (let i = 0; i < 20; i++) {
      setTimeout(createStar, Math.random() * 3000);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <>
      <div className="fixed inset-0 bg-hackfinity-dark z-[-2]" />
      <div 
        className="fixed inset-0 z-[-1] overflow-hidden" 
        ref={containerRef}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-hackfinity-darkblue/50 z-[-1]" />
    </>
  );
};
