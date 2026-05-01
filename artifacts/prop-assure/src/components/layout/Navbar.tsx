"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@assets/PropAssure_20260417_190455_0000_(1)_1776687061489.png";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-[linear-gradient(90deg,#72b801_0%,#0186c8_100%)]" />

      {/* Top utility bar */}
      <div className="hidden border-b border-border/30 bg-slate-50 md:block">
        <div className="container mx-auto flex items-center justify-end px-4 py-2">
          <a
            href="tel:08001234567"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5" />
            0800 123 4567
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border/40 bg-white/98 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="container mx-auto flex h-24 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logoSrc.src}
              alt="PropAssure"
              className="h-32 w-auto"
              style={{ mixBlendMode: "multiply" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="h-11 rounded-none px-6 text-sm font-semibold shadow-sm transition-all hover:shadow-md"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden rounded-sm p-2 -mr-2 text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-b bg-white shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center rounded-sm px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:bg-slate-50 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t pt-4">
              <a
                href="tel:08001234567"
                className="inline-flex items-center gap-2 px-4 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                0800 123 4567
              </a>
              <Button asChild className="rounded-none h-12 font-semibold">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
