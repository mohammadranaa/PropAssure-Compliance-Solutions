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
  Quote,
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
    icon: Users,
    title: "One partner across all key disciplines",
    description:
      "Instead of coordinating multiple contractors, clients use one compliance partner for electrical, gas, fire, environmental, and energy requirements.",
  },
  {
    icon: FileCheck2,
    title: "Clear reporting and accountable follow-through",
    description:
      "Certificates and reports are issued in plain English with actionable next steps, so internal teams can make decisions quickly.",
  },
  {
    icon: Building2,
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
    role: "Head of Property Management",
    company: "Bennett & Co",
  },
  {
    quote:
      "We needed one partner who could handle multiple compliance disciplines without constant escalation. PropAssure gave us that structure.",
    name: "James Harrington",
    role: "Director",
    company: "Harrington Block Management",
  },
  {
    quote:
      "The renewal tracking alone saved our team time every week. We now have visibility across the portfolio instead of reacting at the last minute.",
    name: "Deborah Osei",
    role: "Director",
    company: "Osei Block Management Ltd",
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
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b bg-[linear-gradient(160deg,#f8fbff_0%,#f0f7f1_50%,#ffffff_100%)]">
        {/* Radial gradients */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top_right,rgba(1,134,200,0.10),transparent_48%),radial-gradient(ellipse_at_top_left,rgba(114,184,1,0.09),transparent_42%)]" />

        <div className="container relative px-4 py-20 md:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left column */}
            <div className="max-w-2xl">
              {/* Trust badge */}
              <div className="mb-8 inline-flex items-center gap-2.5 border border-secondary/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-secondary shadow-sm">
                <Shield className="h-3.5 w-3.5" />
                UK Property Compliance Partner
              </div>

              {/* Logo in hero */}
              <div className="mb-8">
                <img
                  src={logoSrc.src}
                  alt="PropAssure"
                  className="h-20 w-auto md:h-24 lg:h-28"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Compliance delivery for property portfolios that cannot afford to drift.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                PropAssure helps estate agents, block managers, landlords, and
                facilities teams manage electrical, gas, fire, environmental,
                and energy compliance through one coordinated service.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  asChild
                  className="h-13 rounded-none px-8 text-base font-semibold shadow-md transition-all hover:shadow-lg"
                >
                  <Link href="/contact">
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-13 rounded-none px-8 text-base font-medium"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              {/* Service tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["EICR", "Gas Safety", "Fire Risk", "EPC", "Asbestos", "Renewal Management"].map(
                  (item) => (
                    <span
                      key={item}
                      className="border border-border/70 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-foreground shadow-xs"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right column — stats & callouts */}
            <div className="flex flex-col gap-5">
              {/* Main stats card */}
              <div className="border bg-white p-7 shadow-xl shadow-slate-100/80">
                <div className="mb-6 flex items-start justify-between gap-4 border-b pb-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                      Portfolio Snapshot
                    </p>
                    <h2 className="mt-2 text-xl font-semibold leading-snug text-foreground">
                      Compliance managed with structure.
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10">
                    <BadgeCheck className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {proofStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-l-2 border-primary bg-slate-50/80 px-4 py-4"
                    >
                      <div className="text-2xl font-extrabold tracking-tight text-foreground">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs leading-5 text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 border-l-4 border-primary bg-primary/5 px-5 py-4">
                  <p className="text-sm leading-7 text-muted-foreground">
                    Built for organisations managing multiple properties,
                    recurring inspections, and audit-sensitive compliance
                    obligations across the UK.
                  </p>
                </div>
              </div>

              {/* Mini callout pair */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary px-5 py-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                    Response Window
                  </p>
                  <p className="mt-2 text-xl font-bold leading-snug">
                    Same-day quotes
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/80">
                    Clear scope, transparent pricing.
                  </p>
                </div>
                <div className="border bg-white px-5 py-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Client Support
                  </p>
                  <p className="mt-2 text-xl font-bold leading-snug text-foreground">
                    Direct account handling
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    One contact across scheduling and renewals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-b bg-white">
        <div className="container px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted-foreground">
            {[
              { icon: CheckCircle2, label: "Fully accredited engineers" },
              { icon: CalendarClock, label: "Renewal management available" },
              { icon: BookCheck, label: "Audit-ready reporting" },
              { icon: Clock3, label: "Structured turnaround times" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PROPASSURE ── */}
      <section className="bg-white py-24">
        <div className="container px-4">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                Why PropAssure
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A compliance partner designed for ongoing operational pressure.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
                Most property teams are not struggling because they lack
                contractors. They are struggling because compliance is
                fragmented, reactive, and hard to track across multiple
                properties.
              </p>

              <div className="mt-8 border bg-slate-50 p-6">
                <p className="text-sm font-semibold text-foreground">
                  Who this works best for
                </p>
                <ul className="mt-4 space-y-3">
                  {industries.map((industry) => (
                    <li
                      key={industry}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — reason cards */}
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="group border bg-slate-50 p-7 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center border bg-white transition-colors group-hover:bg-primary/5">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold leading-snug text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="border-y bg-slate-50/80 py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Core compliance services delivered under one roof.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The model is built to reduce supplier sprawl and give property
              teams a single compliance workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group border bg-white p-7 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center border bg-primary/5 transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 rounded-none px-8 font-medium transition-all hover:shadow-sm"
            >
              <Link href="/services">
                View Full Service Scope <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white py-24">
        <div className="container px-4">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr]">
            {/* Left — steps */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                How It Works
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A simple process that turns compliance into a repeatable
                operation.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                PropAssure is structured around quotation, scheduling, delivery,
                reporting, and renewal tracking so internal teams spend less time
                chasing individual jobs.
              </p>

              <div className="mt-10 space-y-4">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="group flex gap-5 border bg-slate-50/80 p-6 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border bg-white text-lg font-extrabold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — portfolio control */}
            <div className="flex flex-col gap-5">
              <div className="bg-[linear-gradient(160deg,#0186c8_0%,#056da2_100%)] p-8 text-white shadow-lg shadow-blue-900/20">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Portfolio Control
                </p>
                <h3 className="mt-4 text-2xl font-bold leading-snug md:text-3xl">
                  Know what is compliant, what is due, and what needs action.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  The strongest value in the service is not just inspection
                  delivery. It is the operating structure around certificates,
                  renewal dates, communications, and reporting across multiple
                  properties.
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
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border bg-slate-50 p-6">
                <div className="flex items-start gap-4">
                  <BriefcaseBusiness className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Designed for audit-sensitive teams
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Whether you manage a letting portfolio, communal blocks, or
                      multi-site commercial property, the delivery model is built
                      for consistency and documented accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-y bg-slate-50/80 py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
              Client Feedback
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Trusted by teams managing real property risk.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The service is built around reliability, clarity, and reduced
              administrative drag for operational teams.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col border bg-white p-8 shadow-sm"
              >
                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote icon + text */}
                <Quote className="mb-3 h-7 w-7 text-primary/20" />
                <p className="flex-1 text-sm leading-8 text-muted-foreground">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="mt-7 border-t pt-5">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Accreditations */}
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {accreditations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 border bg-white px-5 py-3 text-xs font-semibold text-foreground shadow-xs transition-shadow hover:shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-white py-24">
        <div className="container px-4">
          <div className="relative overflow-hidden border bg-[linear-gradient(135deg,#0b8bcf_0%,#0a6fa6_50%,#177a18_140%)] px-8 py-12 text-white shadow-xl shadow-blue-900/15 md:px-14 md:py-16">
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

            <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
                  Next Step
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to tighten control over your compliance programme?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/80">
                  Tell us what you manage and what you need. We will review the
                  scope, identify the relevant compliance services, and provide a
                  practical delivery plan.
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 md:items-end">
                <Button
                  size="lg"
                  asChild
                  className="h-14 rounded-none bg-white px-8 text-base font-semibold text-secondary shadow-md transition-all hover:bg-white/95 hover:shadow-lg"
                >
                  <Link href="/contact">
                    Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:08001234567"
                    className="flex items-center gap-3 text-sm font-medium text-white/90 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    0800 123 4567
                  </a>
                  <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                    <Users className="h-4 w-4" />
                    Support for single assets through to large portfolios
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
