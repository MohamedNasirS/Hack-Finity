
import { ExternalLink } from 'lucide-react';

export const SponsorSection = () => {
  const sponsors = [
    { name: 'TechCorp', level: 'Platinum' },
    { name: 'InnovateTech', level: 'Gold' },
    { name: 'Cloud Systems', level: 'Gold' },
    { name: 'DevStream', level: 'Silver' },
    { name: 'CodeLabs', level: 'Silver' },
    { name: 'DataNorth', level: 'Silver' },
    { name: 'NextGen AI', level: 'Bronze' },
    { name: 'Quantum Computing', level: 'Bronze' }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-hackfinity-darkblue/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">Our Sponsors</h2>
          <p className="text-hackfinity-gray max-w-2xl mx-auto text-sm md:text-base">
            Hack-Finity is made possible thanks to the generous support of our sponsors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center bg-hackfinity-darkblue/50 backdrop-blur-sm rounded-lg p-4 md:p-6 
                         transition-transform hover:scale-105 border border-hackfinity-blue/20 hover:border-hackfinity-blue/40"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-hackfinity-blue/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-hackfinity-skyblue">
                  {sponsor.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base">{sponsor.name}</h3>
              <span className={`text-xs mt-1 px-2 py-0.5 rounded-full ${
                sponsor.level === 'Platinum' ? 'bg-slate-300/10 text-slate-300' :
                sponsor.level === 'Gold' ? 'bg-amber-300/10 text-amber-300' :
                sponsor.level === 'Silver' ? 'bg-gray-300/10 text-gray-300' :
                'bg-orange-600/10 text-orange-300'
              }`}>
                {sponsor.level}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-hackfinity-blue hover:text-hackfinity-skyblue text-sm transition-colors"
          >
            Become a sponsor <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
