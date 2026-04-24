"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "epc", label: "EPC Certificate" },
  { value: "gas", label: "Gas Safety (CP12)" },
  { value: "eicr", label: "Electrical Safety (EICR)" },
  { value: "legionella", label: "Legionella Risk Assessment" },
  { value: "fire", label: "Fire Risk Assessment" },
  { value: "hmo", label: "HMO Licensing Support" },
  { value: "pat", label: "PAT Testing" },
  { value: "smoke_co", label: "Smoke & Carbon Monoxide Alarms" },
  { value: "multiple", label: "Multiple Services / Portfolio Package" },
  { value: "other", label: "Other / Not Sure Yet" },
];

const officeDetails = [
  {
    name: "Head Office — London",
    address: "120 Compliance Way, London, EC1V 2NX",
    phone: "0800 123 4567",
    email: "london@propassure.co.uk",
    hours: "Mon–Fri: 9:00am – 5:30pm",
  },
  {
    name: "Northern Office — Manchester",
    address: "Suite 12, Ashton House, Manchester, M2 3HF",
    phone: "0161 456 7890",
    email: "manchester@propassure.co.uk",
    hours: "Mon–Fri: 9:00am – 5:30pm",
  },
];

const reasons = [
  "Request a no-obligation quote",
  "Book a compliance inspection",
  "Discuss a portfolio partnership",
  "Ask about our bundled packages",
  "Speak to a compliance specialist",
  "Arrange an account review",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Received",
        description: "Thank you — we'll be in touch within two hours to discuss your requirements.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get a quote, book an inspection, or speak directly with our compliance team. We aim to respond to all enquiries within two hours.
          </p>
        </div>
      </section>

      {/* Reasons bar */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {reasons.map((r) => (
              <div key={r} className="flex items-center gap-2 text-sm">
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Send an Enquiry</h2>
              <p className="text-muted-foreground text-sm mb-8">
                Fill in the form below and one of our compliance specialists will be in touch. For urgent matters, please call us directly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="first-name">First Name *</label>
                    <Input required id="first-name" placeholder="John" className="rounded-none bg-slate-50" data-testid="input-first-name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="last-name">Last Name *</label>
                    <Input required id="last-name" placeholder="Smith" className="rounded-none bg-slate-50" data-testid="input-last-name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">Email Address *</label>
                  <Input required type="email" id="email" placeholder="john@example.com" className="rounded-none bg-slate-50" data-testid="input-email" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="phone">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="07700 900000" className="rounded-none bg-slate-50" data-testid="input-phone" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="company">Company / Agency</label>
                  <Input id="company" placeholder="Your Company Ltd" className="rounded-none bg-slate-50" data-testid="input-company" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="service">Service Required *</label>
                  <select
                    required
                    id="service"
                    data-testid="select-service"
                    className="flex h-10 w-full border border-input bg-slate-50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="properties">Number of Properties</label>
                  <Input id="properties" type="number" min={1} placeholder="e.g. 1, 10, 200" className="rounded-none bg-slate-50" data-testid="input-properties" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="message">Message *</label>
                  <Textarea
                    required
                    id="message"
                    placeholder="Tell us about your property, your compliance requirements, and any relevant deadlines..."
                    className="min-h-[140px] rounded-none bg-slate-50"
                    data-testid="textarea-message"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" required className="mt-1" data-testid="checkbox-consent" />
                  <label htmlFor="consent" className="text-xs text-muted-foreground">
                    I consent to PropAssure storing and using my contact details to respond to this enquiry. We will not share your data with third parties. See our <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-none h-12" disabled={isSubmitting} data-testid="button-submit">
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Get in Touch Directly</h2>
              <p className="text-muted-foreground text-sm mb-8">
                Prefer to speak to someone? Call our main line or drop us an email and we'll respond promptly.
              </p>

              {/* Offices */}
              <div className="space-y-6 mb-10">
                {officeDetails.map((office) => (
                  <div key={office.name} className="p-6 border bg-slate-50">
                    <h3 className="font-semibold mb-4">{office.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors font-medium">{office.phone}</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-primary shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary transition-colors">{office.email}</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency */}
              <div className="p-6 border-2 border-primary bg-primary/5 mb-10">
                <h3 className="font-bold mb-2">Emergency Call-Out Line</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For urgent gas or electrical compliance issues requiring immediate inspection, contact our 24/7 emergency line.
                </p>
                <a href="tel:08001234568" className="text-xl font-bold text-primary hover:underline">0800 123 4568</a>
                <p className="text-xs text-muted-foreground mt-1">Available 24 hours, 7 days a week</p>
              </div>

              {/* Trust Signals */}
              <div className="space-y-3">
                <p className="text-sm font-semibold">What to expect when you contact us:</p>
                {[
                  "Response within 2 business hours",
                  "No-obligation, itemised quote",
                  "Direct line to a named account manager",
                  "No pushy sales tactics — just honest advice",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* General enquiries CTA */}
      <section className="py-16 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Not sure what you need?</h3>
              <p className="text-muted-foreground text-sm">
                Compliance regulations are complex. Call us and we'll walk you through exactly what your property legally requires — no charge, no commitment.
              </p>
            </div>
            <Button size="lg" asChild className="rounded-none h-12 px-8 shrink-0">
              <a href="tel:08001234567">
                <Phone className="w-4 h-4 mr-2" />
                Call 0800 123 4567
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
