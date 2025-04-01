
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
    
    // Create aurora elements
    const createAurora = () => {
      const aurora = document.createElement('div');
      aurora.classList.add('aurora');
      
      // Random properties for variety
      const width = 150 + Math.random() * 250;
      const height = 300 + Math.random() * 400;
      const x = Math.random() * window.innerWidth;
      const y = (Math.random() * window.innerHeight * 0.5) + (window.innerHeight * 0.5);
      
      // Choose a random aurora color palette
      const colorTypes = ['green-purple', 'blue-purple', 'teal-blue', 'pink-purple'];
      const colorType = colorTypes[Math.floor(Math.random() * colorTypes.length)];
      aurora.classList.add(`aurora-${colorType}`);
      
      aurora.style.width = `${width}px`;
      aurora.style.height = `${height}px`;
      aurora.style.left = `${x}px`;
      aurora.style.bottom = `${y - window.innerHeight}px`;
      
      // Random animation timing
      const animDuration = 15 + Math.random() * 20;
      aurora.style.animationDuration = `${animDuration}s`;
      
      container.appendChild(aurora);
      return aurora;
    };
    
    // Create nebulas (subtle cosmic clouds)
    const createNebula = () => {
      const nebula = document.createElement('div');
      nebula.classList.add('nebula');
      
      const size = 100 + Math.random() * 200; // Random size
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      // Use aurora-inspired colors for nebulas
      const colorTypes = ['#9b87f5', '#0EA5E9', '#D6BCFA', '#8B5CF6', '#6E59A5'];
      const color = colorTypes[Math.floor(Math.random() * colorTypes.length)];
      
      nebula.style.width = `${size}px`;
      nebula.style.height = `${size}px`;
      nebula.style.left = `${x}px`;
      nebula.style.top = `${y}px`;
      nebula.style.background = `radial-gradient(circle, ${color}20 0%, transparent 70%)`;
      
      container.appendChild(nebula);
      
      return nebula;
    };
    
    // Create some auroras
    const auroras = Array(4).fill(0).map(() => createAurora());
    
    // Create some nebulas
    const nebulas = Array(8).fill(0).map(() => createNebula());
    
    // Animation loop for interactive elements
    let animationFrameId: number;
    
    const animate = () => {
      // Move nebulas based on mouse position
      nebulas.forEach((nebula) => {
        const offsetX = (mousePosition.x - 0.5) * 30;
        const offsetY = (mousePosition.y - 0.5) * 30;
        
        nebula.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
      
      // Subtle movement for auroras based on mouse position
      auroras.forEach((aurora) => {
        const offsetX = (mousePosition.x - 0.5) * 10;
        aurora.style.transform = `translateX(${offsetX}px)`;
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
