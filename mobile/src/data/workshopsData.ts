import { AppAssets } from "../AppAssets";
import type { WorkshopModel } from "../models";

export const workshopsData: WorkshopModel[] = [
  {
    id: "jewelry-making",
    title: "Lületaşından Takı Yapımı",
    description:
      "Ham lületaşını kesip şekillendirerek kendi kolye veya küpenizi tasarlayın. Gümüş bağlantılarla tamamlanmış özgün bir takı eseriniz olsun.",
    category: "Takı",
    difficulty: "Başlangıç",
    duration: "3 Saat",
    image: AppAssets.luleJewelry,
    includes: ["Ham lületaşı blok", "Kesme setleri", "Gümüş bağlantı", "Sertifika"],
    steps: [
      "Taş seçimi ve tanıtım",
      "Şekil belirleme ve kesim",
      "Yüzey zımpalama",
      "Parlatma",
      "Metal montajı",
    ],
  },
  {
    id: "pipe-making",
    title: "Lületaşı Pipo Yapımı",
    description:
      "Osmanlı döneminden beri süregelen geleneksel pipo yapımını bizzat deneyimleyin. Usta rehberliğinde ham taşı işleyerek kendinize özgü bir pipo ortaya çıkarın.",
    category: "Pipo",
    difficulty: "Orta",
    duration: "6 Saat",
    image: AppAssets.lulePipe,
    includes: ["Premium lületaşı", "Pipo kanalı delme seti", "Sap malzeme", "Öğle yemeği"],
    steps: [
      "Pipo anatomisini öğren",
      "Kase şekillendirme",
      "Kanalı açma",
      "İnce detay işleme",
      "Cilalamak ve bitirme",
    ],
  },
  {
    id: "beads-making",
    title: "Tesbih Yapımı",
    description:
      "Her bir boncuğu kendiniz tornalayarak benzersiz bir lületaşı tesbihi yapın. Geleneksel boncuk yapım tekniklerini öğrenin.",
    category: "Tesbih",
    difficulty: "Başlangıç",
    duration: "4 Saat",
    image: AppAssets.luleBeads,
    includes: ["Boncuk seti (33 adet ham taş)", "Usta tornaları", "İpek tel", "Tesbih kutsu"],
    steps: [
      "Taş ölçülendirme",
      "Torna ile şekil verme",
      "Delik açma",
      "Yüzey parlatma",
      "Dizme ve düğüm",
    ],
  },
  {
    id: "figure-making",
    title: "Figür ve Heykel Yapımı",
    description:
      "Lületaşının plastik yapısından yararlanarak figüratif heykelcilik yapın. Hayvan, insan veya soyut formlara hayat verin.",
    category: "Heykel",
    difficulty: "İleri",
    duration: "8 Saat",
    image: AppAssets.luleFigure,
    includes: ["Büyük lületaşı blok", "Özel kesici takım", "Usta koçluğu", "Öğle + kahvaltı"],
    steps: [
      "Form çizimi ve şablonlama",
      "Kaba kesim",
      "Detay oymacılığı",
      "Yüzey bitirme",
      "Balmumu emdirme",
    ],
  },
  {
    id: "polishing",
    title: "Taş Temizleme ve Parlatma",
    description:
      "İşlenmiş lületaşını nasıl temizleyeceğinizi, parlatacağınızı ve muhafaza edeceğinizi öğrenin. Eski eserleri restore edin.",
    category: "Teknik",
    difficulty: "Başlangıç",
    duration: "2 Saat",
    image: AppAssets.luleStonRaw,
    includes: ["Zımpara seti", "Parlatma macunu", "Koruyucu balmumu"],
    steps: [
      "Kaba temizlik",
      "Kademeli zımpalama",
      "Cilalama macunu uygulama",
      "Balmumu koruma katmanı",
    ],
  },
  {
    id: "pattern-work",
    title: "Desen İşleme Teknikleri",
    description:
      "Geleneksel motifler ve modern desenlerin lületaşına işlenmesini öğrenin. Nokta, çizgi ve alan desenleri.",
    category: "Teknik",
    difficulty: "Orta",
    duration: "5 Saat",
    image: AppAssets.luleCarving,
    includes: ["İnce uçlu kalemler", "Desen şablonları", "Pratik taş parçaları"],
    steps: [
      "Desen aktarma yöntemleri",
      "Nokta desen",
      "Çizgisel motifler",
      "Osmanlı arabesk",
      "Serbest form",
    ],
  },
  {
    id: "beginner-carving",
    title: "Başlangıç Seviyesi Oymacılık",
    description:
      "Lületaşına hiç dokunmamışsanız bu atölye tam size göre. Temel araçların kullanımından basit şekillere kadar her şeyi öğrenin.",
    category: "Temel",
    difficulty: "Başlangıç",
    duration: "3 Saat",
    image: AppAssets.workshopGeneral,
    includes: ["Starter taş seti", "Temel alet takımı", "Apron", "Çay ve kahve"],
    steps: [
      "Lületaşı tanıtımı",
      "Alet güvenliği",
      "İlk kesim denemesi",
      "Basit şekil yapımı",
      "Yüzey temizleme",
    ],
  },
];
