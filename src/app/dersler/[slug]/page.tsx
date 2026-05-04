import { siteConfig } from "@/config/site.config";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return siteConfig.pages.home.classes.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ders = siteConfig.pages.home.classes.find((c) => c.slug === slug);
  if (!ders) return {};
  return {
    title: `${ders.title} | ${siteConfig.name}`,
    description: ders.desc,
  };
}

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const classData = siteConfig.pages.home.classes.find((c) => c.slug === slug);

  if (!classData) {
    notFound();
  }

  return (
    <Container className="py-16 md:py-20">
      {/* Geri dönüş linki */}
      <Link
        href="/dersler"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 mr-1"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        Tüm Dersler
      </Link>

      {/* Ana içerik grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Görsel */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={classData.image}
            alt={classData.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Detaylar */}
        <div>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-800 mb-4">
            {classData.title}
          </h1>

          <div className="flex gap-4 mb-6 text-sm">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
              {classData.duration}
            </span>
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full font-medium">
              {classData.level}
            </span>
          </div>

          <p className="text-neutral-700 leading-relaxed mb-8">
            {classData.longDesc}
          </p>

          {/* Faydalar */}
          <div className="mb-8">
            <h3 className="font-semibold text-xl text-primary-700 mb-4">
              Faydaları
            </h3>
            <ul className="space-y-3">
              {classData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <h4 className="font-semibold text-lg text-primary-800 mb-2">
              Bu dersi denemeye ne dersiniz?
            </h4>
            <p className="text-neutral-600 mb-4">
              İlk dersiniz ücretsiz! Hemen iletişime geçin, size uygun gün ve
              saati birlikte belirleyelim.
            </p>
            <Button
              href={siteConfig.contact.social.whatsapp}
              variant="primary"
              size="md"
            >
              Ücretsiz Deneme Dersi Al
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}