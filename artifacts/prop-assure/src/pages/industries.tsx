import { Building2, Key, Users, Building, Briefcase, Factory, CheckCircle2, ArrowRight, Shield, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const industries = [
  {
    title: "Estate & Letting Agents",
    description: "Managing compliance across a large portfolio of managed properties is one of the biggest operational challenges facing estate and letting agencies. Missed renewals, unreliable contractors, and certificate chasing eat into your team's time and expose your agency to significant legal risk.",
    howWeHelp: [
      "High-volume certificate management across entire portfolios",
      "Automated renewal tracking with agent and tenant reminders",
      "Dedicated account manager for each agency",
      "Bulk booking discounts for portfolio clients",
      "Digital dashboard with live certificate status",
    ],
    icon: Key,
  },
  {
    title: "Property Managers",
    description: "Block and estate managers are responsible for the compliance of communal areas, shared systems, and individual units across multiple developments. The scale and complexity of this responsibility demands a compliance partner with systematic, proven processes.",
    howWeHelp: [
      "Fire risk assessments for communal and common areas",
      "Legionella management for shared water systems",
      "Coordinated multi-property scheduling",
      "Audit trail documentation for block management records",
      "Emergency call-out service for urgent compliance issues",
    ],
    icon: Building2,
  },
  {
    title: "Private Landlords",
    description: "Private landlords face an increasingly complex web of regulations — from energy performance requirements to electrical safety standards. For those managing just one or two properties, keeping up with changing legislation while balancing other commitments is genuinely difficult.",
    howWeHelp: [
      "Plain-English guidance on exactly what your property legally requires",
      "Flexible booking around tenant availability",
      "Certificate reminders so you never miss a renewal",
      "Single point of contact for all your compliance needs",
      "Competitive pricing for smaller portfolios",
    ],
    icon: Users,
  },
  {
    title: "Housing Associations",
    description: "Registered social landlords and housing associations manage thousands of properties and face rigorous regulatory scrutiny. They require a compliance partner that delivers consistently high standards, watertight documentation, and the capacity to operate at scale.",
    howWeHelp: [
      "Scalable nationwide operations",
      "Full audit trails compliant with regulatory reporting",
      "Integration with property management software",
      "Framework agreements and long-term service contracts",
      "Regular management information and compliance reporting",
    ],
    icon: Building,
  },
  {
    title: "Commercial Property",
    description: "Commercial landlords and occupiers face specific compliance obligations under health and safety legislation. From multi-storey office buildings to high street retail units, we provide the technical expertise and accreditations required for commercial environments.",
    howWeHelp: [
      "Commercial-grade fire risk assessments",
      "Electrical testing for large and complex installations",
      "Energy performance certification for commercial premises",
      "Compliance support for building handovers and new leases",
      "Periodic re-inspections and condition monitoring",
    ],
    icon: Briefcase,
  },
  {
    title: "HMO Operators",
    description: "Houses in Multiple Occupation require more frequent inspections, stricter safety standards, and more complex licensing arrangements than standard rentals. HMO operators face the greatest compliance burden in the residential sector — and the greatest penalties for non-compliance.",
    howWeHelp: [
      "Full HMO licence application support",
      "Consolidated compliance packages covering all required certificates",
      "Local authority liaison on your behalf",
      "Room-by-room PAT testing and fire safety checks",
      "Ongoing compliance management as tenants change",
    ],
    icon: Factory,
  },
];

const caseStudy = {
  client: "Bennett & Co Estate Agents",
  properties: "200+",
  challenge: "Bennett & Co were managing over 200 properties with compliance certificates tracked on spreadsheets. Renewals were frequently missed, tenant coordination took up significant staff time, and the agency had faced two formal notices from local authorities within 12 months.",
  solution: "PropAssure took over full compliance management across the portfolio. We conducted an initial audit across all 200 properties, identified 47 overdue certificates, and cleared the backlog within three weeks. We then implemented our ongoing management service — automated tracking, direct tenant coordination, and a live compliance dashboard for the agency.",
  outcome: "Within six months, Bennett & Co achieved full compliance across their portfolio for the first time. Staff time spent on compliance reduced by an estimated 70%. No further regulatory notices have been received.",
  contact: "Sarah Mitchell, Head of Property Management",
};

export default function Industries() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Who We Serve</h1>
          <p className="text-xl text-muted-foreground">
            Tailored compliance solutions for every tier of the UK property sector. From individual landlords to national agency networks.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
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
                    <p className="text-muted-foreground leading-relaxed">{ind.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">How We Help</p>
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

      {/* Case Study */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Client Story</p>
            <h2 className="text-3xl font-bold">From compliance chaos to full control</h2>
          </div>
          <div className="bg-white border p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-primary/5 border border-primary/20 px-4 py-2">
                <p className="text-xs text-muted-foreground">Client</p>
                <p className="font-semibold text-sm">{caseStudy.client}</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 px-4 py-2">
                <p className="text-xs text-muted-foreground">Properties Managed</p>
                <p className="font-semibold text-sm">{caseStudy.properties}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-secondary" />
                  <h4 className="font-semibold">The Challenge</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.challenge}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold">Our Solution</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.solution}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold">The Outcome</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.outcome}</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t">
              <p className="text-sm italic text-muted-foreground">
                "PropAssure transformed how we handle compliance across our portfolio. We achieved full compliance for the first time and our staff now spend their time on what matters."
              </p>
              <p className="mt-2 text-sm font-semibold">{caseStudy.contact}</p>
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
          <h2 className="text-3xl font-bold mb-6">Partner With PropAssure</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the hundreds of UK property professionals who trust PropAssure to protect their portfolios, their tenants, and their reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-none h-14 px-8">
              <Link href="/contact">Start a Conversation</Link>
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
