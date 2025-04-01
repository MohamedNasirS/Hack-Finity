
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { SponsorSection } from '../components/SponsorSection';
import { Clock, Users, Trophy, Calendar, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center px-4">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Space_Grotesk'] text-gradient">
            About Hack-Finity
          </h1>
          <p className="text-xl text-hackfinity-gray mb-8 max-w-3xl mx-auto">
            Learn more about our mission, story, and what makes Hack-Finity the ultimate hackathon experience.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-hackfinity-darkblue/30 backdrop-blur-sm rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-hackfinity-gray mb-6">
              Hack-Finity was founded with a clear purpose: to push the boundaries of what's possible when bright minds come together. We believe that 
              innovation knows no bounds, and our hackathon provides the perfect launchpad for next-generation ideas.
            </p>
            <p className="text-hackfinity-gray mb-6">
              Our mission is to create an environment where students and professionals can collaborate, compete, and create solutions to real-world 
              problems using cutting-edge technology. We strive to foster a community of forward-thinking individuals who aren't afraid to reach for the stars.
            </p>
            <p className="text-hackfinity-gray">
              By combining intense competition with supportive mentorship, we aim to inspire participants to think beyond traditional constraints and 
              develop technologies that could shape our future.
            </p>
          </div>
        </div>
      </section>
      
      {/* Event Details Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Event Details</h2>
            <p className="text-hackfinity-gray max-w-2xl mx-auto">
              Everything you need to know about participating in Hack-Finity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-hackfinity-blue/20">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Clock className="text-hackfinity-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Duration</h3>
                  <p className="text-hackfinity-gray">
                    24 hours of non-stop hacking, from concept to prototype. Prepare for an intensive but rewarding experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-hackfinity-blue/20">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Users className="text-hackfinity-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Team Size</h3>
                  <p className="text-hackfinity-gray">
                    Form teams of 2-4 participants. Don't have a team? No problem! We'll help you find teammates.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-hackfinity-blue/20">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Calendar className="text-hackfinity-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Date & Time</h3>
                  <p className="text-hackfinity-gray">
                    December 31, 2023 - January 1, 2024<br />
                    Starts at 12:00 PM and ends at 12:00 PM the next day.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-hackfinity-blue/20">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="text-hackfinity-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-hackfinity-gray">
                    University Technology Center<br />
                    123 Innovation Way, Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Prizes Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Amazing Prizes</h2>
            <p className="text-hackfinity-gray max-w-2xl mx-auto">
              Compete for exciting rewards and recognition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-amber-500/20 to-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-amber-500/30 text-center">
              <div className="w-16 h-16 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="text-amber-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1st Place</h3>
              <p className="text-hackfinity-gray mb-4">
                $5,000 cash prize<br />
                Mentorship opportunity<br />
                Featured in Tech Magazine
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-400/20 to-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-gray-400/30 text-center">
              <div className="w-16 h-16 mx-auto bg-gray-400/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="text-gray-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2nd Place</h3>
              <p className="text-hackfinity-gray mb-4">
                $2,500 cash prize<br />
                Tech gear package<br />
                Cloud credits
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-amber-800/20 to-hackfinity-darkblue/50 backdrop-blur-sm p-6 rounded-lg border border-amber-800/30 text-center">
              <div className="w-16 h-16 mx-auto bg-amber-800/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="text-amber-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">3rd Place</h3>
              <p className="text-hackfinity-gray mb-4">
                $1,000 cash prize<br />
                Digital subscriptions<br />
                Networking event access
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Hack-Finity Journey</h2>
            <p className="text-hackfinity-gray max-w-2xl mx-auto mb-8">
              Ready to be part of this incredible experience? Reserve your spot today!
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

export default AboutPage;
