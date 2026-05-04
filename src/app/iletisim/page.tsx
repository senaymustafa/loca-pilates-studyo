import { siteConfig } from "@/config/site.config";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function IletisimPage() {
  return (
    <Container className="py-20">
      <h1 className="font-serif text-4xl text-primary-800 mb-8">İletişim</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Bize Ulaşın</h2>
          <div className="space-y-3 text-neutral-700">
            <p><strong>Adres:</strong> {siteConfig.contact.address}</p>
            <p><strong>Telefon:</strong> <a href={`tel:${siteConfig.contact.phone}`} className="text-primary-600">{siteConfig.contact.phone}</a></p>
          </div>
          <div className="mt-6">
            <Button href={siteConfig.contact.social.whatsapp} variant="primary">
              WhatsApp'tan Mesaj Gönder
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Konum</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              src={siteConfig.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stüdyo Konumu"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
