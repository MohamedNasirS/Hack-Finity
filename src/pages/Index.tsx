import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CountdownTimer } from '../components/CountdownTimer';
import { SponsorSection } from '../components/SponsorSection';
import { Rocket, Code, Globe, Zap } from 'lucide-react';

const PRIMARY_BLUE = "#009dff";

const TIMELINE_ITEMS = [
  { time: '09:00 AM', title: 'Opening Ceremony', desc: 'Kickstart with an inspiring keynote and briefing.' },
  { time: '10:00 AM', title: 'Hacking Begins', desc: 'Teams start building their awesome projects.' },
  { time: '02:00 PM', title: 'Mentor Sessions', desc: 'Get help from mentors and industry experts.' },
  { time: '08:00 PM', title: 'Fun Breaks', desc: 'Join games, mini-events & refreshment activities.' },
  { time: '09:00 AM (Day 2)', title: 'Final Submission', desc: 'Submit your projects for judging.' },
  { time: '11:00 AM', title: 'Closing & Prizes', desc: 'Celebrate the winners and wrap it up!' }
];

const TimelineSection = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const timelineSection = document.querySelector('.timeline-section');
    const timelineLine = document.querySelector('.timeline-line');
    const timelineItems = document.querySelectorAll('.timeline-item');

    const handleScroll = () => {
      // Calculate line height based on scroll position
      const sectionTop = timelineSection.getBoundingClientRect().top;
      const sectionHeight = timelineSection.getBoundingClientRect().height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Only animate when section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Calculate percentage of section visible
        const visiblePercent = Math.min(
          100,
          Math.max(0, ((windowHeight - sectionTop) / sectionHeight) * 100)
        );

        setLineHeight(visiblePercent);

        // Check which items are visible
        const newVisibleItems = [];
        timelineItems.forEach((item, index) => {
          const itemTop = item.getBoundingClientRect().top;
          if (itemTop < windowHeight * 0.75) {
            newVisibleItems.push(index);
          }
        });
        setVisibleItems(newVisibleItems);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline-section mt-16">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Event Timeline</h2>
      <div className="relative">
        {/* Timeline line - will grow as user scrolls */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-700 timeline-line"
          style={{ height: '100%' }}
        >
          <div 
            className="absolute top-0 left-0 w-full bg-[#009dff] transition-all duration-500"
            style={{ height: `${lineHeight}%` }}
          ></div>
        </div>
        
        {TIMELINE_ITEMS.map((item, index) => {
          const isEven = index % 2 === 0;
          const isVisible = visibleItems.includes(index);
          
          return (
            <div 
              key={index} 
              className={`relative mb-10 w-full timeline-item ${isEven ? 'pr-[50%]' : 'pl-[50%]'}`}
            >
              {/* Dot */}
              <div 
                className={`absolute w-4 h-4 rounded-full border-4 border-[#111] left-1/2 transform -translate-x-1/2 top-6 transition-all duration-500 ${
                  isVisible ? 'opacity-100 bg-[#009dff] scale-100' : 'opacity-0 bg-transparent scale-50'
                }`}
              ></div>
              
              {/* Content */}
              <div 
                className={`bg-[#111] p-6 rounded-lg border transition-all duration-500 hover:scale-[1.02] ${
                  isEven ? 'text-right mr-6' : 'text-left ml-6'
                } ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 border-[#009dff] shadow-lg' 
                    : 'opacity-0 translate-y-10 border-transparent'
                }`}
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
  const hackathonDate = '2025-06-05T12:00:00';

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