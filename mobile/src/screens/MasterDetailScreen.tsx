import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight } from "lucide-react-native";
import { mastersData } from "../data/mastersData";
import { BackButton } from "../components/BackButton";
import { colors, radius, spacing } from "../theme";
import type { NavigateFn } from "../navigation/types";

export function MasterDetailScreen({
  masterId,
  onBack,
  onNavigate,
}: {
  masterId: string;
  onBack: () => void;
  onNavigate: NavigateFn;
}) {
  const master = mastersData.find((m) => m.id === masterId) ?? mastersData[0];

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {/* Hero kapak */}
      <View style={styles.hero}>
        <Image source={{ uri: master.coverImage }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient colors={["rgba(10,10,10,0.1)", colors.background]} style={StyleSheet.absoluteFill} />
        <BackButton onPress={onBack} />
      </View>

      {/* Profil */}
      <View style={styles.profileRow}>
        <Image source={{ uri: master.image }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{master.name}</Text>
          <Text style={styles.titleText}>{master.title}</Text>
          <Text style={styles.location}>{master.location} · {master.experience} yıl</Text>
        </View>
      </View>

      {/* Uzmanlık alanları */}
      <View style={styles.chips}>
        {master.specialty.map((s) => (
          <View key={s} style={styles.chip}>
            <Text style={styles.chipText}>{s}</Text>
          </View>
        ))}
      </View>

      {/* Kısa bio */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hakkında</Text>
        <Text style={styles.body}>{master.bio}</Text>
      </View>

      {/* Hayat hikayesi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hikayesi</Text>
        <Text style={styles.body}>{master.story}</Text>
      </View>

      {/* Teknikler */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kullandığı Teknikler</Text>
        {master.techniques.map((t, i) => (
          <View key={t} style={styles.techniqueRow}>
            <Text style={styles.techniqueNum}>{String(i + 1).padStart(2, "0")}</Text>
            <Text style={styles.techniqueText}>{t}</Text>
          </View>
        ))}
      </View>

      {/* Eserler */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Eserleri</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.worksRow}>
          {master.works.map((work) => (
            <View key={work.id} style={styles.workCard}>
              <Image source={{ uri: work.image }} style={styles.workImg} contentFit="cover" />
              <Text style={styles.workCat}>{work.category}</Text>
              <Text style={styles.workTitle}>{work.title}</Text>
              <Text style={styles.workDesc} numberOfLines={2}>{work.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Galeri */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Galeri</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryRow}>
          {master.gallery.map((img, i) => (
            <Image key={i} source={{ uri: img }} style={styles.galleryImg} contentFit="cover" />
          ))}
        </ScrollView>
      </View>

      {/* Bir Günlüğüne Çırak Ol */}
      <View style={styles.apprenticeCard}>
        <Text style={styles.apprenticeLabel}>ÖZEL DENEYİM</Text>
        <Text style={styles.apprenticeTitle}>Bir Günlüğüne Çırak Ol</Text>
        <Text style={styles.apprenticeDesc}>{master.workshopDescription}</Text>
        <Pressable
          style={styles.apprenticeBtn}
          onPress={() => onNavigate("workshop")}
        >
          <Text style={styles.apprenticeBtnText}>Deneyimi İncele</Text>
          <ChevronRight size={14} color={colors.background} />
        </Pressable>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  hero: { height: 260 },
  profileRow: { flexDirection: "row", gap: 16, paddingHorizontal: spacing.lg, marginTop: -36, alignItems: "flex-end" },
  avatar: { width: 80, height: 80, borderRadius: radius.md, borderWidth: 2.5, borderColor: colors.gold },
  profileInfo: { flex: 1, paddingBottom: 8 },
  name: { fontFamily: "CormorantGaramond_500Medium", fontSize: 24, color: colors.textPrimary },
  titleText: { fontFamily: "Inter_500Medium", fontSize: 11, color: colors.gold, marginTop: 2 },
  location: { fontFamily: "Inter_300Light", fontSize: 11, color: colors.textSecondary, marginTop: 4 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, paddingHorizontal: spacing.lg, marginTop: 16 },
  chip: { backgroundColor: "rgba(201,164,106,0.15)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  chipText: { fontFamily: "Inter_500Medium", fontSize: 11, color: colors.gold },
  section: { paddingHorizontal: spacing.lg, paddingTop: 28 },
  sectionTitle: { fontFamily: "Inter_500Medium", fontSize: 10, letterSpacing: 2, color: colors.gold, marginBottom: 12 },
  body: { fontFamily: "Inter_300Light", fontSize: 14, color: colors.textSecondary, lineHeight: 22 },
  techniqueRow: { flexDirection: "row", gap: 12, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.05)" },
  techniqueNum: { fontFamily: "CormorantGaramond_600SemiBold", fontSize: 18, color: colors.gold, width: 28 },
  techniqueText: { flex: 1, fontFamily: "Inter_400Regular", fontSize: 14, color: colors.ivory },
  worksRow: { gap: 14, paddingRight: spacing.lg },
  workCard: { width: 180, backgroundColor: colors.card, borderRadius: radius.md, overflow: "hidden" },
  workImg: { width: "100%", height: 110 },
  workCat: { fontFamily: "Inter_600SemiBold", fontSize: 9, color: colors.gold, letterSpacing: 1, margin: 10, marginBottom: 4 },
  workTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 16, color: colors.textPrimary, marginHorizontal: 10 },
  workDesc: { fontFamily: "Inter_300Light", fontSize: 11, color: colors.textSecondary, margin: 10, marginTop: 4, lineHeight: 16 },
  galleryRow: { gap: 10, paddingRight: spacing.lg },
  galleryImg: { width: 140, height: 100, borderRadius: radius.md },
  apprenticeCard: {
    margin: spacing.lg,
    marginTop: 28,
    padding: 24,
    backgroundColor: "rgba(201,164,106,0.1)",
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: "rgba(201,164,106,0.3)",
  },
  apprenticeLabel: { fontFamily: "Inter_500Medium", fontSize: 9, letterSpacing: 2, color: colors.gold },
  apprenticeTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 24, color: colors.textPrimary, marginTop: 6 },
  apprenticeDesc: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, lineHeight: 20, marginTop: 8 },
  apprenticeBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.gold,
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: radius.md,
    marginTop: 16,
  },
  apprenticeBtnText: { fontFamily: "Inter_600SemiBold", fontSize: 13, color: colors.background },
});
