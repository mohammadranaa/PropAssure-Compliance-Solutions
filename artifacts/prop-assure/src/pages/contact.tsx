import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll be in touch shortly to discuss your requirements.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get a quote, book an inspection, or speak to our compliance experts.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input required placeholder="John" className="rounded-none bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input required placeholder="Smith" className="rounded-none bg-slate-50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input required type="email" placeholder="john@example.com" className="rounded-none bg-slate-50" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company (Optional)</label>
                  <Input placeholder="Your Company Ltd" className="rounded-none bg-slate-50" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Required</label>
                  <select className="flex h-10 w-full items-center justify-between border border-input bg-slate-50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select a service...</option>
                    <option value="epc">EPC Certificate</option>
                    <option value="gas">Gas Safety</option>
                    <option value="eicr">Electrical Safety (EICR)</option>
                    <option value="fire">Fire Risk Assessment</option>
                    <option value="multiple">Multiple Services / Portfolio</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    required 
                    placeholder="Tell us about your property and requirements..." 
                    className="min-h-[120px] rounded-none bg-slate-50" 
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full rounded-none" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Head Office</h3>
                    <p className="text-muted-foreground">
                      120 Compliance Way<br />
                      London<br />
                      EC1V 2NX
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      0800 123 4567<br />
                      <span className="text-sm">Mon-Fri, 9am - 5:30pm</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      hello@propassure.co.uk<br />
                      <span className="text-sm">We aim to reply within 2 hours</span>
                    </p>
                  </div>
                </div>

                <div className="p-6 border bg-slate-50 mt-8">
                  <h3 className="font-semibold mb-2">Emergency Call-outs</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent gas or electrical compliance issues, please contact our emergency line directly.
                  </p>
                  <p className="font-bold text-secondary">0800 123 4568</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}