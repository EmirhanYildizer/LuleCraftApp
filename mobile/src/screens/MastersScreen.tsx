import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { ChevronRight, Star } from "lucide-react-native";
import { mastersData } from "../data/mastersData";
import { colors, radius, spacing } from "../theme";
import type { NavigateFn } from "../navigation/types";

export function MastersScreen({ onNavigate }: { onNavigate: NavigateFn }) {
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.label}>ZANAAT · MİRAS</Text>
        <Text style={styles.title}>Ustalar</Text>
        <Text style={styles.sub}>Lületaşının sırlarını nesiller boyu aktaran usta sanatçılar</Text>
      </View>

      {mastersData.map((master) => (
        <Pressable
          key={master.id}
          style={styles.card}
          onPress={() => onNavigate("master-detail", { id: master.id })}
        >
          <Image source={{ uri: master.coverImage }} style={styles.cover} contentFit="cover" />
          <View style={styles.cardBody}>
            <Image source={{ uri: master.image }} style={styles.avatar} />
            <View style={styles.info}>
              <View style={styles.row}>
                <Text style={styles.name}>{master.name}</Text>
                <View style={styles.ratingBadge}>
                  <Star size={10} color={colors.gold} fill={colors.gold} />
                  <Text style={styles.ratingText}>{master.experience} yıl</Text>
                </View>
              </View>
              <Text style={styles.titleText}>{master.title}</Text>
              <Text style={styles.bio} numberOfLines={2}>{master.bio}</Text>
              <View style={styles.specialties}>
                {master.specialty.map((s) => (
                  <View key={s} style={styles.chip}>
                    <Text style={styles.chipText}>{s}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <Pressable style={styles.cta} onPress={() => onNavigate("master-detail", { id: master.id })}>
            <Text style={styles.ctaText}>Profili İncele</Text>
            <ChevronRight size={14} color={colors.background} />
          </Pressable>
        </Pressable>
      ))}

      {/* Çırak ol CTA */}
      <View style={styles.apprenticeBanner}>
        <Text style={styles.apprenticeLabel}>ÖZEL DENEYİM</Text>
        <Text style={styles.apprenticeTitle}>Bir Günlüğüne Çırak Ol</Text>
        <Text style={styles.apprenticeDesc}>
          Bir ustanın yanında lületaşının nasıl işlendiğini adım adım deneyimleyin.
        </Text>
        <Pressable style={styles.apprenticeBtn}>
          <Text style={styles.apprenticeBtnText}>Deneyimi İncele</Text>
          <ChevronRight size={14} color={colors.background} />
        </Pressable>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: spacing.lg, paddingTop: 16, paddingBottom: 24 },
  label: { fontFamily: "Inter_500Medium", fontSize: 9, letterSpacing: 2, color: colors.gold },
  title: { fontFamily: "CormorantGaramond_300Light", fontSize: 40, color: colors.textPrimary, marginTop: 4 },
  sub: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, lineHeight: 20, marginTop: 6 },

  card: { marginHorizontal: spacing.lg, marginBottom: 20, backgroundColor: colors.card, borderRadius: radius.xl, overflow: "hidden" },
  cover: { width: "100%", height: 140 },
  cardBody: { flexDirection: "row", gap: 14, padding: 16 },
  avatar: { width: 72, height: 72, borderRadius: radius.md, borderWidth: 2, borderColor: colors.gold, flexShrink: 0 },
  info: { flex: 1 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  name: { fontFamily: "CormorantGaramond_500Medium", fontSize: 20, color: colors.textPrimary },
  ratingBadge: { flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(201,164,106,0.12)", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  ratingText: { fontFamily: "Inter_500Medium", fontSize: 10, color: colors.gold },
  titleText: { fontFamily: "Inter_500Medium", fontSize: 11, color: colors.gold, marginTop: 2 },
  bio: { fontFamily: "Inter_300Light", fontSize: 12, color: colors.textSecondary, lineHeight: 18, marginTop: 6 },
  specialties: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 10 },
  chip: { backgroundColor: "rgba(201,164,106,0.15)", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  chipText: { fontFamily: "Inter_500Medium", fontSize: 10, color: colors.gold },

  cta: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, backgroundColor: colors.gold, margin: 16, marginTop: 0, borderRadius: radius.md, paddingVertical: 12 },
  ctaText: { fontFamily: "Inter_600SemiBold", fontSize: 13, color: colors.background },

  apprenticeBanner: {
    marginHorizontal: spacing.lg,
    padding: 24,
    borderRadius: radius.xl,
    backgroundColor: "rgba(201,164,106,0.1)",
    borderWidth: 1,
    borderColor: "rgba(201,164,106,0.3)",
  },
  apprenticeLabel: { fontFamily: "Inter_500Medium", fontSize: 9, letterSpacing: 2, color: colors.gold },
  apprenticeTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 26, color: colors.textPrimary, marginTop: 6 },
  apprenticeDesc: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, lineHeight: 20, marginTop: 8 },
  apprenticeBtn: { flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: colors.gold, alignSelf: "flex-start", paddingHorizontal: 18, paddingVertical: 10, borderRadius: radius.md, marginTop: 16 },
  apprenticeBtnText: { fontFamily: "Inter_600SemiBold", fontSize: 13, color: colors.background },
});
