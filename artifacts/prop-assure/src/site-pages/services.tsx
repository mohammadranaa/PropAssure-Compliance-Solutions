import { Shield, Zap, Flame, Droplet, CheckSquare, AlertTriangle, Bell, Lightbulb, Wind, ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const whyCards = [
  {
    icon: CheckCircle2,
    title: "Fully Integrated Compliance",
    desc: "We manage electrical, gas, fire, and environmental compliance through a single, coordinated approach — removing the need for multiple contractors.",
  },
  {
    icon: Clock,
    title: "Fast & Predictable Delivery",
    desc: "We operate with structured scheduling and defined turnaround times, ensuring certificates and reports are delivered without delays.",
  },
  {
    icon: FileText,
    title: "Actionable Reporting",
    desc: "Our reports are designed for real-world use — clear, structured, and aligned with regulatory requirements, with defined next steps where needed.",
  },
  {
    icon: Shield,
    title: "Certified & Accountable",
    desc: "All services are delivered by fully accredited professionals, with accountability and compliance standards maintained across every project.",
  },
];

const serviceGroups = [
  {
    category: "Electrical",
    color: "text-secondary",
    bgColor: "bg-secondary/5",
    borderColor: "border-secondary/20",
    services: [
      {
        title: "Electrical Installation Condition Report (EICR)",
        description: "Comprehensive condition reports assessing the safety and compliance of fixed electrical installations. Mandatory for rental properties under the Electrical Safety Standards Regulations 2020.",
        frequency: "Every 5 years, or on change of tenancy",
        legal: "Electrical Safety Standards (England) Regulations 2020",
        icon: Zap,
      },
      {
        title: "PAT Testing",
        description: "Portable Appliance Testing of landlord-supplied electrical equipment, confirming safety and reducing liability for landlords and property managers.",
        frequency: "Annual or on change of tenancy",
        legal: "Electrical Equipment (Safety) Regulations 2016",
        icon: CheckSquare,
      },
      {
        title: "Electrical Diagnostics",
        description: "Targeted investigation of specific electrical faults or concerns. Useful following a failed EICR or where an intermittent issue requires expert assessment.",
        frequency: "As required",
        legal: "IET Wiring Regulations (BS 7671)",
        icon: Zap,
      },
      {
        title: "Fuse Box Installation",
        description: "Upgrade or replacement of consumer units to ensure compliance with current wiring regulations, carried out by NICEIC-approved electricians.",
        frequency: "As required",
        legal: "IET Wiring Regulations (BS 7671)",
        icon: Zap,
      },
    ],
  },
  {
    category: "Gas",
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/20",
    services: [
      {
        title: "Gas Safety Certificate (CP12)",
        description: "Annual Landlord Gas Safety Records issued by Gas Safe registered engineers. A legal requirement for all properties with gas appliances. Covers boilers, pipework, flues, and all gas appliances.",
        frequency: "Annual (mandatory)",
        legal: "Gas Safety (Installation and Use) Regulations 1998",
        icon: Flame,
      },
    ],
  },
  {
    category: "Fire & Safety",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    services: [
      {
        title: "Fire Risk Assessment (FRA)",
        description: "Systematic evaluation of fire hazards, means of escape, detection and warning systems, and existing fire safety measures. Required for all non-domestic premises and common areas of residential blocks and HMOs.",
        frequency: "Annual review recommended",
        legal: "Regulatory Reform (Fire Safety) Order 2005",
        icon: Shield,
      },
      {
        title: "Fire Alarm Installation & Testing",
        description: "Supply, installation, and periodic testing of fire detection and alarm systems. Ensures systems are maintained in full working order and compliant with BS 5839.",
        frequency: "Annual testing minimum",
        legal: "BS 5839-1:2017 / Fire Safety Order 2005",
        icon: Bell,
      },
      {
        title: "Emergency Lighting Testing",
        description: "Periodic inspection and testing of emergency escape lighting systems in commercial premises and communal residential areas to confirm functionality in the event of mains failure.",
        frequency: "Monthly checks, annual full duration test",
        legal: "BS 5266-1:2016",
        icon: Lightbulb,
      },
      {
        title: "Fire Extinguisher Testing",
        description: "Annual servicing and inspection of portable fire extinguishers to confirm they are in correct working order and meet current standards.",
        frequency: "Annual",
        legal: "BS 5306-3:2017",
        icon: AlertTriangle,
      },
      {
        title: "Fire Safety Certificate",
        description: "Documentation confirming that a property or premises meets the required fire safety standards following assessment and any necessary remediation.",
        frequency: "Following completed assessment",
        legal: "Fire Safety Act 2021",
        icon: FileText,
      },
    ],
  },
  {
    category: "Environmental",
    color: "text-teal-700",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
    services: [
      {
        title: "Asbestos Survey",
        description: "Management and refurbishment asbestos surveys carried out by qualified surveyors. Identifies the presence, location, and condition of asbestos-containing materials in line with HSE guidance.",
        frequency: "Prior to refurbishment or as part of ongoing management",
        legal: "Control of Asbestos Regulations 2012",
        icon: Wind,
      },
    ],
  },
  {
    category: "Energy",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    services: [
      {
        title: "Energy Performance Certificate (EPC)",
        description: "Energy Performance Certificates for residential and commercial properties. A legal requirement for all properties being let or sold. Produced by accredited assessors with clear energy ratings and improvement recommendations.",
        frequency: "Every 10 years, or on change of tenancy/sale",
        legal: "Energy Efficiency (Private Rented Property) Regulations 2015",
        icon: Zap,
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive range of property compliance services, delivered by accredited professionals and managed through a single, coordinated approach.
          </p>
        </div>
      </section>

      {/* Why choose us strip */}
      <section className="bg-white border-b py-16">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="flex flex-col items-start">
                <Icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Grouped Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl space-y-20">
          {serviceGroups.map((group) => (
            <div key={group.category}>
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 border ${group.borderColor} ${group.bgColor} mb-8`}>
                <span className={`text-xs font-bold uppercase tracking-widest ${group.color}`}>{group.category}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {group.services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="p-8 border bg-white hover:border-primary/40 transition-colors group flex flex-col">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-11 h-11 bg-slate-50 border flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold leading-snug">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <div className="border-t pt-4 mt-auto space-y-2">
                        <div className="flex gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-secondary" />
                          <span><span className="font-medium text-foreground">Frequency:</span> {service.frequency}</span>
                        </div>
                        <div className="flex gap-2 text-xs text-muted-foreground">
                          <FileText className="w-3.5 h-3.5 mt-0.5 shrink-0 text-secondary" />
                          <span><span className="font-medium text-foreground">Legislation:</span> {service.legal}</span>
                        </div>
                      </div>
                      <div className="mt-5">
                        <Link href="/contact" className="text-sm font-medium text-secondary hover:text-secondary/80 inline-flex items-center gap-1">
                          Request a quote <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Calendar CTA */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Never miss a renewal deadline</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                PropAssure maintains a live compliance calendar for every property we manage. We send automated reminders before expiry and can coordinate access directly with your tenants — removing the administrative burden entirely.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Automated renewal reminders",
                  "Tenant coordination included",
                  "Digital certificate storage",
                  "Dedicated account manager",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border">
              <h3 className="text-xl font-bold mb-2">Managing multiple properties?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                We offer portfolio compliance packages for property managers and estate agents, consolidating renewals wherever possible and providing a single point of contact for all service disciplines.
              </p>
              <Button size="lg" asChild className="rounded-none w-full h-12">
                <Link href="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to get fully compliant?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact our team for a no-obligation discussion about your property's compliance requirements.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-none bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
