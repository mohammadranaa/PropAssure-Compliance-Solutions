import { Shield, Award, Users2, CheckCircle2, Building2, Target, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const accreditations = [
  { name: "Gas Safe Registered", number: "Reg. No. 567891", desc: "All gas inspections conducted by Gas Safe registered engineers" },
  { name: "NICEIC Approved", number: "Cert. No. NICEIC-89012", desc: "Electrical work carried out by NICEIC-approved contractors" },
  { name: "RICS Accredited", number: "Firm No. 0098765", desc: "Energy assessors working to RICS professional standards" },
  { name: "Trustmark Registered", number: "ID: 98765432", desc: "Government-endorsed quality scheme for property services" },
  { name: "IOSH Qualified", number: "Member No. 4512678", desc: "Health and safety management to IOSH standards" },
  { name: "CIBSE Certified", number: "Cert. No. CEN-00432", desc: "Energy assessment aligned with CIBSE guidance" },
];

const deliveryPrinciples = [
  {
    icon: Layers,
    title: "Structured Processes",
    desc: "Our scheduling, inspection, and reporting workflows are standardised across all service disciplines. This consistency means clients receive the same standard of delivery regardless of location, property type, or service required.",
  },
  {
    icon: Users2,
    title: "Qualified Engineers",
    desc: "Every engineer and assessor we deploy is fully accredited with the relevant UK regulatory body. We do not use unregistered subcontractors. Accreditation is verified and maintained as a condition of continued engagement.",
  },
  {
    icon: Award,
    title: "Consistent Delivery",
    desc: "We operate to defined turnaround times and reporting standards. Certificates and reports are issued within agreed timeframes, and any deviation is communicated proactively rather than reactively.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About PropAssure</h1>
          <p className="text-xl text-muted-foreground">
            A compliance partner built around the needs of property professionals.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Who We Are</p>
              <h2 className="text-3xl font-bold mb-6">A compliance partner focused on supporting property professionals</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>
                  PropAssure is a UK property compliance company working with estate agents, property managers, facilities management providers, housing associations, and commercial property operators.
                </p>
                <p>
                  We provide electrical, gas, fire, and environmental compliance services — managed through a single, coordinated approach that reduces the administrative burden on property professionals and ensures consistent delivery across portfolios of all sizes.
                </p>
                <p>
                  We are not generalists. Compliance is what we do, and our entire operation — our engineers, our processes, our reporting — is built around delivering it to a consistent standard.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2014", label: "Established" },
                  { value: "40+", label: "Accredited engineers" },
                  { value: "500+", label: "Clients served" },
                  { value: "10,000+", label: "Annual inspections" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-slate-50 border p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-primary text-primary-foreground p-6">
                <p className="font-semibold mb-2">UK Coverage</p>
                <p className="text-sm text-primary-foreground/90 leading-relaxed">
                  We operate nationwide across England, Scotland, and Wales. Our engineers are regionally allocated, ensuring efficient scheduling and consistent response times throughout the UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">What We Do</p>
              <h2 className="text-3xl font-bold mb-6">Compliance management across property portfolios</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                We manage electrical, gas, fire, and environmental compliance across property portfolios — providing the certificates, reports, and documentation that property professionals need to remain legally compliant and operationally sound.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, label: "Electrical", detail: "EICR, PAT Testing, Electrical Diagnostics, Fuse Box Installation" },
                  { icon: Building2, label: "Gas", detail: "Gas Safety Certificates (CP12)" },
                  { icon: Target, label: "Fire & Safety", detail: "Fire Risk Assessments, Alarm Testing, Emergency Lighting, Extinguisher Testing" },
                  { icon: Layers, label: "Environmental", detail: "Asbestos Surveys" },
                  { icon: Award, label: "Energy", detail: "Energy Performance Certificates (EPC)" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3 p-4 bg-white border">
                      <div className="w-8 h-8 bg-primary/5 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white border p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Service Coverage</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our services cover the full range of compliance requirements applicable to residential lettings, commercial premises, HMOs, blocks of flats, and mixed-use developments — across both the private and social housing sectors.
                </p>
              </div>
              <div className="bg-white border p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Reporting</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All certificates and reports are issued digitally, stored in a client portal, and formatted for direct use — whether submitting to tenants, local authorities, or managing agents. Reports are structured, plain-English, and include defined next steps where remediation is required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How We Work</p>
            <h2 className="text-3xl font-bold mb-4">Structured. Qualified. Consistent.</h2>
            <p className="text-muted-foreground">
              Our operational model is built to deliver compliance reliably, at scale, without variation in quality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deliveryPrinciples.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-slate-50 border p-8">
                  <div className="w-12 h-12 bg-white border flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Approach</p>
              <h2 className="text-3xl font-bold mb-6">Compliance should be predictable, not reactive</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Too many property professionals are still managing compliance reactively — chasing certificates as they expire, dealing with last-minute scheduling, and relying on contractors who don't communicate effectively. The cost of that approach is time, risk, and exposure.
                </p>
                <p>
                  Our model is built on the principle that compliance should be planned, tracked, and delivered proactively. We manage renewal calendars, coordinate access, and issue reminders before deadlines arrive — so our clients are never caught out.
                </p>
                <p>
                  We work best with clients who want to take compliance seriously and treat it as an operational process, not an afterthought. If that describes your organisation, we'd welcome the conversation.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "Proactive Renewal Management", desc: "We track expiry dates across all services and remind clients in advance — removing the risk of certificates lapsing unnoticed." },
                { title: "Direct Tenant Coordination", desc: "We handle access arrangements with tenants directly, removing one of the most time-consuming aspects of compliance management from your team." },
                { title: "Single Point of Contact", desc: "One account manager, one point of contact, for all compliance disciplines. No need to coordinate across multiple contractors or service providers." },
                { title: "Documented and Auditable", desc: "Every inspection, certificate, and report is stored digitally and accessible on demand — providing a clear, auditable compliance record for any property." },
              ].map((item) => (
                <div key={item.title} className="bg-white border p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Accreditations & Registrations</h2>
            <p className="text-muted-foreground">
              All services are delivered by engineers and assessors holding current accreditations with the relevant UK regulatory bodies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((acc) => (
              <div key={acc.name} className="bg-slate-50 border p-6">
                <p className="font-semibold mb-1">{acc.name}</p>
                <p className="text-xs text-primary font-medium mb-3">{acc.number}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{acc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="rounded-none h-12 px-8">
              <Link href="/contact">Speak to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
