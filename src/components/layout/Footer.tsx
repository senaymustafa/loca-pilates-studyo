import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Stüdyo Bilgisi */}
          <div>
            <h3 className="font-serif text-xl text-white mb-3">{siteConfig.name}</h3>
            <p className="text-sm leading-relaxed">{siteConfig.pages.about.story.slice(0, 120)}...</p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-white font-semibold mb-3">Sayfalar</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Anasayfa</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/dersler" className="hover:text-white transition-colors">Dersler</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white font-semibold mb-3">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li>{siteConfig.contact.address}</li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
            {/* Sosyal Medya İkonları (basit) */}
            <div className="flex gap-4 mt-4">
              {/* Instagram */}
              <a
                href={siteConfig.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram'da takip edin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={siteConfig.contact.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="WhatsApp'tan yazın"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-6 text-center text-sm text-neutral-500">
          <p>© {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <p className="mt-1">
            design by{" "}
            <a
              href="mailto:mustafasenayy@hotmail.com"
              className="hover:text-primary-500 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              msenay
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
