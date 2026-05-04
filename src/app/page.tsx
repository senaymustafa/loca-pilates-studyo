// src/app/page.tsx
import Hero from "@/components/home/Hero";
import ClassCard from "@/components/classes/ClassCard";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import { siteConfig } from "@/config/site.config";
import InstagramBanner from "@/components/home/InstagramBanner";
import InstagramFeed from "@/components/home/InstagramFeed";

export default function Home() {
  const { classes } = siteConfig.pages.home;

  return (
    <>
      <Hero />

      {/* Dersler */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-primary-800 mb-4">
            Ders Programlarımız
          </h2>
          <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
            Her seviyeye uygun, kişiselleştirilmiş programlarımızdan birini seçin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map((c) => (
              <ClassCard key={c.slug} {...c} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <InstagramBanner />
      <InstagramFeed />
      <CTABanner />
      
    </>
  );
}