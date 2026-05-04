import { siteConfig } from "@/config/site.config";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function HakkimizdaPage() {
  const { story, instructors } = siteConfig.pages.about;
  return (
    <Container className="py-20">
      <h1 className="font-serif text-4xl text-primary-800 mb-8">Hakkımızda</h1>
      <div className="text-lg text-neutral-700 max-w-3xl mb-16 space-y-4">
        <p>💖 Ruhsatlı &amp; Spor Bakanlığı Onaylı – Sayılı Stüdyolardan Biri!</p>

        <p>
          Bedenini şekillendirirken, ruhunu da dengele…<br />
          Loca Pilates Stüdyo, modern ekipmanları, ferah atmosferi ve alanında uzman eğitmenleriyle
          sana özel bir pilates deneyimi sunuyor. 🌿
        </p>

        <p>💫 Neden Loca Pilates?</p>

        <p>
          🏅 Güvenilir &amp; Bakanlık Onaylı Stüdyo<br />
          Yasal standartlarda, güvenli ve profesyonel bir ortamda spor yapmanın ayrıcalığını yaşa.
        </p>

        <p>
          🧘‍♀️ Uzman Eğitmenlerle Kişiye Özel Seanslar<br />
          Her beden farklıdır. Hedeflerine uygun bireysel veya grup dersleriyle farkı hisset!
        </p>

        <p>
          🌸 Modern Ekipmanlar – Ferah Ortam<br />
          Zarif, şık ve konforlu bir stüdyoda pilatesin en keyifli halini deneyimle.
        </p>

        <p>
          💪 Postür, Esneklik ve Core Gücü Odaklı Programlar<br />
          Duruşunu düzelt, kaslarını güçlendir, enerjini tazele.
        </p>

        <p>
          ✨ Loca’da sadece spor yapmazsın, kendine yeniden hayat verirsin.<br />
          🌷 Sporu ayrıcalıklı bir deneyime dönüştür, Loca’da farkı hisset!
        </p>
      </div>

      <h2 className="font-serif text-2xl text-primary-700 mb-8">Eğitmenlerimiz</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {instructors.map((inst, i) => (
          <div key={i} className="flex gap-6 items-start">
            <Image
              src={inst.photo}
              alt={inst.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-xl">{inst.name}</h3>
              <p className="text-primary-600 text-sm mb-2">{inst.title}</p>
              <p className="text-neutral-600">{inst.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
