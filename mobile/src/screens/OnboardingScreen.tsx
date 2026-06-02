import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight } from "lucide-react-native";
import { colors, radius } from "../theme";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=800&q=80",
    tag: "01 — Keşif",
    title: "Eskişehir'in Gizli Mirasını Keşfet",
    body: "Yüzyıllardır süren geleneksel lületaşı sanatının kalbine yolculuğa çıkın.",
    cta: "Devam Et",
  },
  {
    image: "https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=800&q=80",
    tag: "02 — Ustalar",
    title: "Usta Sanatçılarla Tanışın",
    body: "Nesiller boyu aktarılan el sanatlarını yaşatan ustalarla birebir bağlantı kurun.",
    cta: "Devam Et",
  },
  {
    image: "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=800&q=80",
    tag: "03 — Deneyim",
    title: "Zanaatı Bizzat Deneyimleyin",
    body: "Atölye katılımları ve rehberli rotalar ile lületaşı sanatının tam kalbine girin.",
    cta: "Başlayın",
  },
];

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const handleNext = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else onComplete();
  };

  return (
    <View style={styles.root}>
      <Image source={{ uri: slide.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
      <LinearGradient colors={["rgba(10,10,10,0.1)", "rgba(10,10,10,0.4)", "rgba(10,10,10,0.97)"]} style={StyleSheet.absoluteFill} />
      {current < slides.length - 1 && (
        <Pressable onPress={onComplete} style={styles.skip}>
          <Text style={styles.skipText}>Geç</Text>
        </Pressable>
      )}
      <View style={styles.content}>
        <Text style={styles.tag}>{slide.tag}</Text>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.body}>{slide.body}</Text>
        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View key={i} style={[styles.dot, i === current && styles.dotActive]} />
          ))}
        </View>
        <Pressable onPress={handleNext} style={styles.cta}>
          <Text style={styles.ctaText}>{slide.cta}</Text>
          <ChevronRight size={18} color={colors.background} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  skip: { position: "absolute", top: 56, right: 24, zIndex: 2 },
  skipText: { fontFamily: "Inter_400Regular", fontSize: 12, color: "rgba(176,176,176,0.7)", letterSpacing: 1 },
  content: { flex: 1, justifyContent: "flex-end", paddingHorizontal: 24, paddingBottom: 48 },
  tag: { fontFamily: "Inter_500Medium", fontSize: 10, letterSpacing: 2, color: colors.gold, marginBottom: 12 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 32, color: colors.textPrimary, lineHeight: 36 },
  body: { fontFamily: "Inter_300Light", fontSize: 14, color: colors.textSecondary, lineHeight: 22, marginTop: 12 },
  dots: { flexDirection: "row", gap: 6, marginTop: 28, marginBottom: 20 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.2)" },
  dotActive: { width: 20, backgroundColor: colors.gold },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.gold,
    borderRadius: radius.lg,
    paddingVertical: 16,
  },
  ctaText: { fontFamily: "Inter_600SemiBold", fontSize: 15, color: colors.background },
});
