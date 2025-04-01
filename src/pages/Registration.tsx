
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { CircleCheck } from 'lucide-react';

const RegistrationPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setRegistrationComplete(true);
      toast({
        title: "Registration successful!",
        description: "Thank you for registering for Hack-Finity. You will receive a confirmation email shortly.",
      });
    }, 1500);
  };
  
  if (registrationComplete) {
    return (
      <main className="pt-20">
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-2xl text-center animate-fade-in">
            <div className="mx-auto w-20 h-20 bg-hackfinity-blue/20 rounded-full flex items-center justify-center mb-6">
              <CircleCheck className="text-hackfinity-blue" size={40} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Registration Complete!</h1>
            <p className="text-hackfinity-gray mb-8">
              Thank you for registering for Hack-Finity. Your application has been received and is being processed.
              You will receive a confirmation email shortly with more details.
            </p>
            <div className="bg-hackfinity-darkblue/50 backdrop-blur-sm rounded-lg p-6 border border-hackfinity-blue/20 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">What's Next?</h2>
              <ol className="text-left text-hackfinity-gray space-y-4">
                <li className="flex">
                  <span className="mr-3 font-bold">1.</span>
                  <span>Check your email for a confirmation message</span>
                </li>
                <li className="flex">
                  <span className="mr-3 font-bold">2.</span>
                  <span>Complete any additional forms or requirements</span>
                </li>
                <li className="flex">
                  <span className="mr-3 font-bold">3.</span>
                  <span>Join our Discord community for updates and team formation</span>
                </li>
                <li className="flex">
                  <span className="mr-3 font-bold">4.</span>
                  <span>Mark your calendar and prepare for the hackathon!</span>
                </li>
              </ol>
            </div>
            <Button asChild className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue">
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </section>
      </main>
    );
  }
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 text-center px-4">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Space_Grotesk'] text-gradient">
            Register for Hack-Finity
          </h1>
          <p className="text-xl text-hackfinity-gray mb-8 max-w-3xl mx-auto">
            Secure your spot at the most innovative hackathon event of the year.
          </p>
        </div>
      </section>
      
      {/* Registration Form */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-hackfinity-blue/20">
            {/* Form Steps Progress */}
            <div className="flex items-center justify-between mb-8">
              <div className={`w-1/3 h-1 rounded-l-full ${formStep >= 1 ? 'bg-hackfinity-blue' : 'bg-hackfinity-gray/30'}`}></div>
              <div className={`w-1/3 h-1 ${formStep >= 2 ? 'bg-hackfinity-blue' : 'bg-hackfinity-gray/30'}`}></div>
              <div className={`w-1/3 h-1 rounded-r-full ${formStep >= 3 ? 'bg-hackfinity-blue' : 'bg-hackfinity-gray/30'}`}></div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {formStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-semibold text-white mb-4">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input id="firstName" placeholder="John" required className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" />
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button 
                      type="button" 
                      onClick={() => setFormStep(2)}
                      className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
              
              {formStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-semibold text-white mb-4">Educational & Skills Information</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="education" className="text-white">Education Level</Label>
                    <Select>
                      <SelectTrigger className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white">
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high_school">High School</SelectItem>
                        <SelectItem value="undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="institution" className="text-white">Institution/University</Label>
                    <Input id="institution" placeholder="University Name" className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white">Experience Level</Label>
                    <RadioGroup defaultValue="intermediate">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beginner" id="beginner" />
                        <Label htmlFor="beginner" className="text-hackfinity-gray">Beginner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intermediate" id="intermediate" />
                        <Label htmlFor="intermediate" className="text-hackfinity-gray">Intermediate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="advanced" />
                        <Label htmlFor="advanced" className="text-hackfinity-gray">Advanced</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white">Skills (Check all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="frontend" />
                        <Label htmlFor="frontend" className="text-hackfinity-gray">Frontend</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="backend" />
                        <Label htmlFor="backend" className="text-hackfinity-gray">Backend</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mobile" />
                        <Label htmlFor="mobile" className="text-hackfinity-gray">Mobile</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ml" />
                        <Label htmlFor="ml" className="text-hackfinity-gray">Machine Learning</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="design" />
                        <Label htmlFor="design" className="text-hackfinity-gray">Design</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="blockchain" />
                        <Label htmlFor="blockchain" className="text-hackfinity-gray">Blockchain</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setFormStep(1)}
                      className="text-white border-white hover:bg-white/10"
                    >
                      Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={() => setFormStep(3)}
                      className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
              
              {formStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-semibold text-white mb-4">Additional Information</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="team" className="text-white">Team Status</Label>
                    <Select>
                      <SelectTrigger className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white">
                        <SelectValue placeholder="Select your team status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solo">Looking for a team</SelectItem>
                        <SelectItem value="partial">Have some teammates, need more</SelectItem>
                        <SelectItem value="complete">Have a complete team</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dietary" className="text-white">Dietary Restrictions</Label>
                    <Input id="dietary" placeholder="e.g., Vegetarian, Vegan, Gluten-free" className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="text-white">What are you hoping to gain from Hack-Finity?</Label>
                    <Textarea 
                      id="motivation" 
                      placeholder="Share your goals and what you're excited about..." 
                      className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white"
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-top space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-hackfinity-gray text-sm">
                        I agree to the <a href="#" className="text-hackfinity-blue hover:text-hackfinity-skyblue">Terms and Conditions</a> and <a href="#" className="text-hackfinity-blue hover:text-hackfinity-skyblue">Privacy Policy</a>.
                      </Label>
                    </div>
                    
                    <div className="flex items-top space-x-2">
                      <Checkbox id="updates" />
                      <Label htmlFor="updates" className="text-hackfinity-gray text-sm">
                        I would like to receive updates about future Hack-Finity events and opportunities.
                      </Label>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setFormStep(2)}
                      className="text-white border-white hover:bg-white/10"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Complete Registration"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrationPage;
