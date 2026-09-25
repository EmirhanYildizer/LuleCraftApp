# LÜLETAŞI

> Eskişehir'in dünyaca tanınan lületaşı kültürünü; hikâyeler, ustalar, atölyeler, keşif noktaları, harita ve artırılmış gerçeklik deneyimleri üzerinden dijital olarak keşfetmeyi amaçlayan mobil uygulama.

[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey)](https://reactnative.dev/)

LÜLETAŞI, kültürel mirasın yalnızca metin ve görsellerle anlatılması yerine, kullanıcıyı keşfetmeye teşvik eden modern bir mobil deneyim olarak tasarlanmıştır. Proje aynı zamanda Figma Make ile oluşturulan web tabanlı tasarım/prototip ile gerçek React Native + Expo mobil uygulamasını aynı repository içerisinde barındırır.

---

## İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Temel Özellikler](#temel-özellikler)
- [Teknoloji Altyapısı](#teknoloji-altyapısı)
- [Proje Yapısı](#proje-yapısı)
- [Mobil Uygulama Mimarisi](#mobil-uygulama-mimarisi)
- [Kurulum](#kurulum)
- [Çalıştırma](#çalıştırma)
- [Geliştirme](#geliştirme)
- [Ekranlar](#ekranlar)
- [Tasarım Sistemi](#tasarım-sistemi)
- [Veri Yapısı](#veri-yapısı)
- [Web Prototipi](#web-prototipi)
- [Figma](#figma)
- [Build ve Yayına Alma](#build-ve-yayına-alma)
- [Bilinen Sınırlamalar](#bilinen-sınırlamalar)
- [Gelecek Geliştirmeler](#gelecek-geliştirmeler)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans ve Atıflar](#lisans-ve-atıflar)

---

## Proje Hakkında

LÜLETAŞI, Eskişehir'in önemli kültürel değerlerinden biri olan lületaşını dijital ortamda tanıtmak ve kullanıcıların bu mirası interaktif şekilde keşfetmesini sağlamak için geliştirilen bir kültürel miras keşif uygulamasıdır.

Uygulamanın temel yaklaşımı:

- Lületaşının tarihini ve kültürel önemini anlatmak
- Lületaşı ustalarını ve üretim kültürünü görünür hâle getirmek
- Atölye ve keşif noktalarını kullanıcıya sunmak
- Harita üzerinden fiziksel keşif deneyimi oluşturmak
- İçerikleri detay sayfaları üzerinden zenginleştirmek
- Kullanıcının ilgisini çeken içerikleri favorilerine eklemesini sağlamak
- Bildirimler ve kişiselleştirilmiş içerik alanları için mobil altyapı sunmak
- Artırılmış gerçeklik (AR) fikrini kültürel miras deneyiminin bir parçası hâline getirmek

Proje iki farklı yüzü birlikte içerir:

1. **Web tabanlı tasarım/prototip:** Figma Make çıktılarının Vite + React tabanında çalıştırılabilen versiyonu.
2. **Gerçek mobil uygulama:** React Native ve Expo ile iOS/Android için geliştirilen native mobil deneyim.

---

## Temel Özellikler

### 🏛️ Kültürel Miras Keşfi

Uygulama, lületaşı kültürünü farklı içerik türlerine bölerek keşfedilebilir hâle getirir. Kullanıcı; hikâyeler, ustalar, atölyeler ve farklı lokasyonlar üzerinden içeriklere ulaşabilir.

### 🔎 Keşfet

Keşfet ekranı üzerinden kültürel içeriklerin listelenmesi ve içeriklerin detay sayfalarına geçiş yapılması hedeflenir.

Öne çıkan içerik türleri:

- Kültürel hikâyeler
- Lületaşı ile ilgili içerikler
- Ustalar
- Atölyeler
- Keşif noktaları
- Lokasyon bazlı içerikler

### 👨‍🎨 Ustalar

Lületaşı işçiliğinin önemli aktörlerini tanıtmak için ayrı bir usta deneyimi bulunur.

Kullanıcılar:

- Usta listesini görüntüleyebilir
- Usta detaylarına gidebilir
- Ustaların çalışmalarını ve bilgilerini inceleyebilir

### 🗺️ İnteraktif Harita

Harita ekranı, kültürel miras noktalarının konum bazlı keşfini desteklemek amacıyla hazırlanmıştır.

Harita altyapısında `react-native-maps` kullanılmaktadır.

Harita deneyimi aşağıdaki kullanım senaryolarını destekleyecek şekilde tasarlanmıştır:

- Keşif noktalarını harita üzerinde görüntüleme
- Lokasyon seçme
- Lokasyon detayına geçme
- Kullanıcının fiziksel keşfini dijital içerikle destekleme

### 📍 Lokasyon Detayları

Harita veya keşif akışından seçilen lokasyonlar için detay ekranları bulunur. Böylece fiziksel bir nokta yalnızca koordinat olarak değil, içerikle ilişkili bir kültürel miras noktası olarak sunulabilir.

### ⭐ Favoriler

Kullanıcının daha sonra tekrar görmek istediği içerikleri saklayabilmesi için favoriler ekranı bulunur.

### 🔔 Bildirimler

Mobil uygulamada bildirimler için ayrı bir ekran ve akış bulunmaktadır. Bu yapı ileride yeni içerikler, etkinlikler, keşif önerileri ve kullanıcıya özel hatırlatmalarla genişletilebilir.

### 🥽 Artırılmış Gerçeklik

`ARScreen` ile kültürel miras deneyiminin artırılmış gerçeklik tarafına genişletilebilmesi için uygulama içerisinde ayrı bir deneyim alanı oluşturulmuştur.

Bu alan, projenin ilerleyen sürümlerinde fiziksel çevre ile dijital kültürel içeriğin birleştirilmesi için kullanılabilir.

### 🎨 Premium Kültürel Miras Arayüzü

Uygulama, klasik bir bilgi uygulaması görünümünden ziyade premium ve editoryal bir kültürel miras deneyimi hedefler.

Tasarım yaklaşımında:

- Serif + sans-serif tipografi kombinasyonu
- Büyük görsel alanları
- Kart tabanlı içerik sunumu
- Yumuşak spacing değerleri
- Kültürel miras hissini güçlendiren renk paleti
- Modern native mobil navigasyon

kullanılmaktadır.

---

## Teknoloji Altyapısı

### Mobil

| Teknoloji | Kullanım |
|---|---|
| React Native | Cross-platform mobil uygulama |
| Expo SDK 54 | Mobil geliştirme ve build altyapısı |
| TypeScript | Tip güvenliği ve geliştirici deneyimi |
| React 19 | UI katmanı |
| React Native Reanimated | Animasyon ve etkileşimler |
| React Native Gesture Handler | Gesture tabanlı etkileşimler |
| React Native Maps | Harita deneyimi |
| React Native SVG | SVG tabanlı grafikler ve ikonlar |
| Expo Image | Görsel yükleme/rendering |
| Expo Linear Gradient | Gradient tabanlı görsel öğeler |
| Expo Font | Özel font yükleme |
| AsyncStorage | Yerel veri saklama |
| Lucide React Native | İkon sistemi |

Mobil bağımlılıkların güncel repository sürümünde Expo SDK 54, React Native 0.81.5, React 19.1 ve TypeScript 5.9 tabanında yapılandırıldığı görülmektedir. fileciteturn5file0L2-L2

### Web / Prototip

| Teknoloji | Kullanım |
|---|---|
| React | Web arayüzü |
| Vite | Development server ve production build |
| TypeScript | Tip güvenliği |
| Tailwind CSS | Stil altyapısı |
| Radix UI | Erişilebilir UI primitive'leri |
| Material UI | UI bileşenleri |
| React Router | Routing |
| Motion | Animasyonlar |
| Recharts | Veri görselleştirme |
| React DnD | Drag & drop etkileşimleri |
| date-fns | Tarih işlemleri |

Web tarafında Vite tabanlı development/build komutları ve geniş bir React UI ekosistemi kullanılmaktadır. fileciteturn2file0L2-L2

---

## Proje Yapısı

Repository, web prototipi ile gerçek mobil uygulamayı aynı proje içerisinde ayırır:

```text
LuleCraftApp/
├── mobile/                  # React Native + Expo mobil uygulaması
│   ├── src/
│   │   ├── components/      # Yeniden kullanılabilir native bileşenler
│   │   ├── data/            # Mock/static içerikler
│   │   ├── models/          # TypeScript veri modelleri
│   │   ├── navigation/      # Navigasyon yapısı ve tipleri
│   │   ├── screens/         # Uygulama ekranları
│   │   ├── AppAssets.ts     # Mobil asset tanımları
│   │   ├── theme.ts         # Tasarım token'ları
│   │   └── typography.ts    # Tipografi tanımları
│   ├── App.tsx              # Mobil uygulama giriş noktası
│   ├── package.json         # Mobil bağımlılıklar ve scriptler
│   └── ...
│
├── src/                     # Web/Figma Make prototipi
├── guidelines/              # Tasarım/geliştirme yönergeleri
├── images.jpg               # Repository görseli
├── default_shadcn_theme.css # Web tema değişkenleri
├── app.json                 # Expo/Figma Make ile ilişkili yapılandırma
├── eas.json                 # Expo Application Services yapılandırması
├── package.json             # Web bağımlılıkları
├── pnpm-workspace.yaml      # pnpm workspace tanımı
├── vite.config.ts           # Vite yapılandırması
├── postcss.config.mjs       # PostCSS yapılandırması
└── README.md
```

Repository'nin mevcut yapısında `mobile`, `src`, `guidelines`, `app.json`, `eas.json`, `package.json` ve Vite/PostCSS yapılandırmaları ayrı olarak bulunur. fileciteturn1file0L2-L2

---

## Mobil Uygulama Mimarisi

Mobil uygulama, ekranları ve ortak altyapıyı birbirinden ayıran sade bir katmanlama yaklaşımı kullanır.

### `src/screens/`

Uygulamanın kullanıcı tarafından doğrudan görülen ekranları burada bulunur.

Mevcut ekran yapısında örnek olarak:

- `OnboardingScreen.tsx`
- `HomeScreen.tsx`
- `DiscoverScreen.tsx`
- `DiscoverDetailScreen.tsx`
- `MastersScreen.tsx`
- `MasterDetailScreen.tsx`
- `ArtisanScreen.tsx`
- `MapScreen.tsx`
- `LocationDetailScreen.tsx`
- `FavoritesScreen.tsx`
- `NotificationsScreen.tsx`
- `ProfileScreen.tsx`
- `ExperienceScreen.tsx`
- `ARScreen.tsx`

gibi ekranlar bulunmaktadır. fileciteturn7file0L2-L2

### `src/components/`

Birden fazla ekranda kullanılabilecek ortak native UI bileşenlerinin tutulduğu katmandır.

Amaç:

- Kod tekrarını azaltmak
- Tasarım sistemini korumak
- Ortak UI davranışlarını tek noktadan yönetmek
- Ekranların daha okunabilir olmasını sağlamak

### `src/data/`

Uygulamanın prototip/mock içeriklerinin tutulduğu katmandır.

Örneğin:

- Hikâyeler
- Ustalar
- Lokasyonlar
- Atölyeler
- Keşif içerikleri

gibi içerikler burada modellenebilir.

### `src/models/`

Uygulama içerisinde kullanılan veri modellerinin TypeScript tanımlarını barındırır.

Bu katman, ileride gerçek bir backend/API entegrasyonu yapıldığında veri sözleşmelerinin daha kontrollü yönetilmesini kolaylaştırır.

### `src/navigation/`

Ekranlar arasındaki navigation akışlarının ve ilgili tiplerin tutulduğu katmandır.

### `src/theme.ts`

Renk, spacing ve diğer tasarım token'larının merkezi olarak yönetilmesini sağlar.

### `src/typography.ts`

Uygulamanın tipografik sistemini merkezi olarak tanımlar.

Mobil tarafta Cormorant Garamond ve Inter font paketleri kullanılmaktadır. fileciteturn5file0L2-L2

---

## Kurulum

### Gereksinimler

Önerilen geliştirme ortamı:

- Node.js
- npm 10.x veya uyumlu güncel npm sürümü
- Expo CLI / Expo tooling
- Android Studio ve Android SDK — Android native çalıştırma için
- Xcode — iOS native çalıştırma için macOS üzerinde
- Expo Go — fiziksel cihaz üzerinden hızlı test için

Mobil package tanımında package manager olarak `npm@10.8.2` belirtilmiştir. fileciteturn5file0L2-L2

---

## Çalıştırma

### 1. Repository'yi klonla

```bash
git clone https://github.com/EmirhanYildizer/LuleCraftApp.git
cd LuleCraftApp
```

### 2. Mobil uygulamayı kur

```bash
cd mobile
npm install
```

### 3. Expo development server'ı başlat

```bash
npm start
```

Terminalde açılan Expo arayüzündeki QR kodu Expo Go ile tarayarak uygulamayı fiziksel cihazda çalıştırabilirsin.

Mobil package içerisinde aşağıdaki scriptler tanımlıdır: `start`, `android`, `ios` ve `web`. fileciteturn5file0L2-L2

### Android

```bash
npm run android
```

Bu komut Expo'nun Android native çalışma akışını başlatır.

### iOS

```bash
npm run ios
```

> iOS native geliştirme/build işlemleri için macOS ve Xcode gerekir.

### Web

```bash
npm run web
```

Bu komut Expo'nun web çalışma modunu başlatır.

---

## Web Prototipini Çalıştırma

Repository'nin kök dizininde web/Figma Make prototipi bulunur.

```bash
npm install
npm run dev
```

Ardından Vite'ın verdiği local URL üzerinden web prototipini açabilirsin.

Production build almak için:

```bash
npm run build
```

Kök package tanımında `dev` ve `build` scriptleri Vite üzerinden çalışmaktadır. fileciteturn2file0L2-L2

---

## Ekranlar

### Onboarding

Kullanıcıya uygulamanın amacını ve temel deneyimini tanıtan ilk kullanım akışıdır.

### Home

Ana keşif deneyiminin başlangıç noktasıdır. Öne çıkan kültürel içeriklerin ve uygulama içindeki önemli alanların kullanıcıya sunulması için kullanılır.

### Discover

Kültürel miras içeriklerinin keşfedildiği ana içerik ekranıdır.

### Discover Detail

Keşfedilen bir içeriğin daha kapsamlı şekilde incelendiği detay ekranıdır.

### Masters

Lületaşı ustalarının listelendiği ekran.

### Master Detail

Seçilen ustanın detaylı bilgilerinin gösterildiği ekran.

### Artisan

Lületaşı işçiliği/ustalık deneyiminin ayrı bir içerik alanı olarak sunulduğu ekran.

### Map

Kültürel miras noktalarının konum tabanlı olarak keşfedildiği harita ekranı.

### Location Detail

Harita üzerinden seçilen bir lokasyonun detaylarının gösterildiği ekran.

### Favorites

Kullanıcının kaydettiği içeriklere tekrar erişmesini sağlayan alan.

### Notifications

Bildirimlerin listelendiği mobil ekran.

### Profile

Kullanıcı profili ve kişisel uygulama alanları için ayrılmış ekran.

### Experience

Kullanıcıya daha interaktif bir kültürel miras deneyimi sunmak için ayrılmış deneyim alanı.

### AR

Artırılmış gerçeklik tabanlı deneyimler için ayrılmış ekran.

---

## Tasarım Sistemi

LÜLETAŞI'nın görsel dili, kültürel miras ile modern mobil uygulama tasarımını birleştirmeyi amaçlar.

### Tipografi

Mobil uygulamada iki temel font ailesi kullanılmaktadır:

- **Cormorant Garamond:** Başlıklar, kültürel/editorial vurgular ve karakterli metin alanları
- **Inter:** Gövde metinleri, butonlar, açıklamalar ve UI metinleri

Bu fontlar Expo Google Fonts paketleri üzerinden projeye dahil edilmiştir. fileciteturn5file0L2-L2

### Tema

Tema değerleri `mobile/src/theme.ts` içerisinde merkezi olarak tutulur. Tipografi değerleri ise `mobile/src/typography.ts` dosyasından yönetilir.

Bu yaklaşım, tasarım değişikliklerinin tüm uygulamaya daha kontrollü şekilde uygulanmasını sağlar.

---

## Veri Yapısı

Mevcut mobil sürümde içeriklerin önemli bir bölümü local/mock veri yaklaşımıyla modellenmiştir.

Bu yapı özellikle prototip aşamasında:

- API olmadan ekranların geliştirilmesini
- UI akışlarının hızlı test edilmesini
- İçerik modelinin erken aşamada oluşturulmasını
- Backend entegrasyonundan bağımsız ilerlenmesini

sağlar.

İleride gerçek bir backend eklendiğinde `models` katmanının API response modelleriyle eşleştirilmesi ve `data` katmanının repository/service yapısına dönüştürülmesi mümkündür.

---

## Web Prototipi ve Mobil Uygulama İlişkisi

Repository'nin önemli özelliklerinden biri tasarım/prototip ile gerçek mobil uygulamanın birlikte geliştirilmesidir.

```text
Figma / Figma Make
        │
        ▼
Web Prototype
React + Vite + Tailwind
        │
        │ Tasarım referansı
        ▼
React Native + Expo
Gerçek iOS / Android uygulaması
```

Mobil README'sinde de web prototipi ile mobil uygulama ayrımı açıkça belirtilmiştir: kök dizindeki prototip Vite + Tailwind tabanlıdır; `/mobile` ise gerçek iOS/Android uygulamasını içerir. fileciteturn4file0L2-L2

Bu yapı, tasarımın hızlı prototiplenmesini ve daha sonra native mobil deneyime aktarılmasını kolaylaştırır.

---

## Figma

Projenin tasarım referansı:

**Premium Cultural Heritage UI Design**

[Open the Figma Design](https://www.figma.com/design/YzNi1NdZZeSJtqsF4z5Bw0/Premium-Cultural-Heritage-UI-Design--Copy-)

Repository'deki mevcut README de projenin Figma tasarımından üretildiğini belirtmektedir. fileciteturn3file0L2-L2

---

## Build ve Yayına Alma

Proje Expo SDK 54 tabanında hazırlandığı için production build sürecinde Expo Application Services (EAS) kullanılabilir.

Repository içerisinde `eas.json` dosyası bulunmaktadır.

Genel production akışı:

```text
Development
    │
    ▼
Local Testing
    │
    ▼
Expo Go / Development Build
    │
    ▼
QA & Device Testing
    │
    ▼
EAS Build
    │
    ├── Android → AAB/APK
    │
    └── iOS → IPA
    │
    ▼
Store Submission
```

> Store'a gönderimden önce package identifier, app icon, splash screen, permissions, signing credentials, privacy policy ve production configuration değerleri ayrıca kontrol edilmelidir.

---

## Bilinen Sınırlamalar

Bu repository mevcut hâliyle ağırlıklı olarak UI/UX, prototipleme ve mobil uygulama deneyimine odaklanmaktadır.

Production'a geçiş öncesinde aşağıdaki alanların gerçek ürün ihtiyaçlarına göre tamamlanması gerekebilir:

- Gerçek backend/API entegrasyonu
- Production veri kaynağı
- Kullanıcı hesabı ve authentication
- Cloud tabanlı favoriler/senkronizasyon
- Gerçek bildirim altyapısı
- İçerik yönetim sistemi
- Harita marker/veri yönetiminin backend ile entegrasyonu
- AR deneyiminin cihaz bazında production hâle getirilmesi
- Analytics
- Crash/error monitoring
- Offline/cache stratejisi
- Production environment yönetimi
- App Store / Google Play metadata ve release süreçleri

Bu maddeler mevcut kodun çalışmadığı anlamına gelmez; projenin prototipten production ürününe taşınması sırasında ele alınabilecek geliştirme alanlarını ifade eder.

---

## Gelecek Geliştirmeler

LÜLETAŞI'nın daha kapsamlı bir kültürel miras platformuna dönüşmesi için düşünülebilecek geliştirmeler:

### İçerik

- Çoklu dil desteği
- Daha fazla hikâye ve arşiv içeriği
- Usta röportajları
- Video içerikler
- Sesli rehber
- Tarihsel zaman çizelgesi
- Lületaşı üretim sürecinin interaktif anlatımı

### Keşif

- Konum bazlı öneriler
- Rota oluşturma
- Kullanıcıya özel keşif rotaları
- Yakındaki kültürel noktalar
- Gezi tamamlanma sistemi
- Rozet ve koleksiyon sistemi

### AR

- Fiziksel eser tanıma
- 3D lületaşı modelleri
- AR bilgi kartları
- Tarihsel canlandırmalar
- Kamera üzerinden interaktif keşif

### Sosyal

- Keşiflerin paylaşılması
- Favori koleksiyonlarının paylaşılması
- Kullanıcı yorumları
- Etkinlikler
- Topluluk özellikleri

### Yönetim

- Admin panel
- İçerik CRUD işlemleri
- Usta/lokasyon yönetimi
- Harita noktası yönetimi
- Bildirim gönderimi
- İçerik yayınlama planlaması
- Analytics dashboard

---

## Geliştirme Prensipleri

Projeye katkı sağlarken aşağıdaki prensiplerin korunması önerilir:

1. **TypeScript kullanın.** Yeni kod mümkün olduğunca tip güvenli olmalıdır.
2. **Ortak UI'ı component'leştirin.** Aynı tasarım farklı ekranlarda tekrar ediyorsa ortak component oluşturun.
3. **Tema değerlerini merkezi tutun.** Renk, spacing ve typography değerlerini ekranların içine sabitlemek yerine tema sistemini kullanın.
4. **Ekranları küçük ve anlaşılır tutun.** Büyük ekran bileşenlerini gerektiğinde alt component'lere ayırın.
5. **Mock data ile domain modelini karıştırmayın.** Veri modelleri `models`, örnek içerikler `data` altında tutulmalıdır.
6. **Native davranışları önceliklendirin.** Mobil uygulamada Safe Area, gesture, scroll ve platform farklılıklarını göz önünde bulundurun.
7. **Tasarım tutarlılığını koruyun.** Yeni ekranlar mevcut tipografi, spacing ve component diline uyum sağlamalıdır.

---

## Katkıda Bulunma

Katkıda bulunmak için:

```bash
git clone https://github.com/EmirhanYildizer/LuleCraftApp.git
cd LuleCraftApp
cd mobile
npm install
npm start
```

Ardından yeni bir branch oluşturabilirsiniz:

```bash
git checkout -b feature/new-feature
```

Değişikliklerinizi yaptıktan sonra:

```bash
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

Pull Request açarken mümkün olduğunca:

- Değişikliğin amacını açıklayın
- Etkilenen ekranları belirtin
- Test ettiğiniz platformları belirtin
- UI değişikliklerinde ekran görüntüsü/video ekleyin
- Gereksiz dosya ve dependency eklemeyin

---

## Atıflar

Projede kullanılan üçüncü taraf kaynakların lisans ve attribution bilgileri için repository içerisindeki [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md) dosyasına bakabilirsiniz.

---

## Proje Durumu

**Durum:** Active Development / Prototype → Mobile Product

LÜLETAŞI, kültürel miras odaklı bir mobil deneyimin tasarım ve native uygulama katmanlarını bir araya getiren aktif bir geliştirme projesidir.

---

## Geliştirici

**Emirhan Yıldızer**

- GitHub: [@EmirhanYildizer](https://github.com/EmirhanYildizer)
- Repository: [LuleCraftApp](https://github.com/EmirhanYildizer/LuleCraftApp)

---

## Lisans

Bu repository için lisans koşulları ayrıca belirtilmedikçe, kaynak kodun ve proje asset'lerinin kullanım hakları repository sahibine aittir. Üçüncü taraf içerikler için ilgili lisans ve attribution koşulları geçerlidir.

---

<p align="center">
  <strong>LÜLETAŞI</strong><br />
  <sub>Eskişehir'in kültürel mirasını dijital dünyada keşfet.</sub>
</p>
