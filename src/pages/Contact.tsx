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

      {/* Contact Form & Info */}
      <section className="py-6 md:py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Form */}
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

            {/* Info Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-hackfinity-blue/20">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mr-3">
                      <Mail className="text-hackfinity-blue" size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-1">Email</h3>
                      <p className="text-hackfinity-gray text-sm">
                        <a href="mailto:researchandinnovation.sse@saveetha.com" className="hover:text-hackfinity-blue">
                          researchandinnovation.sse@saveetha.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mr-3">
                      <Phone className="text-hackfinity-blue" size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-1">Phone</h3>
                      <p className="text-hackfinity-gray text-sm">
                        <a href="tel:+919361860665" className="hover:text-hackfinity-blue">+91 93618 60665</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="text-hackfinity-blue" size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-1">Location</h3>
                      <p className="text-hackfinity-gray text-sm">
                        Saveetha Library ,Saveetha Nagar, Kanchipuram - Chennai Rd, Sriperumbadur, Chennai, Tamil Nadu 602105
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
               <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-hackfinity-blue/20">
  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Quick FAQs</h2>
  <div className="space-y-3">
    <div>
      <h3 className="text-base font-medium text-white mb-0.5">When is the hackathon?</h3>
      <p className="text-hackfinity-gray text-sm">
        June 5, 2025 – June 6, 2025
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
        Yes, ₹150 per member.
      </p>
    </div>
  </div>
</div>
                     
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-hackfinity-blue/20">
            <iframe
              title="Saveetha Library Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1579589874033!2d80.0158104!3d13.0262086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b06a4c2c837%3A0xaf321afb71976157!2sSaveetha%20Sail%20library!5e0!3m2!1sen!2sin!4v1717320000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              className="rounded-lg border-0 w-full h-64 sm:h-96"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
