import { Building2, Key, Building, Briefcase, Factory, CheckCircle2, ArrowRight, Shield, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const industries = [
  {
    title: "Estate & Letting Agents",
    challenge: "Managing compliance certificates across a large portfolio of managed properties is one of the most time-intensive operational challenges facing estate and letting agencies. Missed renewals and unreliable contractors create regulatory exposure and reputational risk.",
    howWeHelp: [
      "Centralised compliance management across entire managed portfolios",
      "Automated renewal tracking with proactive reminders",
      "Direct tenant coordination — removing the burden from agency staff",
      "Dedicated account manager for portfolio clients",
      "Digital certificate storage and live compliance status reporting",
    ],
    icon: Key,
  },
  {
    title: "Property & Block Management Companies",
    challenge: "Block and estate managers are responsible for compliance across communal areas, shared systems, and individual units within multi-tenancy developments. The complexity and volume of requirements demands a systematic, accountable approach.",
    howWeHelp: [
      "Fire risk assessments for communal and shared areas",
      "Emergency lighting and fire alarm testing for blocks",
      "Coordinated scheduling across multiple developments",
      "Full audit trail documentation for block management records",
      "Emergency call-out service for urgent compliance matters",
    ],
    icon: Building2,
  },
  {
    title: "Facilities Management Companies",
    challenge: "Facilities management providers often carry compliance responsibility across diverse and geographically spread property contracts. Managing multiple service disciplines through separate contractors creates operational inefficiency and accountability gaps.",
    howWeHelp: [
      "Single-partner delivery across electrical, gas, fire, and environmental disciplines",
      "Outsourced compliance delivery across FM contracts",
      "Consistent reporting standards aligned with FM operational requirements",
      "Flexible service models to suit contract structures",
      "Scalable capacity across national or regional portfolios",
    ],
    icon: Settings,
  },
  {
    title: "Commercial Property Operators",
    challenge: "Commercial landlords and occupiers face specific obligations under health and safety legislation, with greater complexity than residential properties. Non-compliance in commercial settings can result in enforcement action, insurance invalidation, or operational disruption.",
    howWeHelp: [
      "Commercial-grade fire risk assessments across all premises types",
      "Electrical testing for large and complex commercial installations",
      "Energy Performance Certificates for commercial lettings and sales",
      "Asbestos surveys prior to refurbishment or as part of management plans",
      "Compliance documentation for lease renewals and building handovers",
    ],
    icon: Briefcase,
  },
  {
    title: "Housing Associations",
    challenge: "Registered social landlords manage large residential portfolios and face rigorous regulatory scrutiny. Compliance must be delivered consistently across diverse stock, with full documentation to support audit and regulatory reporting.",
    howWeHelp: [
      "Scalable compliance delivery across large residential portfolios",
      "Full audit trails aligned with regulatory reporting requirements",
      "Systematic scheduling to maintain compliance across all units",
      "Framework agreements and long-term service contracts available",
      "Regular management information and portfolio compliance reporting",
    ],
    icon: Building,
  },
];

const fmSection = {
  title: "Supporting Facilities Management Providers",
  content: "We partner with facilities management companies to deliver compliance services across their contracts — acting as a reliable extension of their operational capabilities. Our structured processes, consistent reporting, and multi-discipline capacity make us a practical and dependable outsourced compliance partner for FM providers operating at scale.",
  points: [
    "Electrical, gas, fire, and environmental services under one contract",
    "Consistent delivery standards across all client sites",
    "Reporting formats aligned to FM operational workflows",
    "Flexible mobilisation to support new contract wins",
  ],
};

export default function Industries() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Who We Serve</h1>
          <p className="text-xl text-muted-foreground">
            We work with property and facilities management organisations that require reliable, scalable compliance delivery across their portfolios.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-10">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div key={i} className="grid md:grid-cols-2 gap-8 p-8 border bg-white hover:border-primary/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/5 border flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{ind.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{ind.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">How We Help</p>
                    <ul className="space-y-3">
                      {ind.howWeHelp.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href="/contact" className="text-sm font-medium text-secondary hover:text-secondary/80 inline-flex items-center gap-1">
                        Discuss your requirements <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FM Partnership Section */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-4 py-1.5 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Partnership Programme</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">{fmSection.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{fmSection.content}</p>
              <Button asChild className="rounded-none">
                <Link href="/contact">Enquire About Partnerships <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="bg-white border p-8">
              <p className="text-sm font-semibold mb-6">What a partnership with PropAssure delivers:</p>
              <ul className="space-y-4">
                {fmSection.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t">
                <div className="flex items-start gap-3 text-sm">
                  <FileText className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    We can provide framework agreements and service contracts structured to suit the requirements of facilities management organisations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground text-sm">Property professionals served across the UK</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground text-sm">Compliance certificates issued annually</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground text-sm">Client retention rate year on year</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Let's discuss your requirements</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you manage 10 properties or 10,000, we can structure a compliance programme that fits your operational model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-none h-14 px-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-none h-14 px-8">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
