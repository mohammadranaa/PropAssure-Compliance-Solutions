import { Shield, Zap, Flame, Droplet, CheckSquare, Home as HomeIcon, AlertTriangle, Thermometer, ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "EPC Certificates",
    description: "Energy Performance Certificates are a legal requirement for all properties being let or sold in the UK. Our accredited assessors produce detailed, accurate EPCs with clear ratings and actionable improvement recommendations.",
    detail: "Required by law for all lettings and sales. Valid for 10 years. Minimum E rating required for rental properties.",
    frequency: "Every 10 years (or on change of tenant)",
    legal: "Required under Energy Efficiency Regulations 2016",
    icon: Thermometer,
  },
  {
    title: "Gas Safety (CP12)",
    description: "Annual Landlord Gas Safety Records (CP12) are a legal obligation for all properties with gas appliances. Our Gas Safe registered engineers conduct thorough inspections of all gas appliances, pipework, and flues.",
    detail: "All engineers are Gas Safe registered. Reports issued same-day. We coordinate directly with tenants for access.",
    frequency: "Annual (mandatory)",
    legal: "Required under Gas Safety Regulations 1998",
    icon: Flame,
  },
  {
    title: "Electrical Safety (EICR)",
    description: "Electrical Installation Condition Reports assess the safety of the fixed electrical installation in your property. Our NICEIC-approved electricians provide comprehensive reports identifying any defects, damage, or non-compliance.",
    detail: "Mandatory for rental properties. Remedial work coordinated upon request. Digital certificates issued within 24 hours.",
    frequency: "Every 5 years (or on change of tenant)",
    legal: "Required under Electrical Safety Standards Regulations 2020",
    icon: Zap,
  },
  {
    title: "Legionella Risk Assessments",
    description: "Landlords have a duty of care to assess and control the risk of Legionnaires' disease in their water systems. Our specialist assessors evaluate hot and cold water systems, tanks, and distribution networks.",
    detail: "Full written risk assessment provided. Suitable control measures recommended. Compliant with HSE L8 guidance.",
    frequency: "Every 2 years (or when system changes)",
    legal: "Required under Control of Substances Hazardous to Health Regulations 2002",
    icon: Droplet,
  },
  {
    title: "Fire Risk Assessments",
    description: "Legally required for all non-domestic premises and common areas of HMOs and residential blocks. Our qualified fire risk assessors conduct systematic evaluations of fire hazards, means of escape, and existing fire safety measures.",
    detail: "Comprehensive written report. Prioritised action plan provided. Follow-up inspections available.",
    frequency: "Annual review recommended",
    legal: "Required under Regulatory Reform (Fire Safety) Order 2005",
    icon: Shield,
  },
  {
    title: "HMO Licensing Support",
    description: "Houses in Multiple Occupation face the most complex compliance requirements in the residential sector. We compile all required certificates, conduct room-by-room safety checks, and liaise with local authorities on your behalf.",
    detail: "Licence application support. All required certificates bundled. Ongoing compliance management available.",
    frequency: "Every 5 years (licence renewal)",
    legal: "Required under Housing Act 2004",
    icon: HomeIcon,
  },
  {
    title: "PAT Testing",
    description: "Where landlords supply electrical appliances — such as white goods, TVs, or washing machines — Portable Appliance Testing confirms those appliances are safe for tenant use and reduces your liability exposure.",
    detail: "Visual inspection and electrical testing. Pass/fail labels applied. Digital records provided.",
    frequency: "Annual or on change of tenant",
    legal: "Best practice under Electrical Equipment (Safety) Regulations 2016",
    icon: CheckSquare,
  },
  {
    title: "Smoke & Carbon Monoxide Alarms",
    description: "Since 2022, landlords must install carbon monoxide alarms in all rooms with a fixed combustion appliance. We supply, install, test, and certify both smoke and CO alarms to ensure full regulatory compliance.",
    detail: "Supply and installation included. Battery and mains-wired options available. Written confirmation issued.",
    frequency: "At start of tenancy and annual testing",
    legal: "Required under Smoke and CO Alarm Regulations 2022",
    icon: AlertTriangle,
  },
];

const whyCards = [
  { icon: CheckCircle2, title: "All Under One Roof", desc: "No need to coordinate multiple contractors. PropAssure manages your entire compliance calendar from a single point of contact." },
  { icon: Clock, title: "Fast Turnarounds", desc: "Most certificates are issued within 24–48 hours of inspection. We know deadlines matter in property management." },
  { icon: FileText, title: "Clear, Usable Reports", desc: "No dense technical jargon. Our reports are written in plain English and provide clear action points where remediation is required." },
  { icon: Shield, title: "Fully Accredited", desc: "Every engineer and assessor we deploy is fully accredited with the relevant UK regulatory bodies — no exceptions." },
];

export default function Services() {
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

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="p-8 border bg-white hover:border-primary/50 transition-colors group flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 bg-slate-50 border flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <p className="text-sm text-foreground mb-5">{service.detail}</p>
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
      </section>

      {/* Compliance Calendar CTA */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Never miss a renewal deadline</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                PropAssure maintains a live compliance calendar for every property we manage. We send automated reminders at 90, 30, and 7 days before expiry — and we can coordinate access directly with your tenants, so you don't have to.
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
              <h3 className="text-xl font-bold mb-2">Need multiple services?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Ask about our bundled compliance packages for landlords and property managers. We consolidate all renewals to a single visit where possible, saving you time and money.
              </p>
              <Button size="lg" asChild className="rounded-none w-full h-12">
                <Link href="/contact">Build a Custom Package</Link>
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
            Contact our team today for a transparent, no-obligation quote across any of our services.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-none bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Get a Quote Today</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
