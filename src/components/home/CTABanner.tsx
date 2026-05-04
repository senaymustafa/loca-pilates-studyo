import { siteConfig } from "@/config/site.config";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  const { ctaBanner } = siteConfig.pages.home;
  return (
    <section className="py-20 bg-primary-700">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{ctaBanner.title}</h2>
        <p className="text-primary-100 text-lg mb-8">{ctaBanner.subtitle}</p>
        <Button
          href={siteConfig.contact.social.whatsapp}
          size="lg"
          className="text-white border-white hover:bg-white hover:text-neutral-900"
        >
          {ctaBanner.buttonText}
        </Button>
      </div>
    </section>
  );
}
