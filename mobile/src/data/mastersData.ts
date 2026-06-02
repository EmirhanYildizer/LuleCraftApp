import { AppAssets } from "../AppAssets";
import type { MasterModel } from "../models";

export const mastersData: MasterModel[] = [
  {
    id: "mehmet-usta",
    name: "Mehmet Çelik",
    title: "Baş Usta",
    specialty: ["Pipo", "Figür", "Heykel"],
    experience: 42,
    location: "Odunpazarı, Eskişehir",
    bio: "1982'den bu yana lületaşı sanatını yaşatan Mehmet Usta, dört nesillik bir zanaat ailesinin temsilcisidir.",
    story:
      "Dedesinin atölyesinde küçük bir çocukken lületaşı tozu koklayarak büyüyen Mehmet Çelik, 16 yaşında resmi çıraklığa başladı. Bugün Eskişehir'in en saygın ustalarından biri olarak binlerce esere imza atmıştır. Uluslararası sergilerde Türk lületaşı sanatını temsil eden Mehmet Usta, aynı zamanda ustayı yaşatmak için genç çıraklara kapısını açmaktadır.",
    techniques: [
      "Geleneksel el oyması",
      "İnce figüratif çalışma",
      "Yüzey parlatma",
      "Balmumu emdirme",
    ],
    image: AppAssets.masterPortrait1,
    coverImage: AppAssets.luleWorkshop,
    gallery: [
      AppAssets.luleCarving,
      AppAssets.luleFigure,
      AppAssets.lulePipe,
    ],
    workshopDescription:
      "Mehmet Usta'nın atölyesinde sabah çayıyla başlayan bir günde geleneksel oymacılık tekniklerini öğrenirsiniz. Ham taşın seçiminden son parlatmaya kadar her adımı bizzat deneyimlersiniz.",
    works: [
      {
        id: "w1",
        title: "Sultan Sarayı Figürü",
        category: "Heykel",
        image: AppAssets.luleFigure,
        description: "Osmanlı saray yaşamından ilham alınan detaylı figür.",
      },
      {
        id: "w2",
        title: "Geleneksel Pipo",
        category: "Pipo",
        image: AppAssets.lulePipe,
        description: "El yapımı, özel desen işlenmiş klasik lületaşı pipo.",
      },
    ],
  },
  {
    id: "ayse-usta",
    name: "Ayşe Koç",
    title: "Takı Ustası",
    specialty: ["Takı", "Kolye", "Yüzük"],
    experience: 18,
    location: "Odunpazarı, Eskişehir",
    bio: "Kadın zanaatkârlar kolektifinin kurucusu Ayşe Koç, lületaşını kadın bakışıyla yeniden yorumlamaktadır.",
    story:
      "2005 yılında fildişine benzer görünümü ve işlenme kolaylığıyla büyülendiği lületaşıyla tanışan Ayşe, takı tasarımını geleneksel oymacılıkla harmanlayan bir stil geliştirdi. Koleksiyonları hem ulusal hem de uluslararası tasarım fuarlarında büyük ilgi görüyor.",
    techniques: [
      "Mikro oyma",
      "Takı montajı",
      "Altın/gümüş kaplama",
      "Yüzey boyama",
    ],
    image: AppAssets.masterPortrait2,
    coverImage: AppAssets.luleJewelry,
    gallery: [
      AppAssets.luleJewelry,
      AppAssets.luleStonRaw,
      AppAssets.luleCarving,
    ],
    workshopDescription:
      "Ayşe Usta eşliğinde lületaşından kolye veya yüzük yapar, işlenmiş taşı gümüş bağlantı elemanlarıyla tamamlarsınız.",
    works: [
      {
        id: "w3",
        title: "Fildişi Kolye Serisi",
        category: "Takı",
        image: AppAssets.luleJewelry,
        description: "Saf lületaşından el oymalı kolye koleksiyonu.",
      },
    ],
  },
  {
    id: "ibrahim-usta",
    name: "İbrahim Yıldız",
    title: "Tesbih Ustası",
    specialty: ["Tesbih", "Boncuk", "Süs Eşyası"],
    experience: 27,
    location: "Odunpazarı, Eskişehir",
    bio: "Geleneksel tesbih ustaları geleneğini sürdüren İbrahim Yıldız, her bir boncuğu elle işlemektedir.",
    story:
      "İbrahim Yıldız için tesbih yapmak bir meditasyon biçimidir. Her boncuğun şekli, yüzeyi ve deliğinin açılış açısı özenle hesaplanır. 27 yıllık deneyimiyle Türkiye'nin en tanınan tesbih ustalarından biri haline gelmiştir.",
    techniques: [
      "Boncuk tornası",
      "Delik açma",
      "Baklava desen",
      "El parlatma",
    ],
    image: AppAssets.masterPortrait3,
    coverImage: AppAssets.luleBeads,
    gallery: [AppAssets.luleBeads, AppAssets.luleStonRaw, AppAssets.eskisehir],
    workshopDescription:
      "İbrahim Usta'nın atölyesinde tesbih yapımının sırlarını öğrenirsiniz. Kendi boncuklarınızı şekillendirip bir araya getirerek kişisel tesbihinizi alırsınız.",
    works: [
      {
        id: "w4",
        title: "33'lük Tesbih",
        category: "Tesbih",
        image: AppAssets.luleBeads,
        description: "Her biri elle tornalanan, eşit boyutlu 33 boncuklu tesbih.",
      },
    ],
  },
];
