import { Shield, Zap, Flame, Droplet, CheckSquare, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "EPC Certificates",
      description: "Energy Performance Certificates for residential and commercial properties. Fast turnaround with clear recommendations for improvement.",
      icon: Zap,
    },
    {
      title: "Gas Safety (CP12)",
      description: "Annual gas safety inspections by Gas Safe registered engineers. Ensuring your boilers and appliances meet legal requirements.",
      icon: Flame,
    },
    {
      title: "Electrical Safety (EICR)",
      description: "Comprehensive Electrical Installation Condition Reports to guarantee wiring safety and compliance for tenants.",
      icon: Zap,
    },
    {
      title: "Legionella Risk Assessments",
      description: "Detailed assessments of water systems to identify and mitigate the risk of Legionnaires' disease.",
      icon: Droplet,
    },
    {
      title: "Fire Risk Assessments",
      description: "Thorough evaluations of fire hazards, escape routes, and safety measures in communal and commercial spaces.",
      icon: Shield,
    },
    {
      title: "HMO Licensing Support",
      description: "Expert guidance and certification gathering to ensure your House in Multiple Occupation meets all council regulations.",
      icon: HomeIcon,
    },
    {
      title: "PAT Testing",
      description: "Portable Appliance Testing for landlord-supplied electrical equipment, ensuring safety and mitigating liability.",
      icon: CheckSquare,
    },
    {
      title: "Smoke & Carbon Monoxide",
      description: "Installation, testing, and certification of essential alarms to protect lives and maintain compliance.",
      icon: Shield,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive property compliance solutions under one roof. We handle the complexity so you don't have to.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="p-8 border bg-white hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 bg-slate-50 border flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href="/contact" className="text-sm font-medium text-secondary hover:text-secondary/80 inline-flex items-center">
                    Request quote &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Need multiple services?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            We offer bundled compliance packages for landlords and property managers to streamline renewals and reduce costs.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-none bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Build a Custom Package</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}