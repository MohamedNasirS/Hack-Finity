
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
import { useForm } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";

const RegistrationPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  
  const form = useForm({
    defaultValues: {
      // Personal Info
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      linkedin: "",
      github: "",
      
      // University Info
      universityName: "",
      universityAddress: "",
      degree: "",
      yearOfStudy: "",
      
      // Team Info
      teamName: "",
      teamLeaderName: "",
      teamLeaderEmail: "",
      teamLeaderMobile: "",
      teamMembers: [],
      
      // Additional Info
      arrivalDateTime: "",
      dietaryRestrictions: "",
      expectations: ""
    }
  });
  
  const handleSubmit = (data: any) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form data:", data);
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
      <section className="py-8 md:py-12 px-4 mb-16">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-hackfinity-darkblue/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-hackfinity-blue/20">
            {/* Form Steps Progress */}
            <div className="flex items-center justify-between mb-8">
              <div className={`w-1/4 h-1 rounded-l-full ${formStep >= 1 ? 'bg-hackfinity-blue' : 'bg-hackfinity-gray/30'}`}></div>
              <div className={`w-1/4 h-1 ${formStep >= 2 ? 'bg-hackfinity-blue' : 'bg-hackfinity-gray/30'}`}></div>
              <div className={`w-1/4 h-1 ${formStep >= 3 ? 'bg-hackfinity-blue' : 'bg-hackfinity-gray/30'}`}></div>
              <div className={`w-1/4 h-1 rounded-r-full ${formStep >= 4 ? 'bg-hackfinity-blue' : 'bg-hackfinity-gray/30'}`}></div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                {formStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-semibold text-white mb-4">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">First Name <span className="text-red-500">*</span></Label>
                        <Input 
                          {...form.register("firstName", { required: true })}
                          id="firstName" 
                          placeholder="John" 
                          required 
                          className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">Last Name <span className="text-red-500">*</span></Label>
                        <Input 
                          {...form.register("lastName", { required: true })}
                          id="lastName" 
                          placeholder="Doe" 
                          required 
                          className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address <span className="text-red-500">*</span></Label>
                      <Input 
                        {...form.register("email", { required: true })}
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-white">Mobile Number <span className="text-red-500">*</span></Label>
                      <Input 
                        {...form.register("mobile", { required: true })}
                        id="mobile" 
                        type="tel" 
                        placeholder="(123) 456-7890" 
                        required
                        className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="linkedin" className="text-white">LinkedIn Profile</Label>
                      <Input 
                        {...form.register("linkedin")}
                        id="linkedin" 
                        placeholder="https://linkedin.com/in/yourprofile" 
                        className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="github" className="text-white">GitHub Profile <span className="text-red-500">*</span></Label>
                      <Input 
                        {...form.register("github", { required: true })}
                        id="github" 
                        placeholder="https://github.com/yourusername" 
                        required
                        className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                      />
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
                    <h2 className="text-2xl font-semibold text-white mb-4">University Information</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="universityName" className="text-white">University/Institution Name</Label>
                      <Input 
                        {...form.register("universityName", { required: true })}
                        id="universityName" 
                        placeholder="University Name" 
                        className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="universityAddress" className="text-white">University/Institution Address</Label>
                      <Input 
                        {...form.register("universityAddress", { required: true })}
                        id="universityAddress" 
                        placeholder="University Address" 
                        className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="degree" className="text-white">Degree</Label>
                      <Select onValueChange={(value) => form.setValue("degree", value)}>
                        <SelectTrigger className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white">
                          <SelectValue placeholder="Select your degree" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="btech">B.Tech</SelectItem>
                          <SelectItem value="bsc">B.Sc</SelectItem>
                          <SelectItem value="mtech">M.Tech</SelectItem>
                          <SelectItem value="msc">M.Sc</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="yearOfStudy" className="text-white">Year of Study</Label>
                      <Select onValueChange={(value) => form.setValue("yearOfStudy", value)}>
                        <SelectTrigger className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white">
                          <SelectValue placeholder="Select your year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                          <SelectItem value="5">5th Year</SelectItem>
                        </SelectContent>
                      </Select>
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
                    <h2 className="text-2xl font-semibold text-white mb-4">Team Information</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="teamName" className="text-white">Team Name</Label>
                      <Input 
                        {...form.register("teamName", { required: true })}
                        id="teamName" 
                        placeholder="Awesome Team" 
                        className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Team Leader</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="teamLeaderName" className="text-white">Team Leader Name</Label>
                        <Input 
                          {...form.register("teamLeaderName", { required: true })}
                          id="teamLeaderName" 
                          placeholder="Team Leader's Name" 
                          className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="teamLeaderEmail" className="text-white">Team Leader Email</Label>
                        <Input 
                          {...form.register("teamLeaderEmail", { required: true })}
                          id="teamLeaderEmail" 
                          type="email"
                          placeholder="leader@example.com" 
                          className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="teamLeaderMobile" className="text-white">Team Leader Mobile Number</Label>
                        <Input 
                          {...form.register("teamLeaderMobile", { required: true })}
                          id="teamLeaderMobile" 
                          type="tel"
                          placeholder="(123) 456-7890" 
                          className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Team Members (2-4 members)</h3>
                      
                      {/* Team member 1 */}
                      <div className="space-y-4 p-4 border border-hackfinity-blue/20 rounded-lg">
                        <h4 className="font-medium text-white">Team Member 1</h4>
                        <div className="space-y-2">
                          <Label htmlFor="member1Name" className="text-white">Name</Label>
                          <Input 
                            id="member1Name" 
                            placeholder="Member's Name" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="member1Email" className="text-white">Email</Label>
                          <Input 
                            id="member1Email" 
                            type="email"
                            placeholder="member@example.com" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="member1Mobile" className="text-white">Mobile Number</Label>
                          <Input 
                            id="member1Mobile" 
                            type="tel"
                            placeholder="(123) 456-7890" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                      </div>
                      
                      {/* Team member 2 */}
                      <div className="space-y-4 p-4 border border-hackfinity-blue/20 rounded-lg">
                        <h4 className="font-medium text-white">Team Member 2</h4>
                        <div className="space-y-2">
                          <Label htmlFor="member2Name" className="text-white">Name</Label>
                          <Input 
                            id="member2Name" 
                            placeholder="Member's Name" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="member2Email" className="text-white">Email</Label>
                          <Input 
                            id="member2Email" 
                            type="email"
                            placeholder="member@example.com" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="member2Mobile" className="text-white">Mobile Number</Label>
                          <Input 
                            id="member2Mobile" 
                            type="tel"
                            placeholder="(123) 456-7890" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                      </div>

                      {/* Team member 3 (optional) */}
                      <div className="space-y-4 p-4 border border-hackfinity-blue/20 rounded-lg">
                        <h4 className="font-medium text-white">Team Member 3 (Optional)</h4>
                        <div className="space-y-2">
                          <Label htmlFor="member3Name" className="text-white">Name</Label>
                          <Input 
                            id="member3Name" 
                            placeholder="Member's Name" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="member3Email" className="text-white">Email</Label>
                          <Input 
                            id="member3Email" 
                            type="email"
                            placeholder="member@example.com" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="member3Mobile" className="text-white">Mobile Number</Label>
                          <Input 
                            id="member3Mobile" 
                            type="tel"
                            placeholder="(123) 456-7890" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                      </div>

                      {/* Team member 4 (optional) */}
                      <div className="space-y-4 p-4 border border-hackfinity-blue/20 rounded-lg">
                        <h4 className="font-medium text-white">Team Member 4 (Optional)</h4>
                        <div className="space-y-2">
                          <Label htmlFor="member4Name" className="text-white">Name</Label>
                          <Input 
                            id="member4Name" 
                            placeholder="Member's Name" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="member4Email" className="text-white">Email</Label>
                          <Input 
                            id="member4Email" 
                            type="email"
                            placeholder="member@example.com" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="member4Mobile" className="text-white">Mobile Number</Label>
                          <Input 
                            id="member4Mobile" 
                            type="tel"
                            placeholder="(123) 456-7890" 
                            className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                          />
                        </div>
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
                        type="button" 
                        onClick={() => setFormStep(4)}
                        className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
                
                {formStep === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-semibold text-white mb-4">Additional Information</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="arrivalDateTime" className="text-white">Expected Time of Arrival</Label>
                      <Input 
                        {...form.register("arrivalDateTime")}
                        id="arrivalDateTime" 
                        type="datetime-local"
                        className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dietaryRestrictions" className="text-white">Dietary Restrictions</Label>
                      <Input 
                        {...form.register("dietaryRestrictions")}
                        id="dietaryRestrictions" 
                        placeholder="e.g., Vegetarian, Vegan, Gluten-free" 
                        className="bg-hackfinity-darkblue/50 border-hackfinity-blue/30 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expectations" className="text-white">What are you hoping to gain from Hack-Finity?</Label>
                      <Textarea 
                        {...form.register("expectations")}
                        id="expectations" 
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
                        onClick={() => setFormStep(3)}
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
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrationPage;
