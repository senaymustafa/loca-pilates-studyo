import { siteConfig } from "@/config/site.config";
import Button from "@/components/ui/Button";

export default function InstagramBanner() {
  return (
    <section className="py-16 bg-accent-50">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="font-serif text-2xl md:text-3xl text-primary-800 mb-4">
          Stüdyo hayatımız Instagram'da!
        </h3>
        <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
          Güncel ders programları, öğrenci dönüşümleri ve stüdyo atmosferimiz için bizi takip edin.
        </p>
        <Button
          href={siteConfig.contact.social.instagram}
          variant="outline"
          size="md"
          target="_blank"
          rel="noopener noreferrer"
          className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          @{siteConfig.contact.social.instagram.split("/").pop()}
        </Button>
      </div>
    </section>
  );
}