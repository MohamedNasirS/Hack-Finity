
import { useEffect, useRef, useState } from "react";

export const StarsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('shooting-star');
      
      // Random position across the entire viewport
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const delay = Math.random() * 15; // Random delay up to 15 seconds
      
      // Set random start position
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      star.style.animationDelay = `${delay}s`;
      
      // Random animation duration between 3 and 7 seconds
      const duration = 3 + Math.random() * 4;
      star.style.animationDuration = `${duration}s`;
      
      // Random rotation to create different trajectories
      const angle = Math.random() * 360; // 0-360 degrees for all directions
      star.style.transform = `rotate(${angle}deg)`;
      
      // Apply the animation with proper fade-in
      container.appendChild(star);
      
      // Trigger reflow to ensure animation plays
      void star.offsetWidth;
      star.style.animation = `shooting-star ${duration}s ease-out forwards`;
      
      // Remove the star after animation completes
      setTimeout(() => {
        if (container.contains(star)) {
          container.removeChild(star);
          createStar(); // Create a new star to replace the old one
        }
      }, duration * 1000);
    };
    
    // Initial stars - create gradually
    for (let i = 0; i < 40; i++) {
      setTimeout(createStar, i * 100); // Stagger the creation slightly
    }
    
    // Create nebulas (subtle cosmic clouds)
    const createNebula = () => {
      const nebula = document.createElement('div');
      nebula.classList.add('nebula');
      
      const size = 100 + Math.random() * 200; // Random size
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const hue = Math.floor(Math.random() * 60) + 200; // Blue/purple hues
      
      nebula.style.width = `${size}px`;
      nebula.style.height = `${size}px`;
      nebula.style.left = `${x}px`;
      nebula.style.top = `${y}px`;
      nebula.style.background = `radial-gradient(circle, hsla(${hue}, 80%, 60%, 0.05) 0%, transparent 70%)`;
      
      container.appendChild(nebula);
      
      return nebula;
    };
    
    // Create some nebulas
    const nebulas = Array(6).fill(0).map(() => createNebula());
    
    // Animation loop for interactive elements
    let animationFrameId: number;
    
    const animate = () => {
      // Move nebulas based on mouse position
      nebulas.forEach((nebula) => {
        const offsetX = (mousePosition.x - 0.5) * 20;
        const offsetY = (mousePosition.y - 0.5) * 20;
        
        nebula.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      
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
