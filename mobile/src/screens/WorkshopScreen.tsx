import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { ChevronRight, Clock, Layers } from "lucide-react-native";
import { workshopsData } from "../data/workshopsData";
import { colors, radius, spacing } from "../theme";
import type { WorkshopModel } from "../models";
import type { NavigateFn } from "../navigation/types";

type DifficultyFilter = "Tümü" | WorkshopModel["difficulty"];
const FILTERS: DifficultyFilter[] = ["Tümü", "Başlangıç", "Orta", "İleri"];

const DIFF_COLORS: Record<WorkshopModel["difficulty"], string> = {
  Başlangıç: "#8AA57B",
  Orta: "#C9A46A",
  İleri: "#9D6B53",
};

export function WorkshopScreen({ onNavigate }: { onNavigate: NavigateFn }) {
  const [filter, setFilter] = useState<DifficultyFilter>("Tümü");

  const filtered =
    filter === "Tümü"
      ? workshopsData
      : workshopsData.filter((w) => w.difficulty === filter);

  const featured = workshopsData[0];

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.label}>ZANAAT DENEYİMİ</Text>
        <Text style={styles.title}>Atölyeler</Text>
        <Text style={styles.sub}>Lületaşı sanatını bizzat deneyimleyin</Text>
      </View>

      {/* Öne çıkan atölye */}
      <Pressable style={styles.featured} onPress={() => onNavigate("workshop-detail", { id: featured.id })}>
        <Image source={{ uri: featured.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <View style={styles.featuredOverlay} />
        <View style={styles.featuredContent}>
          <View style={[styles.diffBadge, { backgroundColor: DIFF_COLORS[featured.difficulty] + "CC" }]}>
            <Text style={styles.diffBadgeText}>{featured.difficulty}</Text>
          </View>
          <Text style={styles.featuredTitle}>{featured.title}</Text>
          <Text style={styles.featuredSub}>{featured.description.substring(0, 80)}...</Text>
          <View style={styles.featuredMeta}>
            <Clock size={11} color={colors.ivory} />
            <Text style={styles.featuredMetaText}>{featured.duration}</Text>
            <Layers size={11} color={colors.ivory} />
            <Text style={styles.featuredMetaText}>{featured.steps.length} Adım</Text>
          </View>
        </View>
      </Pressable>

      {/* Filtreler */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
        {FILTERS.map((f) => (
          <Pressable
            key={f}
            style={[styles.filterChip, filter === f && styles.filterChipActive]}
            onPress={() => setFilter(f)}
          >
            {f !== "Tümü" && <View style={[styles.filterDot, { backgroundColor: DIFF_COLORS[f as WorkshopModel["difficulty"]] }]} />}
            <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>{f}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Atölye kartları */}
      <View style={styles.grid}>
        {filtered.map((w) => (
          <WorkshopCard key={w.id} workshop={w} onPress={() => onNavigate("workshop-detail", { id: w.id })} />
        ))}
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

function WorkshopCard({ workshop, onPress }: { workshop: WorkshopModel; onPress: () => void }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: workshop.image }} style={styles.cardImg} contentFit="cover" />
      <View style={styles.cardBody}>
        <View style={styles.cardTopRow}>
          <View style={[styles.diffChip, { backgroundColor: DIFF_COLORS[workshop.difficulty] + "33" }]}>
            <Text style={[styles.diffChipText, { color: DIFF_COLORS[workshop.difficulty] }]}>
              {workshop.difficulty}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Clock size={10} color={colors.muted} />
            <Text style={styles.metaText}>{workshop.duration}</Text>
          </View>
        </View>
        <Text style={styles.cardTitle}>{workshop.title}</Text>
        <Text style={styles.cardDesc} numberOfLines={2}>{workshop.description}</Text>
        <View style={styles.cardFooter}>
          <View style={styles.includes}>
            {workshop.includes.slice(0, 2).map((inc) => (
              <Text key={inc} style={styles.includeTag}>• {inc}</Text>
            ))}
          </View>
          <Pressable style={styles.startBtn} onPress={onPress}>
            <Text style={styles.startBtnText}>İncele</Text>
            <ChevronRight size={12} color={colors.background} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: spacing.lg, paddingTop: 16, paddingBottom: 20 },
  label: { fontFamily: "Inter_500Medium", fontSize: 9, letterSpacing: 2, color: colors.gold },
  title: { fontFamily: "CormorantGaramond_300Light", fontSize: 40, color: colors.textPrimary, marginTop: 4 },
  sub: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, marginTop: 6 },

  featured: { marginHorizontal: spacing.lg, height: 200, borderRadius: radius.xl, overflow: "hidden", marginBottom: 20 },
  featuredOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(10,10,10,0.55)" } as object,
  featuredContent: { position: "absolute", bottom: 20, left: 20, right: 20 },
  diffBadge: { alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, marginBottom: 8 },
  diffBadgeText: { fontFamily: "Inter_600SemiBold", fontSize: 10, color: colors.background },
  featuredTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 22, color: colors.textPrimary },
  featuredSub: { fontFamily: "Inter_300Light", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4, lineHeight: 17 },
  featuredMeta: { flexDirection: "row", gap: 12, marginTop: 10, alignItems: "center" },
  featuredMetaText: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.ivory },

  filterRow: { paddingHorizontal: spacing.lg, gap: 8, paddingBottom: 16 },
  filterChip: { flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20, backgroundColor: colors.card, borderWidth: 1, borderColor: "rgba(255,255,255,0.06)" },
  filterChipActive: { backgroundColor: colors.gold, borderColor: colors.gold },
  filterDot: { width: 7, height: 7, borderRadius: 4 },
  filterText: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary },
  filterTextActive: { fontFamily: "Inter_600SemiBold", color: colors.background },

  grid: { paddingHorizontal: spacing.lg, gap: 14 },

  card: { backgroundColor: colors.card, borderRadius: radius.lg, overflow: "hidden" },
  cardImg: { width: "100%", height: 150 },
  cardBody: { padding: 16 },
  cardTopRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  diffChip: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  diffChipText: { fontFamily: "Inter_600SemiBold", fontSize: 10 },
  metaItem: { flexDirection: "row", alignItems: "center", gap: 4 },
  metaText: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.muted },
  cardTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 20, color: colors.textPrimary },
  cardDesc: { fontFamily: "Inter_300Light", fontSize: 12, color: colors.textSecondary, lineHeight: 18, marginTop: 6 },
  cardFooter: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginTop: 12 },
  includes: { flex: 1, gap: 2 },
  includeTag: { fontFamily: "Inter_400Regular", fontSize: 10, color: colors.muted },
  startBtn: { flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: colors.gold, paddingHorizontal: 14, paddingVertical: 7, borderRadius: 10 },
  startBtnText: { fontFamily: "Inter_600SemiBold", fontSize: 12, color: colors.background },
});
