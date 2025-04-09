import React, { useEffect, useRef } from 'react';

interface SquaresProps {
  direction?: 'diagonal' | 'horizontal' | 'vertical';
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
}

const Squares: React.FC<SquaresProps> = ({
  direction = 'diagonal',
  speed = 1,
  borderColor = 'rgba(255, 255, 255, 0.2)',
  squareSize = 40,
  hoverFillColor = 'rgba(255, 255, 255, 0.1)'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Calculate how many squares we need based on screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const cols = Math.ceil(screenWidth / squareSize);
    const rows = Math.ceil(screenHeight / squareSize);
    
    // Clear any existing squares
    container.innerHTML = '';
    
    // Create grid of squares
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const square = document.createElement('div');
        square.className = 'absolute border transition-colors duration-300';
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.left = `${j * squareSize}px`;
        square.style.top = `${i * squareSize}px`;
        square.style.borderColor = borderColor;
        
        // Add hover effect
        square.addEventListener('mouseenter', () => {
          square.style.backgroundColor = hoverFillColor;
        });
        
        square.addEventListener('mouseleave', () => {
          square.style.backgroundColor = 'transparent';
        });
        
        container.appendChild(square);
      }
    }
    
    // Optional animation based on direction
    if (direction !== 'none') {
      let offset = 0;
      
      const animate = () => {
        offset += speed * 0.1;
        
        const squares = container.querySelectorAll('div');
        squares.forEach((square, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          
          let translateX = 0;
          let translateY = 0;
          
          if (direction === 'diagonal' || direction === 'horizontal') {
            translateX = Math.sin(offset + row * 0.1 + col * 0.1) * 5;
          }
          
          if (direction === 'diagonal' || direction === 'vertical') {
            translateY = Math.cos(offset + row * 0.1 + col * 0.1) * 5;
          }
          
          square.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }
    
    // Handle window resize
    const handleResize = () => {
      // Recalculate and recreate grid
      if (container) {
        container.innerHTML = '';
        // Re-run the setup code
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, speed, borderColor, squareSize, hoverFillColor]);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
    ></div>
  );
};

export default Squares;
