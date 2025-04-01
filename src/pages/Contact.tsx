
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
      {/* Hero Section */}
      <section className="py-12 md:py-16 text-center px-4">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Space_Grotesk'] text-gradient">
            Contact Us
          </h1>
          <p className="text-xl text-hackfinity-gray mb-8 max-w-3xl mx-auto">
            Have questions or need help? We're here for you. Reach out to the Hack-Finity team.
          </p>
        </div>
      </section>
      
      {/* Contact Form & Information */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-hackfinity-blue/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
              
              {messageSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="mx-auto w-16 h-16 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mb-6">
                    <CircleCheck className="text-hackfinity-blue" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Message Sent!</h3>
                  <p className="text-hackfinity-gray mb-6">
                    Thank you for reaching out. We've received your message and will get back to you as soon as possible.
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      rows={6}
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
            
            <div className="space-y-8">
              <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-hackfinity-blue/20">
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Mail className="text-hackfinity-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                      <p className="text-hackfinity-gray">
                        <a href="mailto:info@hackfinity.dev" className="hover:text-hackfinity-blue">info@hackfinity.dev</a><br />
                        <a href="mailto:support@hackfinity.dev" className="hover:text-hackfinity-blue">support@hackfinity.dev</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Phone className="text-hackfinity-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                      <p className="text-hackfinity-gray">
                        <a href="tel:+11234567890" className="hover:text-hackfinity-blue">+1 (123) 456-7890</a><br />
                        <span className="text-sm">Monday - Friday, 9am - 5pm EST</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-hackfinity-blue/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <MapPin className="text-hackfinity-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                      <p className="text-hackfinity-gray">
                        University Technology Center<br />
                        123 Innovation Way<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-hackfinity-blue/20">
                <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">When is the hackathon?</h3>
                    <p className="text-hackfinity-gray">
                      Hack-Finity will take place on December 31, 2023 - January 1, 2024, starting at 12:00 PM.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Who can participate?</h3>
                    <p className="text-hackfinity-gray">
                      Hack-Finity is open to all students and professionals interested in technology and innovation.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Is there a registration fee?</h3>
                    <p className="text-hackfinity-gray">
                      No, participation is free for all accepted applicants.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">What should I bring?</h3>
                    <p className="text-hackfinity-gray">
                      Bring your laptop, charger, and any other devices you might need. We'll provide food, drinks, and a workspace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-4 border border-hackfinity-blue/20">
            <div className="bg-gray-700/50 h-80 rounded-lg flex items-center justify-center">
              <p className="text-hackfinity-gray text-center px-4">
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
