import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function Testimonials() {
  const { testimonials } = siteConfig.pages.home;
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-primary-800 mb-12">
          Öğrencilerimiz Ne Diyor?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <p className="font-semibold text-primary-700">{item.name}</p>
              </div>
              <p className="text-neutral-600 italic">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}