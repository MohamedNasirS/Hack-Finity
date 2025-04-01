
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
    <section className="py-16 md:py-20 bg-hackfinity-darkblue/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Sponsors</h2>
          <p className="text-hackfinity-gray max-w-2xl mx-auto">
            Hack-Finity is made possible thanks to the generous support of our sponsors.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center bg-hackfinity-darkblue/50 backdrop-blur-sm rounded-lg p-6 
                         transition-transform hover:scale-105 border border-hackfinity-blue/20 hover:border-hackfinity-blue/40"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-hackfinity-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl md:text-3xl font-bold text-hackfinity-skyblue">
                  {sponsor.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-white font-semibold">{sponsor.name}</h3>
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
        
        <div className="mt-12 text-center">
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
