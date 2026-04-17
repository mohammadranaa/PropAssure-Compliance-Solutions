import { Calendar, ClipboardCheck, FileCheck, ShieldCheck, CheckCircle2, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const steps = [
  {
    number: "01",
    title: "Get in Touch & Get a Quote",
    description: "Contact us by phone, email, or through our online enquiry form. Tell us about your property, your compliance requirements, and your preferred timescale. We'll provide a clear, itemised quote — no hidden fees, no call-centre runaround.",
    detail: "Most quotes are turned around within two hours during business hours. For portfolio clients, we'll arrange a brief discovery call to understand your full requirements before quoting.",
    icon: Phone,
  },
  {
    number: "02",
    title: "We Schedule & Coordinate",
    description: "Once you've accepted your quote, our scheduling team takes care of everything. We liaise directly with your tenants or site contacts to arrange a mutually convenient appointment — removing the most time-consuming part of the process from your hands entirely.",
    detail: "We send appointment confirmation to landlords, agents, and tenants. We follow up automatically if access needs to be rearranged.",
    icon: Calendar,
  },
  {
    number: "03",
    title: "Professional On-Site Survey",
    description: "Our fully accredited engineers and assessors attend the property at the agreed time. They conduct rigorous, methodical inspections with minimal disruption to occupants. All our operatives carry photo ID and are DBS checked.",
    detail: "Every operative is fully accredited with the relevant UK body — Gas Safe registered, NICEIC approved, RICS accredited, or equivalent. We take pride in our punctuality and professionalism.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Receive Your Certificates",
    description: "Digital certificates and comprehensive reports are issued promptly — typically within 24 hours of the inspection. Any non-compliance or remedial actions are highlighted clearly with plain-English explanations and prioritised action points.",
    detail: "All documentation is stored securely in your PropAssure client portal. Certificates are issued in PDF format and can be shared directly with tenants, local authorities, or mortgage providers.",
    icon: FileCheck,
  },
  {
    number: "05",
    title: "Ongoing Compliance Management",
    description: "We don't just issue a certificate and disappear. PropAssure logs every expiry date against your property record and sends automated renewal reminders at 90, 30, and 7 days before expiry — keeping your compliance calendar up to date without any effort on your part.",
    detail: "Portfolio clients can access a live compliance dashboard showing certificate status across all their properties. Remedial works can be arranged through us at competitive rates.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    q: "How quickly can you book an inspection?",
    a: "For most services, we can schedule an appointment within 3–5 working days. For urgent compliance requirements, we offer expedited booking — contact our team to discuss availability.",
  },
  {
    q: "Do you coordinate directly with my tenants?",
    a: "Yes — tenant liaison is included as standard. We contact tenants to confirm the appointment, provide an estimated arrival time, and follow up if access is unavailable.",
  },
  {
    q: "How are certificates delivered?",
    a: "All certificates and reports are delivered digitally as PDFs, typically within 24 hours of the inspection. They are also stored in your PropAssure client portal for retrieval at any time.",
  },
  {
    q: "What happens if my property fails an inspection?",
    a: "We'll provide a clear, prioritised list of remedial actions required to achieve compliance. We can recommend or coordinate approved contractors, and we'll re-inspect once works are complete.",
  },
  {
    q: "Can you handle multiple properties at once?",
    a: "Absolutely. We specialise in portfolio compliance management and regularly work with agencies and landlords managing 50–500+ properties. Volume discounts are available — contact us to discuss.",
  },
  {
    q: "Are your engineers fully accredited?",
    a: "Yes, without exception. All engineers and assessors we deploy are fully registered with the relevant UK regulatory body — Gas Safe, NICEIC, RICS, CIBSE, or equivalent — and carry proof of accreditation.",
  },
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How It Works</h1>
          <p className="text-xl text-muted-foreground">
            A streamlined, five-step process designed to remove the friction from property compliance — from first contact to ongoing management.
          </p>
        </div>
      </section>

      {/* Promise strip */}
      <section className="bg-white border-b py-12">
        <div className="container mx-auto px-4 grid sm:grid-cols-3 gap-8 max-w-4xl">
          {[
            { icon: Clock, title: "Same-day quotes", desc: "Clear, itemised pricing within 2 hours" },
            { icon: CheckCircle2, title: "Accredited engineers", desc: "Every operative is fully registered" },
            { icon: FileCheck, title: "24hr certificates", desc: "Digital reports issued within one business day" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/5 border flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative">
                  {i !== steps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-20 bottom-[-4rem] w-px bg-border" />
                  )}
                  <div className="shrink-0 z-10 relative bg-white">
                    <div className="w-16 h-16 bg-slate-50 border flex flex-col items-center justify-center">
                      <span className="text-xs font-bold text-primary mb-0.5">STEP</span>
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                    <div className="pl-4 border-l-2 border-primary/20">
                      <p className="text-sm text-muted-foreground italic">{step.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-12">Typical Turnaround Timeline</h2>
          <div className="grid sm:grid-cols-4 gap-0">
            {[
              { day: "Day 1", label: "Quote issued", color: "bg-secondary" },
              { day: "Day 2–3", label: "Appointment confirmed", color: "bg-secondary/80" },
              { day: "Day 4–7", label: "Survey conducted", color: "bg-primary" },
              { day: "Day 5–8", label: "Certificate issued", color: "bg-primary/80" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-full h-2 ${item.color}`} />
                <div className="pt-4">
                  <p className="font-bold text-sm">{item.day}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            Timescales are indicative for standard residential properties. Complex or commercial properties may require additional lead time. Expedited bookings available.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b pb-6">
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="rounded-none">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Link>
              </Button>
              <Button asChild className="rounded-none">
                <a href="tel:08001234567">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 0800 123 4567
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-secondary-foreground/90 mb-8">
            Experience property compliance the way it should be — simple, reliable, and professional.
          </p>
          <Button size="lg" asChild className="rounded-none bg-white text-secondary hover:bg-white/90 h-14 px-8 text-base">
            <Link href="/contact">
              Book an Inspection <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
