import { siteConfig } from "@/config/site.config";
import Button from "@/components/ui/Button";

export default function Hero() {
  const { hero } = siteConfig.pages.home;

  return (
    <section
      className="relative flex items-center justify-center min-h-[70vh] md:min-h-[85vh] bg-cover bg-fixed bg-[70%_center] md:bg-center"
      style={{
        backgroundImage: `url(${hero.backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight">
          {hero.headline}
        </h1>
        <p className="text-base md:text-xl text-neutral-200 mb-8 md:mb-10 max-w-2xl mx-auto">
          {hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/iletisim" variant="primary" size="lg">
            {hero.cta}
          </Button>
          <Button
            href="/dersler"
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-neutral-900"
          >
            Dersleri Keşfet
          </Button>
        </div>
      </div>

      {/* Scroll indicator – sadece masaüstü */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}