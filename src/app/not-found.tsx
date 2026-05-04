import Container from "@/components/ui/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <h1 className="font-serif text-4xl text-primary-800 mb-4">Sayfa Bulunamadı</h1>
      <p className="text-neutral-600 mb-8">Aradığınız sayfa taşınmış veya silinmiş olabilir.</p>
      <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
        Ana Sayfaya Dön
      </Link>
    </Container>
  );
}