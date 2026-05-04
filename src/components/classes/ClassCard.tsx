import Image from "next/image";
import Link from "next/link";

interface ClassCardProps {
  title: string;
  desc: string;
  image: string;
  slug: string;
}

export default function ClassCard({ title, desc, image, slug }: ClassCardProps) {
  return (
    <Link href={`/dersler/${slug}`} className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="font-serif text-xl font-semibold text-primary-800 mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm">{desc}</p>
      </div>
    </Link>
  );
}
