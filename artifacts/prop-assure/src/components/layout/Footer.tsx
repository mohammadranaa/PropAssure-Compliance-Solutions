import { Link } from "wouter";
import logoSrc from "@assets/PropAssure_20260417_190455_0000_(1)_1776687061489.png";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img src={logoSrc} alt="PropAssure" className="h-16 w-auto" style={{ mixBlendMode: "multiply" }} />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Making Property Compliance Feel Simple. The trusted compliance partner for UK property professionals.
            </p>
            <p className="text-xs text-muted-foreground">
              PropAssure Ltd. Registered in England &amp; Wales.<br />
              Company No. 12345678
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">EPC Certificates</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Gas Safety</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Electrical Safety (EICR)</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Fire Risk Assessments</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Asbestos Surveys</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">PAT Testing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries We Serve</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="font-medium text-foreground">0800 123 4567</li>
              <li>hello@propassure.co.uk</li>
              <li>
                120 Compliance Way<br />
                London, EC1V 2NX
              </li>
              <li className="text-xs">Mon–Fri: 9am – 5:30pm</li>
            </ul>
            <div className="mt-6 p-4 border border-primary/20 bg-primary/5">
              <p className="text-xs font-semibold text-foreground mb-1">Emergency Line</p>
              <p className="text-sm font-bold text-primary">0800 123 4568</p>
              <p className="text-xs text-muted-foreground">24/7 urgent call-outs</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PropAssure Ltd. All rights reserved. Registered in England &amp; Wales.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
