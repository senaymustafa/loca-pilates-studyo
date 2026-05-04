"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navigation = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Dersler", href: "/dersler" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary-700">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-primary-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button
              href={siteConfig.contact.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
            >
              Hemen Ara
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neutral-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-2 py-2 text-neutral-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              href={siteConfig.contact.social.whatsapp}
              variant="primary"
              size="sm"
              className="w-full"
            >
              WhatsApp'tan Ulaş
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
}
