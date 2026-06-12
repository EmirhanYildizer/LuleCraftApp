/**
 * Merkezi görsel yönetimi.
 * Gerçek asset dosyaları eklendiğinde buradaki URI'leri
 * require('./assets/images/xxx.png') ile değiştirin.
 *
 * Yerel dosya yapısı (hazır olduğunda):
 *   assets/images/lule_stone_raw.png
 *   assets/images/lule_jewelry.png
 *   assets/images/lule_master.png
 *   assets/images/lule_workshop.png
 *   assets/images/lule_map.png
 *   assets/images/lule_carving.png
 *   assets/images/lule_pipe.png
 *   assets/images/lule_beads.png
 *   assets/images/lule_figure.png
 *   assets/images/eskisehir.png
 */

// Tüm URL'ler orijinal Figma Make projesinden alınmış,
// lületaşı / zanaat / atölye temalı Unsplash fotoğrafları.
export const AppAssets = {
  /** Oymacılık yapan usta elleri */
  luleStonRaw:
    "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//NeAlinir/20170202110112304_1.jpg?format=jpg&quality=50",

  /** İşlenmiş eser / tamamlanmış ürün */
  luleJewelry:
    "https://images.unsplash.com/photo-1655376407042-b35a5c396cae?w=800&q=80",

  /** Usta portresi — zanaatkâr */
  luleMaster:
    "https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=800&q=80",

  /** Atölye içi ortam */
  luleWorkshop:
    "https://arkeonews.com/wp-content/uploads/2021/07/Luletasi-min.jpg",

  /** Eskişehir / kültür sokakları */
  luleMap:
    "https://www.gezire.com/wp-content/uploads/2024/12/Eskisehir-Luletasi-Muzesi-Giris-Ucreti.jpg",

  /** Elde kesme / oymacılık işlemi */
  luleCarving:
    "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//NeAlinir/20170202110112304_1.jpg?format=jpg&quality=50",

  /** Siyah pipo — geleneksel zanaat */
  lulePipe:
    "https://gazeterizecom.teimg.com/crop/1280x720/gazeterize-com/uploads/2023/05/agency/iha/luletasi-sanati-icin-okullarda-bolum-acilmasi-onerisi.jpg",

  /** Ahşap / taş boncuk — tesbih */
  luleBeads:
    "https://images.unsplash.com/photo-1655376407042-b35a5c396cae?w=800&q=80",

  /** Figür / heykel odası */
  luleFigure:
    "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=800&q=80",

  /** Eskişehir Odunpazarı sokakları */
  eskisehir:
    "https://www.gezire.com/wp-content/uploads/2024/12/Eskisehir-Luletasi-Muzesi-Giris-Ucreti.jpg",

  /** Usta portresi 1 (zanaatkâr) */
  masterPortrait1:
    "https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=400&q=80",

  /** Usta portresi 2 (kadın zanaatkâr) */
  masterPortrait2:
    "https://images.unsplash.com/photo-1690286805745-a06d18f66166?w=400&q=80",

  /** Usta portresi 3 (el — taş tutma) */
  masterPortrait3:
    "https://images.unsplash.com/photo-1626252685663-64c6bf60afb1?w=400&q=80",

  /** Açılış (splash) ve onboarding slayt 1 arka planı */
  splashHero:
    "https://milliiradecom.teimg.com/milliirade-com/uploads/2025/01/luletasi-sanati-icin-okullarda-bolum-acilmasi-onerisi.webp",

  /** Keşfet ekranı hero arka planı */
  discoverHero:
    "https://eskisehirekspresnet.teimg.com/crop/1280x720/eskisehirekspres-net/images/haberler/2019/07/luletasi-festivali-basliyor_6ea2d.jpg",

  /* ── Sanal Oymacılık — taş seçim kartları ── */

  /** Ham lületaşı bloğu */
  vcStoneRaw:
    "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=800&q=80",

  /** İşlenmiş / parlak yüzey */
  vcStoneSmooth:
    "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=800&q=80",

  /** Büyük blok — detay çalışması */
  vcStoneLarge:
    "https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=800&q=80",

  /** Ayşe Koç kapak görseli */
  ayseKocCover:
    "https://www.aa.com.tr/uploads/userFiles/9c85db40-ef31-40fe-a989-05c7e506d5d0/01_2024%2F09012024%2Fseramik2_.jpg",

  /** İbrahim Yıldız kapak görseli */
  ibrahimYildizCover:
    "https://eskisehirekspresnet.teimg.com/eskisehirekspres-net/uploads/2023/03/eskisehirde-senelere-meydan-okuyan-luletasi-ustasi-eskisehirekspres-24032023-14.png",

  /** Genel atölye kapak */
  workshopGeneral:
    "https://arkeonews.com/wp-content/uploads/2021/07/Luletasi-min.jpg",

  /** Profil avatarı placeholder — zanaat temalı siluet */
  profileAvatar:
    "https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=200&q=80",

  /* ── Sanal Oymacılık — şekil kartları ── */

  /** Lületaşı pipo — şekil: Pipo */
  shapePipe:
    "https://www.akinluletasi.com/storage/images/038528169abc482f8cdcf98d793345a2.jpg",

  /** Kolye / taş takı — şekil: Kolye */
  shapeNecklace:
    "https://s3.cloud.ngn.com.tr/kitantik/images/2020-12-06/1br9qfykid2vpim1h6q.jpg",

  /** El yapımı figür / heykel — şekil: Figür */
  shapeFigure:
    "https://www.luletasidogaltas.com/uploads/b58b2a22ebe2.jpg",

  /** Geleneksel tesbih boncukları — şekil: Tesbih */
  shapeBeads:
    "https://kulturveyasam.com/wp-content/uploads/2018/01/l%C3%BCle-04.jpg",

  /** Taş yüzük / mücevher — şekil: Yüzük */
  shapeRing:
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80",
} as const;

/**
 * Yerel (require) asset'ler — URI değil doğrudan module ID döner.
 * expo-image/Image'da `source={LocalAssets.carvingHero}` şeklinde kullanın,
 * `source={{ uri: ... }}` değil.
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
export const LocalAssets = {
  /** Elde lületaşı oymacılığı — hero görsel */
  carvingHero: require("../assets/lule_carving_hero.jpg") as number,
} as const;
