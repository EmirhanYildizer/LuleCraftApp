import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Bell, Bookmark, ChevronRight, Clock, Search, Users } from "lucide-react-native";
import { artisans, stories, workshops } from "../data";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

interface HomeScreenProps {
  onNavigate: NavigateFn;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const hero = stories[0];
  const artisan = artisans[0];

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>HOŞ GELDİNİZ</Text>
          <Text style={styles.name}>Zeynep A.</Text>
        </View>
        <View style={styles.headerActions}>
          <Pressable style={styles.iconBtn} onPress={() => onNavigate("search")}>
            <Search size={18} color={colors.textSecondary} />
          </Pressable>
          <Pressable style={styles.iconBtn} onPress={() => onNavigate("notifications")}>
            <Bell size={18} color={colors.textSecondary} />
            <View style={styles.badge} />
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.hero} onPress={() => onNavigate("story-detail", { id: hero.id })}>
        <Image source={{ uri: hero.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient colors={["transparent", "rgba(10,10,10,0.4)", "rgba(10,10,10,0.95)"]} style={StyleSheet.absoluteFill} />
        <View style={styles.heroBadge}><Text style={styles.heroBadgeText}>ÖZEL HABER</Text></View>
        <Bookmark size={18} color="rgba(255,255,255,0.6)" style={styles.heroBookmark} />
        <View style={styles.heroContent}>
          <Text style={styles.heroCat}>{hero.category.toUpperCase()}</Text>
          <Text style={styles.heroTitle}>{hero.title}</Text>
          <View style={styles.heroMeta}>
            <Image source={{ uri: hero.authorImage }} style={styles.authorImg} />
            <Text style={styles.heroMetaText}>{hero.author}</Text>
            <Text style={styles.heroMetaDot}>·</Text>
            <Clock size={10} color="rgba(176,176,176,0.6)" />
            <Text style={styles.heroMetaText}>{hero.readTime}</Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>HAFTANIN USTASI</Text>
        <Text style={styles.sectionTitle}>Öne Çıkan Sanatçı</Text>
        <Pressable style={styles.artisanCard} onPress={() => onNavigate("artisan", { id: artisan.id })}>
          <Image source={{ uri: artisan.image }} style={styles.artisanImg} />
          <View style={styles.artisanInfo}>
            <Text style={styles.artisanName}>{artisan.name}</Text>
            <Text style={styles.artisanSub}>{artisan.subtitle}</Text>
            <Text style={styles.artisanMeta}>{artisan.experience} yıl deneyim · ★ {artisan.rating}</Text>
          </View>
          <ChevronRight size={16} color="rgba(176,176,176,0.4)" />
        </Pressable>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Hikayeler</Text>
          <Pressable onPress={() => onNavigate("stories")} style={styles.linkRow}>
            <Text style={styles.link}>Tümünü Gör</Text>
            <ChevronRight size={12} color={colors.gold} />
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16, paddingRight: 24 }}>
          {stories.slice(1).map((story) => (
            <Pressable key={story.id} style={styles.storyCard} onPress={() => onNavigate("story-detail", { id: story.id })}>
              <Image source={{ uri: story.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
              <LinearGradient colors={["transparent", "rgba(10,10,10,0.95)"]} style={StyleSheet.absoluteFill} />
              <Text style={styles.storyCardTitle}>{story.title}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Önerilen Atölyeler</Text>
          <Pressable onPress={() => onNavigate("workshops")} style={styles.linkRow}>
            <Text style={styles.link}>Tümü</Text>
            <ChevronRight size={12} color={colors.gold} />
          </Pressable>
        </View>
        {workshops.slice(0, 2).map((w) => (
          <Pressable key={w.id} style={styles.workshopRow} onPress={() => onNavigate("workshop-detail", { id: w.id })}>
            <Image source={{ uri: w.image }} style={styles.workshopImg} />
            <View style={{ flex: 1 }}>
              <Text style={styles.workshopTitle}>{w.title}</Text>
              <View style={styles.workshopMeta}>
                <Clock size={9} color={colors.textSecondary} />
                <Text style={styles.workshopMetaText}>{w.duration}</Text>
                <Users size={9} color={colors.textSecondary} />
                <Text style={styles.workshopMetaText}>{w.participants}</Text>
              </View>
              <Text style={styles.workshopPrice}>{w.price}</Text>
            </View>
          </Pressable>
        ))}
      </View>

      <View style={styles.eventBanner}>
        <Text style={styles.sectionLabel}>YAKLAŞAN ETKİNLİK</Text>
        <Text style={styles.eventTitle}>Eskişehir Lületaşı Festivali</Text>
        <Text style={styles.eventSub}>3–7 Temmuz 2025 · Odunpazarı Meydanı</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { paddingBottom: 24 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 24, paddingTop: 8, paddingBottom: 16 },
  welcome: { fontFamily: "Inter_500Medium", fontSize: 11, letterSpacing: 2, color: colors.gold },
  name: { fontFamily: "CormorantGaramond_400Regular", fontSize: 28, color: colors.textPrimary },
  headerActions: { flexDirection: "row", gap: 12 },
  iconBtn: { width: 40, height: 40, borderRadius: 16, backgroundColor: colors.card, alignItems: "center", justifyContent: "center" },
  badge: { position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: colors.gold },
  hero: { marginHorizontal: 24, height: 260, borderRadius: radius.xl, overflow: "hidden" },
  heroBadge: { position: "absolute", top: 16, left: 16, backgroundColor: "rgba(201,164,106,0.9)", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  heroBadgeText: { fontFamily: "Inter_600SemiBold", fontSize: 9, color: colors.background, letterSpacing: 1 },
  heroBookmark: { position: "absolute", top: 16, right: 16 },
  heroContent: { position: "absolute", bottom: 0, left: 0, right: 0, padding: 20 },
  heroCat: { fontFamily: "Inter_500Medium", fontSize: 10, color: colors.gold, letterSpacing: 1.5, marginBottom: 6 },
  heroTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 24, color: colors.textPrimary },
  heroMeta: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 8 },
  authorImg: { width: 24, height: 24, borderRadius: 12 },
  heroMetaText: { fontFamily: "Inter_400Regular", fontSize: 11, color: "rgba(176,176,176,0.8)" },
  heroMetaDot: { color: "rgba(176,176,176,0.4)" },
  section: { marginTop: 32, paddingHorizontal: 24 },
  sectionLabel: { fontFamily: "Inter_500Medium", fontSize: 10, letterSpacing: 2, color: colors.gold },
  sectionTitle: { fontFamily: "CormorantGaramond_400Regular", fontSize: 20, color: colors.textPrimary, marginTop: 4 },
  sectionRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  linkRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  link: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.gold },
  artisanCard: { flexDirection: "row", alignItems: "center", gap: 16, padding: 16, backgroundColor: colors.card, borderRadius: radius.lg, borderWidth: 1, borderColor: "rgba(201,164,106,0.12)", marginTop: 16 },
  artisanImg: { width: 64, height: 64, borderRadius: radius.md },
  artisanInfo: { flex: 1 },
  artisanName: { fontFamily: "CormorantGaramond_500Medium", fontSize: 18, color: colors.textPrimary },
  artisanSub: { fontFamily: "Inter_500Medium", fontSize: 11, color: colors.gold, marginTop: 2 },
  artisanMeta: { fontFamily: "Inter_400Regular", fontSize: 10, color: colors.textSecondary, marginTop: 4 },
  storyCard: { width: 160, height: 200, borderRadius: radius.lg, overflow: "hidden", justifyContent: "flex-end", padding: 12 },
  storyCardTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 15, color: colors.textPrimary },
  workshopRow: { flexDirection: "row", gap: 16, padding: 12, backgroundColor: colors.card, borderRadius: radius.lg, marginBottom: 12 },
  workshopImg: { width: 80, height: 80, borderRadius: radius.sm },
  workshopTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 16, color: colors.textPrimary },
  workshopMeta: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 6 },
  workshopMetaText: { fontFamily: "Inter_400Regular", fontSize: 10, color: colors.textSecondary },
  workshopPrice: { fontFamily: "CormorantGaramond_600SemiBold", fontSize: 16, color: colors.gold, marginTop: 6 },
  eventBanner: { marginHorizontal: 24, marginTop: 24, padding: 20, borderRadius: radius.lg, backgroundColor: "rgba(201,164,106,0.15)", borderWidth: 1, borderColor: "rgba(201,164,106,0.2)" },
  eventTitle: { fontFamily: "CormorantGaramond_400Regular", fontSize: 22, color: colors.textPrimary, marginTop: 4 },
  eventSub: { fontFamily: "Inter_400Regular", fontSize: 12, color: colors.textSecondary, marginTop: 4 },
});
