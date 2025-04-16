  import { ExternalLink } from 'lucide-react';
  import CircularGallery from './CircularGallery';

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

    // Transform sponsors data to the format expected by CircularGallery
    const sponsorItems = sponsors.map(sponsor => ({
      // You can replace this with actual sponsor logos if available
      image: `https://via.placeholder.com/800x600/0A1929/FFFFFF?text=${sponsor.name}`,
      text: `${sponsor.name} - ${sponsor.level}`
    }));

    return (
      <section className="py-6 md:py-8 lg:py-8 bg-hackfinity-darkblue/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">Our Sponsors</h2>
            <p className="text-hackfinity-gray max-w-2xl mx-auto text-sm md:text-base">
              Hack-Finity is made possible thanks to the generous support of our sponsors.
            </p>
          </div>
        </div>
        
        {/* Full width gallery container that breaks out of the parent container */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[600px] md:h-[700px] overflow-hidden">
          <CircularGallery 
            items={sponsorItems}
            bend={0} 
            textColor="#ffffff" 
            font="bold 24px 'Hack-Finity Font', sans-serif"
            borderRadius={0.05}
            
          />
        </div>
        
        <div className="container mx-auto px-4">
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
