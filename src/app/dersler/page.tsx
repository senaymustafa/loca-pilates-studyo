import { siteConfig } from "@/config/site.config";
import Container from "@/components/ui/Container";
import ClassCard from "@/components/classes/ClassCard";

export default function DerslerPage() {
  const { classes } = siteConfig.pages.home;

  return (
    <Container className="py-16 md:py-20">
      <h1 className="font-serif text-4xl text-primary-800 mb-4 text-center">
        Ders Programlarımız
      </h1>
      <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
        Her seviyeye ve ihtiyaca uygun programlarımızı keşfedin.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map((c) => (
          <ClassCard key={c.slug} {...c} />
        ))}
      </div>
    </Container>
  );
}