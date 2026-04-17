import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Clock, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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

      {/* Value Prop */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why PropAssure?</h2>
          <p className="text-lg text-muted-foreground mb-16">
            Working with PropAssure feels like having a seasoned expert on your side. Everything is organised, plain-English, and never overwhelming.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border bg-slate-50">
              <Shield className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-semibold text-xl mb-3">Authoritative</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Backed by years of industry experience and all required UK certifications. We know the regulations inside out.
              </p>
            </div>
            <div className="p-6 border bg-slate-50">
              <FileText className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-semibold text-xl mb-3">Clear</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No jargon. Our reports and communications are straightforward, letting you know exactly where you stand.
              </p>
            </div>
            <div className="p-6 border bg-slate-50">
              <Clock className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-semibold text-xl mb-3">Reassuring</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fast turnarounds, proactive reminders, and dedicated account management so you never miss a deadline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
