import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Clock } from "lucide-react-native";
import { stories } from "../data";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

const categories = ["Tümü", "Usta Hikayeleri", "Çırak Hikayeleri", "Kültürel Miras", "Lületaşı Gelenekleri"];

export function StoriesScreen({ onNavigate }: { onNavigate: NavigateFn }) {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const filtered = activeCategory === "Tümü" ? stories : stories.filter((s) => s.category === activeCategory);

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.label}>KEŞFET</Text>
        <Text style={styles.title}>Hikayeler</Text>
        <Text style={styles.sub}>Lületaşı ustalarının gözünden anlatılan hikayeler</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs}>
        {categories.map((cat) => (
          <Pressable key={cat} onPress={() => setActiveCategory(cat)} style={[styles.tab, activeCategory === cat && styles.tabActive]}>
            <Text style={[styles.tabText, activeCategory === cat && styles.tabTextActive]}>{cat}</Text>
          </Pressable>
        ))}
      </ScrollView>
      {filtered.map((story) => (
        <Pressable key={story.id} style={styles.card} onPress={() => onNavigate("story-detail", { id: story.id })}>
          <Image source={{ uri: story.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
          <LinearGradient colors={["transparent", "rgba(10,10,10,0.97)"]} style={StyleSheet.absoluteFill} />
          <View style={styles.cardContent}>
            <Text style={styles.cat}>{story.category}</Text>
            <Text style={styles.cardTitle}>{story.title}</Text>
            <View style={styles.meta}>
              <Clock size={10} color={colors.textSecondary} />
              <Text style={styles.metaText}>{story.readTime}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: 24, paddingTop: 16, paddingBottom: 8 },
  label: { fontFamily: "Inter_500Medium", fontSize: 10, letterSpacing: 2, color: colors.gold },
  title: { fontFamily: "CormorantGaramond_300Light", fontSize: 36, color: colors.textPrimary },
  sub: { fontFamily: "Inter_300Light", fontSize: 12, color: colors.textSecondary, marginTop: 4 },
  tabs: { paddingHorizontal: 24, paddingVertical: 16, gap: 12 },
  tab: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: colors.card, borderWidth: 1, borderColor: "rgba(255,255,255,0.06)" },
  tabActive: { backgroundColor: colors.gold, borderColor: colors.gold },
  tabText: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary },
  tabTextActive: { fontFamily: "Inter_600SemiBold", color: colors.background },
  card: { marginHorizontal: 24, marginBottom: 16, height: 220, borderRadius: radius.xl, overflow: "hidden" },
  cardContent: { position: "absolute", bottom: 0, left: 0, right: 0, padding: 20 },
  cat: { fontFamily: "Inter_500Medium", fontSize: 10, color: colors.gold, marginBottom: 6 },
  cardTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 22, color: colors.textPrimary },
  meta: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 8 },
  metaText: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary },
});
