import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CountdownTimer } from '../components/CountdownTimer';
import { SponsorSection } from '../components/SponsorSection';
import { Rocket, Code, Globe, Zap } from 'lucide-react';

const PRIMARY_BLUE = "#009dff";

// Particle animation types
interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
}

// Animated Logo Component
const HackfinityLogo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.src = '/logo.png';

    image.onload = function () {
      const scale = 0.3;
      canvas.width = image.width * scale;
      canvas.height = image.height * scale;

      // Draw and capture image data
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles: Particle[] = [];
      for (let y = 0; y < canvas.height; y += 2) {
        for (let x = 0; x < canvas.width; x += 2) {
          const index = (y * canvas.width + x) * 4;
          const r = imageData.data[index];
          const g = imageData.data[index + 1];
          const b = imageData.data[index + 2];
          const a = imageData.data[index + 3];

          if (a > 0) {
            particles.push({
              x: Math.random() * canvas.width * 2,
              y: Math.random() * canvas.height * 2,
              targetX: x,
              targetY: y,
              color: `rgb(${r}, ${g}, ${b})`,
            });
          }
        }
      }
      particlesRef.current = particles;

      animateParticles(shrinkLogo);
    };

    const animateParticles = (callback: () => void) => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let allArrived = true;

      particlesRef.current.forEach((p) => {
        p.x += (p.targetX - p.x) * 0.07;
        p.y += (p.targetY - p.y) * 0.07;

        if (Math.abs(p.targetX - p.x) > 0.5 || Math.abs(p.targetY - p.y) > 0.5) {
          allArrived = false;
        }

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 2, 2);
      });

      if (!allArrived) {
        animationRef.current = requestAnimationFrame(() => animateParticles(callback));
      } else {
        setTimeout(callback, 500);
      }
    };

    const shrinkLogo = () => {
      if (!canvas || !ctx) return;
      
      let newScale = 3;
      const image = new Image();
      image.src = '/logo.png';

      const shrink = () => {
        if (!ctx || !canvas) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(newScale, newScale);
        ctx.drawImage(image, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        ctx.restore();

        newScale -= 0.09;
        if (newScale > 0.9) {
          animationRef.current = requestAnimationFrame(shrink);
        } else {
          setAnimationComplete(true);
        }
      };

      image.onload = shrink;
    };

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative z-10 flex justify-center items-center w-full h-full">
      <canvas
        ref={canvasRef}
        className={`absolute w-auto h-auto max-w-[800px] max-h-[800px] transition-opacity duration-1000 ${animationComplete ? 'opacity-100' : 'opacity-90'}`}
      />
      {animationComplete && (
        <div className="absolute inset-0 flex items-center justify-center">
        
        </div>
      )}
    </div>
  );
};

// Squares background component
const Squares = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  hoverFillColor = "#222",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<{x: number, y: number} | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "#060606");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case "right":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case "left":
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case "up":
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case "down":
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case "diagonal":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;
      const hoveredSquareX = Math.floor(
        (mouseX + gridOffset.current.x - startX) / squareSize
      );
      const hoveredSquareY = Math.floor(
        (mouseY + gridOffset.current.y - startY) / squareSize
      );

      if (
        !hoveredSquareRef.current ||
        hoveredSquareRef.current.x !== hoveredSquareX ||
        hoveredSquareRef.current.y !== hoveredSquareY
      ) {
        hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full border-none block absolute top-0 left-0 z-0"
    ></canvas>
  );
};

const TIMELINE_ITEMS = [
  { time: '09:00 AM', title: 'Opening Ceremony', desc: 'Kickstart with an inspiring keynote and briefing.' },
  { time: '10:00 AM', title: 'Hacking Begins', desc: 'Teams start building their awesome projects.' },
  { time: '02:00 PM', title: 'Mentor Sessions', desc: 'Get help from mentors and industry experts.' },
  { time: '08:00 PM', title: 'Fun Breaks', desc: 'Join games, mini-events & refreshment activities.' },
  { time: '09:00 AM (Day 2)', title: 'Final Submission', desc: 'Submit your projects for judging.' },
  { time: '11:00 AM', title: 'Closing & Prizes', desc: 'Celebrate the winners and wrap it up!' }
];

const TimelineSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Event Timeline</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#009dff]"></div>
        
        {TIMELINE_ITEMS.map((item, index) => {
          const isEven = index % 2 === 0;
          const baseDelay = index * 150;
          
          return (
            <div 
              key={index} 
              className={`relative mb-10 w-full ${isEven ? 'pr-[50%]' : 'pl-[50%]'}`}
            >
              {/* Dot */}
              <div 
                className="absolute w-4 h-4 rounded-full bg-[#009dff] border-4 border-[#111] left-1/2 transform -translate-x-1/2 top-6 opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${baseDelay}ms`,
                  animationDuration: '400ms'
                }}
              ></div>
              
              {/* Content */}
              <div 
                className={`bg-[#111] p-6 rounded-lg border border-[#009dff] shadow-lg transition-all duration-500 hover:scale-[1.02] opacity-0 animate-fade-in-up ${
                  isEven ? 'text-right mr-6' : 'text-left ml-6'
                }`}
                style={{ 
                  animationDelay: `${baseDelay + 100}ms`,
                  animationDuration: '600ms'
                }}
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-[#009dff] mb-2">{item.time}</p>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Homepage = () => {
  const hackathonDate = '2023-12-31';

  return (
    <main className="overflow-x-hidden">
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up ease-out forwards;
        }
      `}</style>

      <section className="min-h-screen flex justify-center items-center bg-black relative overflow-hidden">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="rgba(0, 157, 255, 0.3)"
          squareSize={50}
          hoverFillColor="rgba(0, 157, 255, 0.2)"
        />
        <HackfinityLogo />
      </section>

      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pb-16 pt-20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 font-['Space_Grotesk'] text-white">
            Pushing the Boundaries of Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            A 24-hour coding challenge to solve real-world problems with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="bg-[#009dff] text-white hover:bg-[#00b0ff] transition-all animate-btn-pulse">
              <NavLink to="/registration">Register Now</NavLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <NavLink to="/about">Learn More</NavLink>
            </Button>
          </div>

          <CountdownTimer targetDate={hackathonDate} />
          
          <TimelineSection />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Makes Us Different</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hack-Finity offers a unique space-tech inspired environment for innovation and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Rocket, title: "Launch Your Ideas", desc: "Transform your innovative concepts into functioning prototypes in just 24 hours." },
              { Icon: Code, title: "Cutting-Edge Tech", desc: "Access to the latest technologies, APIs, and developer tools for your projects." },
              { Icon: Globe, title: "Global Network", desc: "Connect with students, professionals, and mentors from around the world." },
              { Icon: Zap, title: "Amazing Prizes", desc: "Win exciting prizes, internship opportunities, and recognition for your innovations." }
            ].map(({ Icon, title, desc }, idx) => (
              <div 
                key={idx} 
                className="bg-[#111] p-6 rounded-lg border border-[#009dff] transition-transform hover:scale-105 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100 + 1200}ms` }}
              >
                <div className="w-12 h-12 bg-[#009dff]/20 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-[#009dff]" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SponsorSection />

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-[#111] rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-[#009dff] opacity-0 animate-fade-in-up"
               style={{ animationDelay: '1800ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Hack the Future?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join hundreds of innovators and tech enthusiasts for an unforgettable 24-hour coding experience.
            </p>
            <Button asChild size="lg" className="bg-[#009dff] text-white hover:bg-[#00b0ff]">
              <NavLink to="/registration">Register Now</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;