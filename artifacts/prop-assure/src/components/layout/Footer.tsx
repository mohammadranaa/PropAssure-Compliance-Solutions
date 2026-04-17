import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Prop<span className="text-primary">Assure</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Making Property Compliance Feel Simple. The trusted compliance partner for UK property professionals.
            </p>
            <p className="text-sm text-muted-foreground">
              Registered in England & Wales.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services">EPC Certificates</Link></li>
              <li><Link href="/services">Gas Safety</Link></li>
              <li><Link href="/services">Electrical Safety</Link></li>
              <li><Link href="/services">Legionella Risk</Link></li>
              <li><Link href="/services">Fire Risk Assessments</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>0800 123 4567</li>
              <li>hello@propassure.co.uk</li>
              <li>120 Compliance Way<br/>London, EC1V 2NX</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PropAssure Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
