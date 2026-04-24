import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  BookCheck,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Flame,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import logoSrc from "@assets/PropAssure_20260417_190455_0000_(1)_1776687061489.png";

const proofStats = [
  { value: "10,000+", label: "Certificates issued each year" },
  { value: "500+", label: "Property clients supported" },
  { value: "98%", label: "Client retention rate" },
  { value: "48hr", label: "Average turnaround" },
];

const serviceCards = [
  {
    icon: Zap,
    title: "Electrical Compliance",
    description:
      "EICR reports, PAT testing, diagnostics, and consumer unit upgrades handled by accredited engineers.",
  },
  {
    icon: Flame,
    title: "Gas Safety",
    description:
      "Annual CP12 certificates and gas inspections delivered by fully registered Gas Safe professionals.",
  },
  {
    icon: Shield,
    title: "Fire & Life Safety",
    description:
      "Fire risk assessments, alarm testing, emergency lighting, and extinguisher servicing under one programme.",
  },
  {
    icon: FileCheck2,
    title: "Energy & EPC",
    description:
      "Residential and commercial EPC certificates with clear documentation for letting, sale, and audit needs.",
  },
  {
    icon: BellRing,
    title: "Renewal Tracking",
    description:
      "Expiry dates tracked across your portfolio with reminders sent before compliance deadlines are missed.",
  },
  {
    icon: Building2,
    title: "Portfolio Delivery",
    description:
      "One coordinated compliance partner across single assets, estates, managed blocks, and national portfolios.",
  },
];

const reasons = [
  {
    title: "One partner across all key disciplines",
    description:
      "Instead of coordinating multiple contractors, clients use one compliance partner for electrical, gas, fire, environmental, and energy requirements.",
  },
  {
    title: "Clear reporting and accountable follow-through",
    description:
      "Certificates and reports are issued in plain English with actionable next steps, so internal teams can make decisions quickly.",
  },
  {
    title: "Built for operational teams, not one-off jobs",
    description:
      "The service model is designed for estate agents, block managers, housing providers, and FM teams that need repeatable delivery at scale.",
  },
];

const industries = [
  "Estate & letting agents",
  "Property & block management companies",
  "Facilities management providers",
  "Commercial property operators",
  "Housing associations & portfolio landlords",
  "Multi-site property portfolios",
];

const processSteps = [
  {
    number: "01",
    title: "Tell us what your portfolio needs",
    description:
      "Share the property type, portfolio size, service requirements, and preferred timescales. We issue a clear quote without vague scopes or hidden extras.",
  },
  {
    number: "02",
    title: "We schedule and coordinate access",
    description:
      "Our team manages appointments directly with tenants or site contacts, removing the back-and-forth from your internal team.",
  },
  {
    number: "03",
    title: "Accredited engineers complete the work",
    description:
      "Inspections are carried out by qualified professionals with consistent delivery standards across every property.",
  },
  {
    number: "04",
    title: "Documentation is issued and tracked",
    description:
      "Reports, certificates, and renewal dates are logged so you have an auditable compliance record instead of scattered paperwork.",
  },
];

const testimonials = [
  {
    quote:
      "PropAssure simplified compliance across our 180-property portfolio. Faster scheduling, clearer reports, and far less chasing internally.",
    name: "Sarah Mitchell",
    role: "Head of Property Management, Bennett & Co",
  },
  {
    quote:
      "We needed one partner who could handle multiple compliance disciplines without constant escalation. PropAssure gave us that structure.",
    name: "James Harrington",
    role: "Director, Harrington Block Management",
  },
  {
    quote:
      "The renewal tracking alone saved our team time every week. We now have visibility across the portfolio instead of reacting at the last minute.",
    name: "Deborah Osei",
    role: "Director, Osei Block Management Ltd",
  },
];

const accreditations = [
  "Gas Safe Registered",
  "NICEIC Approved",
  "RICS Accredited",
  "Trustmark Registered",
  "IOSH Qualified",
  "CIBSE Certified",
];

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8f5_55%,#ffffff_100%)]">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_right,rgba(1,134,200,0.12),transparent_42%),radial-gradient(circle_at_top_left,rgba(114,184,1,0.10),transparent_38%)]" />
        <div className="container relative px-4 py-18 md:py-24 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 border border-secondary/15 bg-white px-4 py-2 text-sm font-medium text-secondary shadow-sm">
                <Shield className="h-4 w-4" />
                UK Property Compliance Partner
              </div>
              <div className="mb-8 flex items-center gap-4">
                <img
                  src={logoSrc.src}
                  alt="PropAssure"
                  className="h-20 w-auto md:h-24"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-foreground md:text-6xl">
                Compliance delivery for property portfolios that cannot afford to drift.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                PropAssure helps estate agents, block managers, landlords, and facilities teams manage
                electrical, gas, fire, environmental, and energy compliance through one coordinated service.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="h-14 rounded-none px-8 text-base">
                  <Link href="/contact">
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-14 rounded-none px-8 text-base">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "EICR",
                  "Gas Safety",
                  "Fire Risk",
                  "EPC",
                  "Asbestos",
                  "Renewal Management",
                ].map((item) => (
                  <div key={item} className="border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-xs">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="border bg-white p-6 shadow-lg">
                <div className="mb-6 flex items-center justify-between gap-4 border-b pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                      Portfolio Snapshot
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-foreground">
                      Compliance managed with structure.
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center bg-primary/10">
                    <BadgeCheck className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {proofStats.map((stat) => (
                    <div key={stat.label} className="border bg-slate-50 p-5">
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-l-4 border-primary bg-primary/5 p-5">
                  <p className="text-sm leading-7 text-muted-foreground">
                    Built for organisations managing multiple properties, recurring inspections, and audit-sensitive
                    compliance obligations across the UK.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border bg-secondary px-5 py-5 text-secondary-foreground">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/70">
                    Response Window
                  </p>
                  <p className="mt-2 text-2xl font-bold">Same-day quotes</p>
                  <p className="mt-2 text-sm text-secondary-foreground/85">
                    Clear scope, transparent pricing, and practical next steps.
                  </p>
                </div>
                <div className="border bg-white px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Client Support
                  </p>
                  <p className="mt-2 text-2xl font-bold text-foreground">Direct account handling</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    One point of contact across scheduling, reporting, and renewals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="container px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Fully accredited engineers
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-primary" />
              Renewal management available
            </span>
            <span className="inline-flex items-center gap-2">
              <BookCheck className="h-4 w-4 text-primary" />
              Audit-ready reporting
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-primary" />
              Structured turnaround times
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container px-4">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why PropAssure</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A compliance partner designed for ongoing operational pressure.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                Most property teams are not struggling because they lack contractors. They are struggling because
                compliance is fragmented, reactive, and hard to track across multiple properties.
              </p>
              <div className="mt-8 border bg-slate-50 p-6">
                <p className="text-sm font-semibold text-foreground">Who this works best for</p>
                <ul className="mt-4 space-y-3">
                  {industries.map((industry) => (
                    <li key={industry} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="border bg-slate-50 p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border bg-white">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50 py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Services</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Core compliance services delivered under one roof.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The model is built to reduce supplier sprawl and give property teams a single compliance workflow.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group border bg-white p-7 transition-colors hover:border-primary/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border bg-primary/5 group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild className="h-12 rounded-none px-8">
              <Link href="/services">
                View Full Service Scope <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container px-4">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">How It Works</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A simple process that turns compliance into a repeatable operation.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                PropAssure is structured around quotation, scheduling, delivery, reporting, and renewal tracking so
                internal teams spend less time chasing individual jobs.
              </p>
              <div className="mt-10 space-y-5">
                {processSteps.map((step) => (
                  <div key={step.number} className="grid gap-5 border bg-slate-50 p-6 md:grid-cols-[72px_1fr]">
                    <div className="flex h-16 w-16 items-center justify-center border bg-white text-xl font-bold text-primary">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="border bg-[linear-gradient(180deg,#0186c8_0%,#056da2_100%)] p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Portfolio Control</p>
                <h3 className="mt-4 text-3xl font-bold">Know what is compliant, what is due, and what needs action.</h3>
                <p className="mt-5 text-sm leading-7 text-white/85">
                  The strongest value in the service is not just inspection delivery. It is the operating structure
                  around certificates, renewal dates, communications, and reporting across multiple properties.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Tenant and site access coordination",
                  "Digital certificate issue and storage",
                  "Renewal reminders before expiry",
                  "Support for multi-property programmes",
                ].map((item) => (
                  <div key={item} className="border bg-white p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border bg-slate-50 p-6">
                <div className="flex items-start gap-4">
                  <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-foreground">Designed for audit-sensitive teams</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Whether you manage a letting portfolio, communal blocks, or multi-site commercial property, the
                      delivery model is built for consistency and documented accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50 py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Client Feedback</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Trusted by teams managing real property risk.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The service is built around reliability, clarity, and reduced administrative drag for operational teams.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="border bg-white p-8">
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-8 text-muted-foreground">"{testimonial.quote}"</p>
                <div className="mt-6 border-t pt-5">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {accreditations.map((item) => (
              <div key={item} className="flex items-center gap-2 border bg-white px-5 py-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container px-4">
          <div className="grid gap-8 border bg-[linear-gradient(135deg,#0b8bcf_0%,#0a6fa6_45%,#72b801_140%)] px-8 py-10 text-white md:grid-cols-[1.15fr_0.85fr] md:px-12 md:py-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Next Step</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to tighten control over your compliance programme?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Tell us what you manage and what you need. We will review the scope, identify the relevant compliance
                services, and provide a practical delivery plan.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 md:items-end">
              <Button size="lg" asChild className="h-14 rounded-none bg-white px-8 text-base text-secondary hover:bg-white/90">
                <Link href="/contact">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                <Phone className="h-5 w-5" />
                0800 123 4567
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                <Users className="h-5 w-5" />
                Support for single assets through to large portfolios
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
