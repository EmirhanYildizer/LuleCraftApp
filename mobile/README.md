# LÜLETAŞI — Expo Mobil Uygulama

Figma Make tasarımından (`../src`) taşınan **Lületaşı** kültürel miras keşif uygulamasının React Native (Expo) sürümü.

**Expo SDK 54** — Expo Go 54.x ile uyumludur (telefondaki mağaza sürümü).

## Çalıştırma

```bash
cd mobile
npm install
npm start
```

Ardından Expo Go ile QR kodu tarayın veya `npm run android` / `npm run ios` kullanın.

## Yapı

| Klasör | Açıklama |
|--------|----------|
| `src/screens/` | Tüm ekranlar (splash, onboarding, ana sekmeler, detaylar) |
| `src/data/` | Mock içerik (hikayeler, ustalar, atölyeler, rotalar) |
| `src/theme.ts` | Tasarım renkleri ve spacing |
| `src/navigation/` | Sekme ve stack navigasyon tipleri |
| `App.tsx` | Figma Make `App.tsx` ile aynı akış |

## Figma Make vs Mobil

- **Web prototip** (`/` kök): Vite + Tailwind, telefon çerçevesi içinde önizleme
- **Mobil** (`/mobile`): Gerçek iOS/Android uygulaması, Safe Area, native scroll ve dokunma

Orijinal tasarım: [Figma — Premium Cultural Heritage UI](https://www.figma.com/design/YzNi1NdZZeSJtqsF4z5Bw0/Premium-Cultural-Heritage-UI-Design--Copy-)
