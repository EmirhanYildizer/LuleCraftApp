import { AppAssets } from "../AppAssets";
import type { DiscoverContentModel, StoryModel } from "../models";

export const discoverContents: DiscoverContentModel[] = [
  {
    id: "what-is-lule",
    title: "Lületaşı Nedir?",
    subtitle: "Dünyanın en yumuşak minerallerinden biri",
    body: "Lületaşı (sepiyolit), hidrat magnezyum silikattan oluşan beyaz, kremsi renkli bir mineraldir. Hafifliği, ısıya dayanıklılığı ve kolay işlenebilirliğiyle pipo, takı, heykel ve süs eşyası yapımında yüzyıllardır kullanılmaktadır. Dünya rezervlerinin %80'inden fazlası Eskişehir'in Sarısu bölgesinde bulunur.",
    image: AppAssets.luleStonRaw,
    type: "article",
  },
  {
    id: "history",
    title: "Lületaşının Tarihi",
    subtitle: "3.000 yıllık bir zanaat geleneği",
    body: "Anadolu'da ilk lületaşı kullanımının M.Ö. 1000'li yıllara dayandığı tahmin edilmektedir. 18. yüzyılda Osmanlı İmparatorluğu'ndan Avrupa saraylarına uzanan bir hattın en prestijli pipo malzemesi haline geldi. Bugün UNESCO tarafından somut olmayan miras listesine alınan bu zanaat, Eskişehirli ustalar tarafından yaşatılmaktadır.",
    image: AppAssets.lulePipe,
    type: "article",
  },
  {
    id: "eskisehir",
    title: "Eskişehir ve Lületaşı",
    subtitle: "Dünyanın lületaşı başkenti",
    body: "Eskişehir, lületaşı madenciliği ve işlemeciliğinin dünya merkezi konumundadır. 19. yüzyılda zirveye ulaşan sektörde şehirdeki atölye sayısı 1000'i aşmıştı. Bugün Odunpazarı semtindeki tarihi çarşı, yaşayan ustalar ve müzeler şehri bir kültür mirasına dönüştürmektedir.",
    image: AppAssets.eskisehir,
    type: "article",
  },
];

export const storiesData: StoryModel[] = [
  {
    id: "sons-of-earth",
    title: "Toprağın Oğulları",
    category: "Usta Hikayeleri",
    readTime: "8 dk",
    image: AppAssets.luleCarving,
    author: "Mehmet Çelik",
    excerpt:
      "Yeraltındaki beyaz altın, usta ellerin dokunuşuyla yaşama kavuşur.",
    content:
      "Eskişehir'in 30 metre derinliğindeki tabakalarda saklanan lületaşı, jeolojik bir mucizedir. Milyonlarca yıl önce derin denizlerin dibinde oluşan bu yumuşak mineral, bugün usta ellerde sanata dönüşmektedir.",
    pullQuote:
      '"Her eser, ustanın ellerindeki zamanın izlerini taşır."',
  },
  {
    id: "apprentice-path",
    title: "Çıraklık Yolu",
    category: "Çırak Hikayeleri",
    readTime: "6 dk",
    image: AppAssets.luleWorkshop,
    author: "İbrahim Yıldız",
    excerpt:
      "Sabah ezanıyla uyanmak, ustanın ilk sözünü beklemek...",
    content:
      "Bir çırağın günü hem umutle hem hüsranla doludur. Ama taşın yavaş yavaş şekil aldığını ilk gördüğün an, her şey anlamlı hale gelir.",
    pullQuote:
      '"Ustam bana defalarca söyledi: Taş seni dinler, önce sen onu dinle."',
  },
  {
    id: "odunpazari-heritage",
    title: "Odunpazarı'nın Ruhu",
    category: "Kültürel Miras",
    readTime: "10 dk",
    image: AppAssets.eskisehir,
    author: "Kültür Editörü",
    excerpt:
      "Her sokak köşesinde farklı bir hikaye, her taşta yüzyıllık bir nefes.",
    content:
      "Osmanlı dönemi ahşap konakların arasında dolaşırken zamanın durduğunu hissedersiniz. Bu sokaklarda lületaşı sadece bir mineral değil, yaşayan bir kimliğin simgesidir.",
    pullQuote:
      '"Bu sokaklarda her taş bir söz söyler, her duvar bir şarkı söyler."',
  },
];
