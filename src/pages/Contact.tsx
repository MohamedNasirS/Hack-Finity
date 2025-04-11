
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, CircleCheck } from 'lucide-react';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setMessageSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };
  
  return (
    <main className="pt-20">
      {/* Hero Section - More compact on mobile */}
      <section className="py-8 md:py-12 text-center px-4">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-['Space_Grotesk'] text-gradient">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-hackfinity-gray mb-6 max-w-3xl mx-auto">
            Have questions or need help? We're here for you.
          </p>
        </div>
      </section>
      
      {/* Contact Form & Information - Optimized Layout */}
      <section className="py-6 md:py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Form Section - Takes 3/5 of the space on desktop */}
            <div className="lg:col-span-3 bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-hackfinity-blue/20">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-5">Send Us a Message</h2>
              
              {messageSubmitted ? (
                <div className="text-center py-6 animate-fade-in">
                  <div className="mx-auto w-14 h-14 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mb-4">
                    <CircleCheck className="text-hackfinity-blue" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Message Sent!</h3>
                  <p className="text-hackfinity-gray mb-5 text-sm md:text-base">
                    Thank you for reaching out. We've received your message and will get back to you soon.
                  </p>
                  <Button 
                    type="button" 
                    onClick={() => setMessageSubmitted(false)}
                    className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName" className="text-white">Your Name</Label>
                      <Input id="contactName" placeholder="John Doe" required className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail" className="text-white">Email Address</Label>
                      <Input id="contactEmail" type="email" placeholder="your@email.com" required className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactSubject" className="text-white">Subject</Label>
                    <Select>
                      <SelectTrigger className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="registration">Registration Question</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship Opportunity</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactMessage" className="text-white">Message</Label>
                    <Textarea 
                      id="contactMessage" 
                      placeholder="Your message here..." 
                      required
                      className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white"
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
              )}
            </div>
            
            {/* Info Section - Takes 2/5 of the space on desktop */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-hackfinity-blue/20">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-3">
                      <Mail className="text-hackfinity-blue" size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-1">Email</h3>
                      <p className="text-hackfinity-gray text-sm">
                        <a href="mailto:info@hackfinity.dev" className="hover:text-hackfinity-blue">info@hackfinity.dev</a><br />
                        <a href="mailto:support@hackfinity.dev" className="hover:text-hackfinity-blue">support@hackfinity.dev</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-3">
                      <Phone className="text-hackfinity-blue" size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-1">Phone</h3>
                      <p className="text-hackfinity-gray text-sm">
                        <a href="tel:+11234567890" className="hover:text-hackfinity-blue">+1 (123) 456-7890</a><br />
                        <span className="text-xs">Monday - Friday, 9am - 5pm EST</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-3">
                      <MapPin className="text-hackfinity-blue" size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-1">Location</h3>
                      <p className="text-hackfinity-gray text-sm">
                        University Technology Center<br />
                        123 Innovation Way<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section - Optimized for mobile */}
              <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-hackfinity-blue/20">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Quick FAQs</h2>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-base font-medium text-white mb-0.5">When is the hackathon?</h3>
                    <p className="text-hackfinity-gray text-sm">
                      December 31, 2023 - January 1, 2024
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium text-white mb-0.5">Who can participate?</h3>
                    <p className="text-hackfinity-gray text-sm">
                      All students and professionals in technology.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium text-white mb-0.5">Is there a registration fee?</h3>
                    <p className="text-hackfinity-gray text-sm">
                      No, participation is free for accepted applicants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-hackfinity-blue/20">
            <div className="bg-gray-700/50 h-64 sm:h-80 rounded-lg flex items-center justify-center">
              <p className="text-hackfinity-gray text-center text-sm sm:text-base px-4">
                Interactive map would be displayed here. For this demo, it's a placeholder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
