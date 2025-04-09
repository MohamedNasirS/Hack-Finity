import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CountdownTimer } from '../components/CountdownTimer';
import { SponsorSection } from '../components/SponsorSection';
import { Rocket, Code, Globe, Zap } from 'lucide-react';

// Squares component (unchanged)
const Squares = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  hoverFillColor = "#222",
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;
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

    const handleMouseMove = (event) => {
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

// Simplified HackfinityLogo component without particle effects
const HackfinityLogo: React.FC = () => {
  return (
    <div className="relative z-10 flex justify-center items-center">
      <img
        src="/logo.png"
        alt="Hackfinity Logo"
        className="w-[600px] max-w-[90%] z-10 relative"
      />
    </div>
  );
};

const Homepage = () => {
  const hackathonDate = '2023-12-31'; 

  return (
    <main>
      {/* Logo Section with Squares background */}
      <section className="min-h-screen flex justify-center items-center bg-black relative overflow-hidden">
        <Squares 
          direction="diagonal" 
          speed={0.5} 
          borderColor="rgba(0, 100, 255, 0.3)" 
          squareSize={50} 
          hoverFillColor="rgba(0, 150, 255, 0.2)" 
        />
        <HackfinityLogo />
      </section>
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pb-16 pt-20">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 font-['Space_Grotesk'] text-gradient">
            Pushing the Boundaries of Innovation
          </h1>
          <p className="text-xl md:text-2xl text-hackfinity-gray mb-8 max-w-3xl mx-auto">
            A 24-hour coding challenge to solve real-world problems with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue transition-all animate-btn-pulse">
              <NavLink to="/registration">Register Now</NavLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <NavLink to="/about">Learn More</NavLink>
            </Button>
          </div>
          
          <CountdownTimer targetDate={hackathonDate} />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Makes Us Different</h2>
            <p className="text-hackfinity-gray max-w-2xl mx-auto">
              Hack-Finity offers a unique space-tech inspired environment for innovation and collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-hackfinity-blue/20 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mb-4">
                <Rocket className="text-hackfinity-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Launch Your Ideas</h3>
              <p className="text-hackfinity-gray">
                Transform your innovative concepts into functioning prototypes in just 24 hours.
              </p>
            </div>
            
            <div className="bg-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-hackfinity-blue/20 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mb-4">
                <Code className="text-hackfinity-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Tech</h3>
              <p className="text-hackfinity-gray">
                Access to the latest technologies, APIs, and developer tools for your projects.
              </p>
            </div>
            
            <div className="bg-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-hackfinity-blue/20 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-hackfinity-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
              <p className="text-hackfinity-gray">
                Connect with students, professionals, and mentors from around the world.
              </p>
            </div>
            
            <div className="bg-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-hackfinity-blue/20 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-hackfinity-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Amazing Prizes</h3>
              <p className="text-hackfinity-gray">
                Win exciting prizes, internship opportunities, and recognition for your innovations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sponsors Section */}
      <SponsorSection />
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-hackfinity-darkblue to-hackfinity-darkblue/80 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-lg border border-hackfinity-blue/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Hack the Future?</h2>
            <p className="text-hackfinity-gray max-w-2xl mx-auto mb-8">
              Join hundreds of innovators and tech enthusiasts for an unforgettable 24-hour coding experience.
            </p>
            <Button asChild size="lg" className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue">
              <NavLink to="/registration">Register Now</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;