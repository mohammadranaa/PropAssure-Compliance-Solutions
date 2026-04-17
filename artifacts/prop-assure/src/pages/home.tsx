import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Clock, FileText, Star, Phone, Zap, Flame, Droplet, Award, Building2, Users } from "lucide-react";

const stats = [
  { value: "10,000+", label: "Certificates Issued" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "48hr", label: "Average Turnaround" },
  { value: "100%", label: "Accredited Engineers" },
];

const services = [
  { icon: Zap, title: "EPC Certificates", desc: "Energy Performance Certificates for residential and commercial properties." },
  { icon: Flame, title: "Gas Safety (CP12)", desc: "Annual gas safety inspections by Gas Safe registered engineers." },
  { icon: Zap, title: "Electrical Safety (EICR)", desc: "Electrical Installation Condition Reports ensuring full wiring compliance." },
  { icon: Droplet, title: "Legionella Risk", desc: "Water system assessments to identify and mitigate Legionnaires' risk." },
  { icon: Shield, title: "Fire Risk Assessments", desc: "Thorough evaluations of fire hazards and escape routes." },
  { icon: CheckCircle2, title: "PAT Testing", desc: "Portable Appliance Testing for landlord-supplied electrical equipment." },
];

const testimonials = [
  {
    quote: "PropAssure has completely transformed how we manage compliance across our 200-property portfolio. Reliable, efficient, and always on time.",
    author: "Sarah Mitchell",
    role: "Head of Property Management, Bennett & Co Estate Agents",
    rating: 5,
  },
  {
    quote: "As a private landlord with multiple properties, I used to dread renewal time. PropAssure handle everything — I just receive the certificates.",
    author: "James Harrington",
    role: "Private Landlord, Manchester",
    rating: 5,
  },
  {
    quote: "Their block management compliance service is second to none. Thorough reports, plain-English summaries, and proactive renewal reminders.",
    author: "Deborah Osei",
    role: "Director, Osei Block Management Ltd",
    rating: 5,
  },
];

const accreditations = [
  "Gas Safe Registered",
  "NICEIC Approved",
  "RICS Accredited",
  "CIBSE Certified",
  "IOSH Qualified",
  "Trustmark Registered",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-slate-50 border-b overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-white text-secondary mb-6 border-secondary/20">
              <Shield className="w-4 h-4 mr-2" />
              UK's Trusted Property Compliance Partner
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Making Property Compliance <span className="text-primary">Feel Simple</span>.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Authoritative, clear, and reassuring compliance solutions for estate agents, property managers, and businesses across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="rounded-none h-14 px-8 text-base">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-none h-14 px-8 text-base">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-muted relative border border-border p-2 bg-white shadow-xl rotate-1 transition-transform hover:rotate-0 duration-500">
              <img
                src="/hero-building.png"
                alt="Modern UK Commercial Property"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 border shadow-lg max-w-xs z-20">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="font-semibold">Fully Accredited</span>
              </div>
              <p className="text-sm text-muted-foreground">Certified professionals ensuring 100% regulatory adherence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PropAssure */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why PropAssure?</h2>
          <p className="text-lg text-muted-foreground mb-16">
            Working with PropAssure feels like having a seasoned expert on your side. Everything is organised, plain-English, and never overwhelming.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border bg-slate-50">
              <Shield className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-semibold text-xl mb-3">Authoritative</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Backed by years of industry experience and all required UK certifications. Our engineers and assessors are fully registered with Gas Safe, NICEIC, and RICS.
              </p>
            </div>
            <div className="p-6 border bg-slate-50">
              <FileText className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-semibold text-xl mb-3">Clear</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No jargon. Our reports and communications are straightforward — letting you know exactly where you stand, what is required by law, and what steps to take.
              </p>
            </div>
            <div className="p-6 border bg-slate-50">
              <Clock className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-semibold text-xl mb-3">Reassuring</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fast turnarounds, proactive renewal reminders, and dedicated account management so you never miss a deadline or face an unexpected fine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Compliance Services</h2>
            <p className="text-lg text-muted-foreground">
              A full suite of property compliance services delivered by accredited professionals — all under one roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white border p-6 hover:border-primary/50 transition-colors group">
                  <div className="w-10 h-10 bg-primary/5 border flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild className="rounded-none h-12 px-8">
              <Link href="/services">View All Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Property Professionals</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you manage a single rental or an estate agency network, PropAssure scales to your needs. We work with professionals who cannot afford compliance lapses.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Building2, label: "Estate &amp; Letting Agents" },
                  { icon: Users, label: "Property Management Companies" },
                  { icon: Shield, label: "Private Landlords &amp; Investors" },
                  { icon: Award, label: "Housing Associations &amp; HMO Operators" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium" dangerouslySetInnerHTML={{ __html: item.label }} />
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8">
                <Button asChild className="rounded-none">
                  <Link href="/industries">See All Industries <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 border-l-4 border-primary bg-slate-50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "PropAssure transformed how we handle compliance across our 200-property portfolio. Reliable, on time, every time."
                </p>
                <p className="mt-3 text-sm font-semibold">Sarah Mitchell — Head of Property Management, Bennett &amp; Co</p>
              </div>
              <div className="p-6 border-l-4 border-secondary bg-slate-50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "I used to dread renewal time as a private landlord. PropAssure handle everything — I just receive the certificates."
                </p>
                <p className="mt-3 text-sm font-semibold">James Harrington — Private Landlord, Manchester</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
            Fully Accredited &amp; Registered
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {accreditations.map((name) => (
              <div key={name} className="flex items-center gap-2 bg-white border px-5 py-3">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by estate agents, property managers, and landlords across the UK.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 border bg-slate-50 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center max-w-5xl">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to simplify your compliance?</h2>
            <p className="text-secondary-foreground/90 text-lg leading-relaxed">
              Get in touch today for a transparent quote. Our team will review your portfolio requirements and provide a tailored compliance plan.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:items-end">
            <Button size="lg" asChild className="rounded-none bg-white text-secondary hover:bg-white/90 h-14 px-8 text-base">
              <Link href="/contact">Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <div className="flex items-center gap-3 text-secondary-foreground/90">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">0800 123 4567</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
