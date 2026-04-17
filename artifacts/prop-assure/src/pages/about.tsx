import { Shield, Award, Users2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About PropAssure</h1>
          <p className="text-xl text-muted-foreground">
            Setting the standard for reliability and clarity in UK property compliance.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl font-medium text-foreground mb-8">
              PropAssure was founded on a simple observation: property professionals spend too much time chasing compliance certificates, dealing with unreliable contractors, and deciphering complex regulations.
            </p>
            <p>
              We built this firm to be the antidote to that frustration. We are a dedicated team of compliance experts, assessors, and engineers who believe that regulatory adherence shouldn't be a bottleneck for your business.
            </p>
            <p>
              Operating across the UK, we serve everyone from independent landlords to national estate agency networks. Our approach is characterized by rigorous standards, transparent communication, and an unwavering commitment to keeping your properties legally sound and inherently safe.
            </p>
            <p>
              We don't just issue certificates; we provide peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white border flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Uncompromising Integrity</h3>
              <p className="text-muted-foreground text-sm">
                Safety is not negotiable. Our assessments are thorough, objective, and fully aligned with current UK legislation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white border flex items-center justify-center mb-6">
                <Users2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clear Communication</h3>
              <p className="text-muted-foreground text-sm">
                We replace industry jargon with plain English, ensuring you understand exactly what is required and why.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white border flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Reliability</h3>
              <p className="text-muted-foreground text-sm">
                We turn up when we say we will, deliver reports promptly, and manage renewals proactively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}