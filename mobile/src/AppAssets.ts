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
    "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=800&q=80",

  /** İşlenmiş eser / tamamlanmış ürün */
  luleJewelry:
    "https://images.unsplash.com/photo-1655376407042-b35a5c396cae?w=800&q=80",

  /** Usta portresi — zanaatkâr */
  luleMaster:
    "https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=800&q=80",

  /** Atölye içi ortam */
  luleWorkshop:
    "https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=800&q=80",

  /** Eskişehir / kültür sokakları */
  luleMap:
    "https://images.unsplash.com/photo-1626252685663-64c6bf60afb1?w=800&q=80",

  /** Elde kesme / oymacılık işlemi */
  luleCarving:
    "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=800&q=80",

  /** Siyah pipo — geleneksel zanaat */
  lulePipe:
    "https://images.unsplash.com/photo-1511306162219-1c5a469ab86c?w=800&q=80",

  /** Ahşap / taş boncuk — tesbih */
  luleBeads:
    "https://images.unsplash.com/photo-1655376407042-b35a5c396cae?w=800&q=80",

  /** Figür / heykel odası */
  luleFigure:
    "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=800&q=80",

  /** Eskişehir Odunpazarı sokakları */
  eskisehir:
    "https://images.unsplash.com/photo-1626252685663-64c6bf60afb1?w=800&q=80",

  /** Usta portresi 1 (zanaatkâr) */
  masterPortrait1:
    "https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=400&q=80",

  /** Usta portresi 2 (kadın zanaatkâr) */
  masterPortrait2:
    "https://images.unsplash.com/photo-1690286805745-a06d18f66166?w=400&q=80",

  /** Usta portresi 3 (el — taş tutma) */
  masterPortrait3:
    "https://images.unsplash.com/photo-1626252685663-64c6bf60afb1?w=400&q=80",

  /** Genel atölye kapak */
  workshopGeneral:
    "https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=800&q=80",

  /** Profil avatarı placeholder — zanaat temalı siluet */
  profileAvatar:
    "https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=200&q=80",

  /* ── Sanal Oymacılık — şekil kartları ── */

  /** Lületaşı pipo — şekil: Pipo */
  shapePipe:
    "https://images.unsplash.com/photo-1511306162219-1c5a469ab86c?w=400&q=80",

  /** Kolye / taş takı — şekil: Kolye */
  shapeNecklace:
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80",

  /** El yapımı figür / heykel — şekil: Figür */
  shapeFigure:
    "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=400&q=80",

  /** Geleneksel tesbih boncukları — şekil: Tesbih */
  shapeBeads:
    "https://images.unsplash.com/photo-1614682740729-38ccfdb6d3e6?w=400&q=80",

  /** Taş yüzük / mücevher — şekil: Yüzük */
  shapeRing:
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
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
