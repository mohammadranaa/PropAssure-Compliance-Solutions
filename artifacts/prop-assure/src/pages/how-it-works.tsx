import { Calendar, ClipboardCheck, FileCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Book & Coordinate",
      description: "Contact us with your requirements. We provide a clear, transparent quote and coordinate directly with you or your tenants to arrange access at a convenient time.",
      icon: Calendar,
    },
    {
      number: "02",
      title: "Professional Survey",
      description: "Our fully accredited, UK-registered engineers and assessors visit the property to conduct rigorous inspections, causing minimal disruption.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Receive Reports",
      description: "Digital certificates and detailed reports are delivered promptly via email. Any non-compliance issues are highlighted clearly with plain-English recommendations.",
      icon: FileCheck,
    },
    {
      number: "04",
      title: "Stay Compliant",
      description: "We log your expiry dates and proactively remind you when renewals are due, ensuring you never face a compliance gap or regulatory fine.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How It Works</h1>
          <p className="text-xl text-muted-foreground">
            A streamlined, dependable process designed to remove the friction from property compliance.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative">
                  {/* Connector line for desktop */}
                  {i !== steps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-20 bottom-[-4rem] w-px bg-border" />
                  )}
                  
                  <div className="shrink-0 flex gap-6 items-start z-10 relative bg-white">
                    <div className="w-16 h-16 bg-slate-50 border flex flex-col items-center justify-center">
                      <span className="text-xs font-bold text-primary mb-1">STEP</span>
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full text-primary mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-secondary-foreground/90 mb-8">
            Experience property compliance the way it should be — simple, reliable, and professional.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-none bg-white text-secondary hover:bg-white/90">
            <Link href="/contact">Book an Inspection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}