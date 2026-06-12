import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight } from "lucide-react-native";
import { AppAssets } from "../AppAssets";
import { colors, radius } from "../theme";

const slides = [
  {
    image: AppAssets.splashHero,
    tag: "01 — Keşif",
    title: "Eskişehir'in Gizli Mirasını Keşfet",
    body: "Yüzyıllardır süren geleneksel lületaşı sanatının kalbine yolculuğa çıkın. Her taşın ardında gizemli bir hikaye sizi bekliyor.",
    cta: "Devam Et",
  },
  {
    image: AppAssets.luleMaster,
    tag: "02 — Ustalar",
    title: "Usta Sanatçılarla Tanışın",
    body: "Nesiller boyu aktarılan el sanatlarını yaşatan ustalarla birebir bağlantı kurun. Onların hikayeleri ve bilgeliklerine ortak olun.",
    cta: "Devam Et",
  },
  {
    image: AppAssets.luleCarving,
    tag: "03 — Deneyim",
    title: "Zanaatı Bizzat Deneyimleyin",
    body: "Atölye katılımları, rehberli rotalar ve sanal oymacılık ile lületaşı sanatının tam kalbine girin.",
    cta: "Başlayın",
  },
];

export function OnboardingScreen({ onComplete }: { onComplete: () => void }) {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const handleNext = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else onComplete();
  };

  return (
    <View style={styles.root}>
      <Image source={{ uri: slide.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
      <LinearGradient
        colors={["rgba(10,10,10,0.05)", "rgba(10,10,10,0.35)", "rgba(10,10,10,0.97)"]}
        style={StyleSheet.absoluteFill}
      />

      {current < slides.length - 1 && (
        <Pressable onPress={onComplete} style={styles.skip}>
          <Text style={styles.skipText}>Geç</Text>
        </Pressable>
      )}

      {/* Alt içerik */}
      <View style={styles.content}>
        <View style={styles.tagRow}>
          <View style={styles.tagLine} />
          <Text style={styles.tag}>{slide.tag}</Text>
        </View>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.body}>{slide.body}</Text>

        {/* Dots */}
        <View style={styles.dots}>
          {slides.map((_, i) => (
            <Pressable key={i} onPress={() => setCurrent(i)}>
              <View style={[styles.dot, i === current && styles.dotActive]} />
            </Pressable>
          ))}
        </View>

        <Pressable onPress={handleNext} style={styles.cta}>
          <Text style={styles.ctaText}>{slide.cta}</Text>
          <ChevronRight size={18} color={colors.background} strokeWidth={2.5} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  skip: { position: "absolute", top: 56, right: 24, zIndex: 2, paddingVertical: 6, paddingHorizontal: 12 },
  skipText: { fontFamily: "Inter_400Regular", fontSize: 12, color: "rgba(176,176,176,0.7)", letterSpacing: 1 },
  content: { flex: 1, justifyContent: "flex-end", paddingHorizontal: 28, paddingBottom: 52 },
  tagRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 14 },
  tagLine: { width: 20, height: 1.5, backgroundColor: colors.gold, borderRadius: 1 },
  tag: { fontFamily: "Inter_500Medium", fontSize: 10, letterSpacing: 2, color: colors.gold },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 34, color: colors.textPrimary, lineHeight: 40 },
  body: { fontFamily: "Inter_300Light", fontSize: 14, color: "rgba(176,176,176,0.85)", lineHeight: 22, marginTop: 14 },
  dots: { flexDirection: "row", gap: 6, marginTop: 30, marginBottom: 22 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.2)" },
  dotActive: { width: 24, height: 6, borderRadius: 3, backgroundColor: colors.gold },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: colors.gold,
    borderRadius: radius.lg,
    paddingVertical: 17,
  },
  ctaText: { fontFamily: "Inter_600SemiBold", fontSize: 15, color: colors.background, letterSpacing: 0.3 },
});
