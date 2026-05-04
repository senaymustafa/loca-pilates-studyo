// src/config/site.config.ts

export const siteConfig = {
  name: "Loca Pilates Studio",
  tagline: "Bedeninizle barışın, ruhunuzu dinlendirin.",
  description:
    "Loca Pilates ile butik pilates deneyimi. Reformer, mat ve özel ders seçenekleriyle size özel bir yolculuk.",
  url: "https://www.zenpilates.com",
  logo: "/images/logo.svg", // Logo dosyanı public/images/ içine at

  contact: {
    phone: "+90 552 103 58 15",
    address: "Sümer mahallesi 24. Sok 1E no: 1A, Istanbul, Turkey 34000",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.7594337903447!2d28.896490399999994!3d40.98959939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb0dcf5c6197%3A0xa64d6fce6a7e71e!2sLoca%20Pilates%20Studio!5e1!3m2!1str!2str!4v1777924916586!5m2!1str!2str",
    social: {
      instagram: "https://www.instagram.com/loca_pilates",
      whatsapp: "https://wa.me/905521035815",
    },
  },

  colors: {
    primary: {
      50: "#f7f9f8",
      100: "#e8f0ed",
      200: "#d0e2db",
      300: "#b2cec3",
      400: "#8fb8a7",
      500: "#6fa18b",   // ana vurgu rengi
      600: "#5a8a76",
      700: "#4a7261",
      800: "#3d5e50",
      900: "#324d42",
    },
    accent: {
      50: "#fdfbf7",
      100: "#f9f3e8",
      200: "#f2e5cc",
      300: "#e7d1a8",
      400: "#dcbd84",
      500: "#c9a65a",   // ikincil vurgu
      600: "#b39247",
      700: "#94783a",
      800: "#775f2f",
      900: "#5c4924",
    },
    neutral: {
      50: "#fafaf9",
      100: "#f5f4f0",
      200: "#e7e5e0",
      300: "#d4d1ca",
      400: "#b0aca3",
      500: "#8c8880",
      600: "#6b6761",
      700: "#55524d",
      800: "#3b3936",
      900: "#272624",
    },
  },

  pages: {
    home: {
      hero: {
        headline: "Bedenini şekillendirirken ruhunu da dengele",
        subheadline:
          "Loca Pilates Stüdyo, modern ekipmanları, ferah atmosferi ve alanında uzman eğitmenleriyle sana özel bir pilates deneyimi sunuyor. 🌿",
        cta: "Ücretsiz Deneme Dersi",
        backgroundImage: "/images/hero.jpeg",
      },
      classes: [
        {
          title: "Reformer Pilates",
          desc: "Özel ekipmanla derin kas gruplarını hedefleyen, omurgayı destekleyen etkili bir çalışma.",
          longDesc: "Reformer pilates, yaylı bir platform üzerinde yapılan, direnç ve destek sağlayan özel bir ekipmanla uygulanır. Her hareket kontrollü ve akıcıdır; böylece eklemlere binen yük minimuma iner. Özellikle omurga sağlığını desteklemek, postürü düzeltmek ve derin core kaslarını aktive etmek isteyenler için birebirdir. Seanslar, eğitmen eşliğinde birebir veya maksimum 3 kişilik gruplar halinde yapılır.",
          benefits: [
            "Omurga hizasını düzelterek duruş bozukluklarını giderir",
            "Derin karın ve sırt kaslarını hedefleyerek core gücünü artırır",
            "Eklemlere binen yükü azaltarak sakatlık riskini minimuma indirir",
            "Esnekliği ve vücut farkındalığını geliştirir",
          ],
          duration: "50 dakika",
          level: "Her seviyeye uygun",
          image: "/images/reformer.jpeg",
          slug: "reformer",
        },
        {
          title: "Medikal Pilates",
          desc: "Skolyoz başta olmak üzere omurga eğriliklerine özel, postürü düzelten ve simetrik kas dengesini hedefleyen terapötik pilates yöntemi.",
          longDesc: "Medikal pilates, skolyoz gibi omurga deformitelerinin yönetiminde bilinçli hareket, solunum ve stabilizasyonu birleştiren özel bir yaklaşımdır. Skolyoza özel pilates, eğriliğin tipine (C veya S eğriliği) göre kişiye özel çalışma planı sunar. Hedef; konkav (içbükey) taraftaki kısalmış kasları esnetmek, konveks (dışbükey) taraftaki zayıflamış kasları kuvvetlendirmek ve omurgaya üç boyutlu stabilizasyon kazandırmaktır. Nefes teknikleri, torsiyonel hareketler ve omurga aksiyal uzaması skolyoz ilerlemesini yavaşlatmaya yardımcı olur. Bu ders, stüdyomuzda pilates eğitmeni ve fizyoterapist iş birliğiyle birebir veya küçük gruplar halinde sunulur.",
          benefits: [
            "Omurgadaki eğrilik açısının ilerlemesini yavaşlatmaya yardımcı olur",
            "İçbükey taraftaki kas kısalığını ve dışbükey taraftaki kas zayıflığını dengeler",
            "Skolyoza bağlı sırt, bel ve kürek kemiği ağrılarını azaltır",
            "Postür ve vücut farkındalığını artırarak günlük hareket kalitesini yükseltir",
          ],
          duration: "55 dakika",
          level: "Tüm seviyeler",
          image: "/images/medikal.png",
          slug: "medikal",
        },
        {
          title: "Hamile Pilatesi",
          desc: "Anne adayları için özel hazırlanmış, güvenli ve rahatlatıcı bir program.",
          longDesc: "Hamile pilatesi, gebeliğin her dönemine uygun olarak modifiye edilmiş hareketlerden oluşur. Pelvik taban kaslarını güçlendirmeye, bel ve sırt ağrılarını hafifletmeye ve doğum sürecine hazırlanmaya yardımcı olur. Eğitmenimiz Deniz Öztürk, hamile pilatesi ve postnatal toparlanma konusunda özel eğitimlidir. Dersler maksimum 4 kişi ile güvenli ve konforlu bir ortamda gerçekleşir.",
          benefits: [
            "Bel ve sırt ağrılarını hafifletir",
            "Pelvik taban kaslarını güçlendirerek doğumu kolaylaştırır",
            "Nefes teknikleri ile doğum anında rahatlamayı sağlar",
            "Doğum sonrası toparlanma sürecini hızlandırır",
          ],
          duration: "45 dakika",
          level: "Hamilelik öncesi onay gerekir",
          image: "/images/prenatal.png",
          slug: "prenatal",
        },
      ],
      testimonials: [
        {
          quote:
            "Bel ağrılarım 3 seansta neredeyse tamamen geçti. Elif hocamın enerjisi inanılmaz!",
          name: "Ayşe K.",
          avatar: "/images/avatar1.png",
        },
        {
          quote:
            "Stüdyonun atmosferi çok huzurlu, dersler tam ihtiyacım olan şeymiş.",
          name: "Merve T.",
          avatar: "/images/avatar2.jpeg",
        },
        {
          quote:
            "Hamileliğim boyunca çok rahat ettim, doğum sonrası toparlanmam da çok hızlı oldu.",
          name: "Zeynep S.",
          avatar: "/images/avatar3.jpg",
        },
      ],
      ctaBanner: {
        title: "İlk dersiniz ücretsiz!",
        subtitle:
          "Size en uygun programı birlikte belirleyelim. Hemen randevu alın.",
        buttonText: "WhatsApp'tan Yaz",
      },
      instagramFeed: [
        { image: "/images/insta1.jpeg", link: "https://www.instagram.com/loca_pilates/" },
        { image: "/images/insta2.jpeg", link: "https://www.instagram.com/loca_pilates/" },
        { image: "/images/insta3.png", link: "https://www.instagram.com/loca_pilates/" },
      ],
    },
    about: {
      story:
        "🌷 Sporu ayrıcalıklı bir deneyime dönüştür, Loca’da farkı hisset!",
      instructors: [
        {
          name: "Elif Yılmaz",
          title: "Baş Eğitmen & Kurucu",
          photo: "/images/instructor1.png",
          bio: "10 yıllık pilates deneyimi, reformer ve mat konusunda uluslararası sertifikalara sahip.",
        },
        {
          name: "Deniz Öztürk",
          title: "Kıdemli Eğitmen",
          photo: "/images/instructor2.png",
          bio: "Hamile pilatesi ve postnatal toparlanma programları konusunda uzmanlaşmıştır.",
        },
      ],
    },
  },
};
