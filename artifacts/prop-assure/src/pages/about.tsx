import { Shield, Award, Users2, CheckCircle2, Building2, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const values = [
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    desc: "Safety is not negotiable. Our assessments are thorough, objective, and fully aligned with current UK legislation. We never cut corners — and we will tell you clearly when a property doesn't meet the required standard.",
  },
  {
    icon: Users2,
    title: "Clear Communication",
    desc: "We replace industry jargon with plain English. Every report we issue tells you exactly what the result means, what action is required, and what the consequence of non-action would be. No ambiguity.",
  },
  {
    icon: Award,
    title: "Professional Reliability",
    desc: "We turn up when we say we will, deliver reports promptly, and manage renewals proactively. Our reputation is built on being the most dependable compliance partner in the market — and we intend to keep it.",
  },
  {
    icon: Target,
    title: "Client-First Approach",
    desc: "Our processes are designed around your workflow, not ours. From direct tenant coordination to live compliance dashboards, every feature we've developed exists to reduce the burden on property professionals.",
  },
  {
    icon: Heart,
    title: "Genuine Care for Safety",
    desc: "Behind every certificate is a real home or workplace. We take seriously our role in protecting the people who live and work in the properties we inspect — and that motivates us to do our best work every day.",
  },
  {
    icon: Building2,
    title: "UK Expertise",
    desc: "We are a UK-only operation. Our entire team is trained in UK law, registered with UK regulatory bodies, and focused entirely on the needs of the UK property sector. We don't operate internationally — we don't need to.",
  },
];

const accreditations = [
  { name: "Gas Safe Registered", number: "Reg. No. 567891", desc: "All gas inspections conducted by Gas Safe registered engineers" },
  { name: "NICEIC Approved", number: "Cert. No. NICEIC-89012", desc: "Electrical work carried out by NICEIC-approved contractors" },
  { name: "RICS Accredited", number: "Firm No. 0098765", desc: "Energy assessors working to RICS professional standards" },
  { name: "Trustmark Registered", number: "ID: 98765432", desc: "Government-endorsed quality scheme for home improvement" },
  { name: "IOSH Qualified", number: "Member No. 4512678", desc: "Health and safety management to IOSH standards" },
  { name: "CIBSE Certified", number: "Cert. No. CEN-00432", desc: "Energy assessment aligned with CIBSE guidance" },
];

const team = [
  {
    name: "Michael Lawson",
    role: "Managing Director",
    bio: "Over 20 years in the UK property compliance sector. Previously Head of Compliance at a FTSE 250 property company.",
  },
  {
    name: "Rachel Osei",
    role: "Head of Operations",
    bio: "Oversees scheduling, client management, and quality assurance across all service lines. CIBSE and IOSH qualified.",
  },
  {
    name: "Tom Ashworth",
    role: "Chief Assessor",
    bio: "Gas Safe registered engineer with 15 years of field experience. Leads our technical team of 35 engineers and assessors.",
  },
  {
    name: "Emily Griffiths",
    role: "Client Partnerships Director",
    bio: "Responsible for estate agency and portfolio client relationships. Former property manager with 12 years of industry experience.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About PropAssure</h1>
          <p className="text-xl text-muted-foreground">
            Setting the standard for reliability and clarity in UK property compliance since 2014.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Story</p>
              <h2 className="text-3xl font-bold mb-6">Built to solve a real problem</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PropAssure was founded in 2014 on a simple but important observation: property professionals were spending enormous amounts of time chasing compliance certificates, dealing with unreliable contractors, and trying to decipher an increasingly complex web of UK regulations.
                </p>
                <p>
                  Our founder, Michael Lawson, spent 15 years working as Head of Compliance for a large residential property group before founding PropAssure. He had seen first-hand how compliance failures — however administrative — could result in substantial fines, insurance disputes, and in the worst cases, genuine safety incidents.
                </p>
                <p>
                  He built PropAssure to be the antidote to that frustration: a single, reliable, plainly-speaking compliance partner that property professionals could genuinely trust.
                </p>
                <p>
                  Ten years on, we serve over 500 clients across the UK — from independent landlords to national agency networks. Our team of 40+ accredited engineers and assessors conducts more than 10,000 inspections per year. Our client retention rate is 98%.
                </p>
                <p className="font-medium text-foreground">
                  We don't just issue certificates. We provide peace of mind.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2014", label: "Founded" },
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
                <p className="font-semibold mb-2">Our Coverage</p>
                <p className="text-sm text-primary-foreground/90 leading-relaxed">
                  We operate nationwide across England, Scotland, and Wales. Our engineers are field-based and allocated regionally, ensuring local knowledge and fast scheduling throughout the UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Principles</h2>
            <p className="text-muted-foreground">
              These aren't mission-statement platitudes. They're the standards we hold ourselves to every day — in the field, in our reports, and in our client relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border p-8">
                  <div className="w-12 h-12 bg-primary/5 border flex items-center justify-center mb-5">
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

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">
              PropAssure is led by experienced property compliance professionals with decades of combined industry expertise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex gap-5 p-6 border bg-slate-50">
                <div className="w-14 h-14 bg-primary/10 border flex items-center justify-center shrink-0 text-xl font-bold text-primary">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Accreditations & Registrations</h2>
            <p className="text-muted-foreground">
              Every accreditation we hold is a guarantee of the standards your properties deserve.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((acc) => (
              <div key={acc.name} className="bg-white border p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-semibold">{acc.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{acc.number}</p>
                <p className="text-sm text-muted-foreground">{acc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Work with a team you can trust</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Get in touch to discuss your compliance requirements. We'll be straightforward about what you need, what it costs, and how we can help.
          </p>
          <Button size="lg" asChild className="rounded-none bg-white text-primary hover:bg-white/90 h-14 px-8">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
