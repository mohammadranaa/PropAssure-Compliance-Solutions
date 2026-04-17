import { Building2, Key, Users, Building, Briefcase, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Industries() {
  const industries = [
    {
      title: "Estate & Letting Agents",
      description: "We act as your reliable compliance partner, handling high volumes of certificates across your portfolio with seamless communication and zero delays.",
      icon: Key,
    },
    {
      title: "Property Managers",
      description: "Consolidate your compliance needs. We track expiries, coordinate with tenants, and provide a single point of contact for block management.",
      icon: Building2,
    },
    {
      title: "Private Landlords",
      description: "Stay on the right side of the law without the stress. We guide you through exactly what you need to legally let your property.",
      icon: Users,
    },
    {
      title: "Housing Associations",
      description: "Scalable, systematic compliance testing for large residential portfolios, delivered by accredited professionals with full audit trails.",
      icon: Building,
    },
    {
      title: "Commercial Property",
      description: "From retail units to office blocks, we provide rigorous fire risk assessments and electrical testing to keep your commercial premises compliant.",
      icon: Briefcase,
    },
    {
      title: "HMO Operators",
      description: "Navigate complex local council requirements with our specialized HMO compliance packages, ensuring all safety standards are met.",
      icon: Factory,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Who We Serve</h1>
          <p className="text-xl text-muted-foreground">
            Tailored compliance solutions for every tier of the UK property sector.
          </p>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div key={i} className="flex gap-6 p-8 border bg-slate-50">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-white border flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{ind.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the hundreds of UK property professionals who trust PropAssure to protect their investments and their reputation.
          </p>
          <Button size="lg" asChild className="rounded-none h-14 px-8">
            <Link href="/contact">Discuss a Partnership</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}