import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { artisans } from "../data";
import { BackButton } from "../components/BackButton";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

export function ArtisanScreen({ artisanId, onBack, onNavigate }: { artisanId: string; onBack: () => void; onNavigate: NavigateFn }) {
  const artisan = artisans.find((a) => a.id === artisanId) ?? artisans[0];

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Image source={{ uri: artisan.coverImage }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient colors={["transparent", colors.background]} style={StyleSheet.absoluteFill} />
        <BackButton onPress={onBack} />
      </View>
      <View style={styles.profile}>
        <Image source={{ uri: artisan.image }} style={styles.avatar} />
        <Text style={styles.name}>{artisan.name}</Text>
        <Text style={styles.sub}>{artisan.subtitle}</Text>
        <Text style={styles.bio}>{artisan.bio}</Text>
        <Pressable style={styles.cta} onPress={() => onNavigate("workshops")}>
          <Text style={styles.ctaText}>Atölye Rezervasyonu</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  hero: { height: 280 },
  profile: { padding: 24, marginTop: -40 },
  avatar: { width: 88, height: 88, borderRadius: radius.md, borderWidth: 2, borderColor: colors.gold },
  name: { fontFamily: "CormorantGaramond_500Medium", fontSize: 28, color: colors.textPrimary, marginTop: 16 },
  sub: { fontFamily: "Inter_500Medium", fontSize: 12, color: colors.gold, marginTop: 4 },
  bio: { fontFamily: "Inter_300Light", fontSize: 14, color: colors.textSecondary, lineHeight: 22, marginTop: 16 },
  cta: { marginTop: 24, backgroundColor: colors.gold, borderRadius: radius.lg, paddingVertical: 16, alignItems: "center" },
  ctaText: { fontFamily: "Inter_600SemiBold", fontSize: 15, color: colors.background },
});
