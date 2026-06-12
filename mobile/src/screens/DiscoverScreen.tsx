import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { BookOpen, ChevronRight, Clock, Cpu, Eye, Gem, History, Info, MapPin, Video } from "lucide-react-native";
import { AppAssets } from "../AppAssets";
import { discoverContents, storiesData } from "../data/discoverData";
import { colors, radius, spacing } from "../theme";
import type { NavigateFn } from "../navigation/types";

interface DiscoverScreenProps {
  onNavigate: NavigateFn;
}

const sectionIcons = {
  article: Info,
  video: Video,
  story: BookOpen,
};

export function DiscoverScreen({ onNavigate }: DiscoverScreenProps) {
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {/* Hero */}
      <View style={styles.hero}>
        <Image source={{ uri: AppAssets.discoverHero }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient
          colors={["rgba(10,10,10,0.1)", "rgba(10,10,10,0.5)", "rgba(10,10,10,0.98)"]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.heroContent}>
          <Text style={styles.heroLabel}>ESKİŞEHİR · LÜLETAŞI</Text>
          <Text style={styles.heroTitle}>Lületaşının Hikayesini Keşfedin</Text>
          <Text style={styles.heroSub}>
            Toprağın altından çıkan beyaz altının ustaların ellerinde sanata dönüşen yolculuğunu keşfedin.
          </Text>
        </View>
      </View>

      {/* Bilgi Kartları: Nedir, Tarih, Eskişehir */}
      <View style={styles.section}>
        <SectionHeader title="Lületaşı Hakkında" />
        {discoverContents.map((item) => {
          const Icon = sectionIcons[item.type];
          return (
            <Pressable
              key={item.id}
              style={styles.infoCard}
              onPress={() => onNavigate("discover-detail", { id: item.id })}
            >
              <Image source={{ uri: item.image }} style={styles.infoCardImg} contentFit="cover" />
              <View style={styles.infoCardBody}>
                <View style={styles.infoCardRow}>
                  <Icon size={12} color={colors.gold} />
                  <Text style={styles.infoCardSub}>{item.subtitle}</Text>
                </View>
                <Text style={styles.infoCardTitle}>{item.title}</Text>
                <Text style={styles.infoCardDesc} numberOfLines={2}>{item.body}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      {/* Video Hikayeleri */}
      <View style={styles.section}>
        <SectionHeader title="Video Hikayeleri" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {[
            { title: "Ustanın Elleri", dur: "4:32", img: AppAssets.luleMaster },
            { title: "Taş Nasıl Çıkar?", dur: "6:15", img: AppAssets.luleStonRaw },
            { title: "Pipo Yapımı", dur: "8:02", img: AppAssets.lulePipe },
          ].map((v) => (
            <Pressable key={v.title} style={styles.videoCard}>
              <Image source={{ uri: v.img }} style={StyleSheet.absoluteFill} contentFit="cover" />
              <LinearGradient colors={["transparent", "rgba(10,10,10,0.9)"]} style={StyleSheet.absoluteFill} />
              <View style={styles.videoBadge}>
                <Video size={10} color="#fff" />
                <Text style={styles.videoDur}>{v.dur}</Text>
              </View>
              <Text style={styles.videoTitle}>{v.title}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Hikayeler */}
      <View style={styles.section}>
        <SectionHeader title="Hikayeler" onPress={() => onNavigate("stories-list")} />
        {storiesData.map((story) => (
          <Pressable
            key={story.id}
            style={styles.storyRow}
            onPress={() => onNavigate("story-detail", { id: story.id })}
          >
            <Image source={{ uri: story.image }} style={styles.storyImg} contentFit="cover" />
            <View style={styles.storyInfo}>
              <Text style={styles.storyCat}>{story.category}</Text>
              <Text style={styles.storyTitle}>{story.title}</Text>
              <View style={styles.storyMeta}>
                <Clock size={10} color={colors.muted} />
                <Text style={styles.storyMetaText}>{story.readTime}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      {/* Sanal Oymacılık */}
      <View style={[styles.section, { paddingHorizontal: spacing.lg }]}>
        <SectionHeader title="Özel Deneyimler" />
        <Pressable style={styles.featureCard} onPress={() => onNavigate("virtual-carving")}>
          <Image source={{ uri: AppAssets.luleCarving }} style={StyleSheet.absoluteFill} contentFit="cover" />
          <LinearGradient colors={["rgba(10,10,10,0.2)", "rgba(10,10,10,0.85)"]} style={StyleSheet.absoluteFill} />
          <View style={styles.featureBadge}>
            <Cpu size={10} color={colors.background} />
            <Text style={styles.featureBadgeText}>YENİ</Text>
          </View>
          <View style={styles.featureContent}>
            <Gem size={28} color={colors.gold} />
            <Text style={styles.featureTitle}>Sanal Oymacılık</Text>
            <Text style={styles.featureSub}>Dijital ortamda kendi lületaşı eserini oy</Text>
            <View style={styles.featureBtn}>
              <Text style={styles.featureBtnText}>Başla</Text>
              <ChevronRight size={14} color={colors.background} />
            </View>
          </View>
        </Pressable>

        {/* Artırılmış Gerçeklik */}
        <Pressable style={[styles.featureCard, { marginTop: 16 }]} onPress={() => onNavigate("ar-experience")}>
          <Image source={{ uri: AppAssets.luleFigure }} style={StyleSheet.absoluteFill} contentFit="cover" />
          <LinearGradient colors={["rgba(10,10,10,0.2)", "rgba(10,10,10,0.85)"]} style={StyleSheet.absoluteFill} />
          <View style={[styles.featureBadge, { backgroundColor: "rgba(138,165,123,0.9)" }]}>
            <Eye size={10} color={colors.background} />
            <Text style={styles.featureBadgeText}>YAKINDA</Text>
          </View>
          <View style={styles.featureContent}>
            <MapPin size={28} color={colors.gold} />
            <Text style={styles.featureTitle}>Artırılmış Gerçeklik</Text>
            <Text style={styles.featureSub}>Lületaşı eserlerini kendi ortamında gör</Text>
            <View style={[styles.featureBtn, { backgroundColor: "rgba(138,165,123,0.9)" }]}>
              <Text style={styles.featureBtnText}>Keşfet</Text>
              <ChevronRight size={14} color={colors.background} />
            </View>
          </View>
        </Pressable>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

function SectionHeader({ title, onPress }: { title: string; onPress?: () => void }) {
  return (
    <View style={hdr.row}>
      <View style={hdr.titleWrap}>
        <View style={hdr.accent} />
        <Text style={hdr.title}>{title}</Text>
      </View>
      {onPress && (
        <Pressable onPress={onPress} style={hdr.link}>
          <Text style={hdr.linkText}>Tümü</Text>
          <ChevronRight size={12} color={colors.gold} />
        </Pressable>
      )}
    </View>
  );
}

const hdr = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  titleWrap: { flexDirection: "row", alignItems: "center", gap: 8 },
  accent: { width: 3, height: 20, backgroundColor: colors.gold, borderRadius: 2 },
  title: { fontFamily: "CormorantGaramond_500Medium", fontSize: 20, color: colors.textPrimary },
  link: { flexDirection: "row", alignItems: "center", gap: 4 },
  linkText: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.gold },
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },

  // Hero
  hero: { height: 320 },
  heroContent: { position: "absolute", bottom: 24, left: spacing.lg, right: spacing.lg },
  heroLabel: { fontFamily: "Inter_500Medium", fontSize: 9, letterSpacing: 2, color: colors.gold, marginBottom: 8 },
  heroTitle: { fontFamily: "CormorantGaramond_300Light", fontSize: 34, color: colors.textPrimary, lineHeight: 38 },
  heroSub: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, lineHeight: 20, marginTop: 10 },

  // Section wrapper
  section: { paddingTop: 28, paddingHorizontal: spacing.lg },

  // Bilgi kartı
  infoCard: { flexDirection: "row", gap: 14, backgroundColor: colors.card, borderRadius: radius.md, marginBottom: 10, overflow: "hidden" },
  infoCardImg: { width: 88, height: 88 },
  infoCardBody: { flex: 1, paddingVertical: 10, paddingRight: 12 },
  infoCardRow: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 },
  infoCardSub: { fontFamily: "Inter_400Regular", fontSize: 10, color: colors.gold },
  infoCardTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 16, color: colors.textPrimary },
  infoCardDesc: { fontFamily: "Inter_300Light", fontSize: 11, color: colors.textSecondary, lineHeight: 16, marginTop: 4 },

  // Video
  horizontalList: { gap: 12, paddingRight: spacing.lg },
  videoCard: { width: 160, height: 110, borderRadius: radius.md, overflow: "hidden", justifyContent: "flex-end", padding: 10 },
  videoBadge: { position: "absolute", top: 8, right: 8, flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(0,0,0,0.6)", paddingHorizontal: 6, paddingVertical: 3, borderRadius: 8 },
  videoDur: { fontFamily: "Inter_500Medium", fontSize: 9, color: "#fff" },
  videoTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 13, color: colors.textPrimary },

  // Hikayeler
  storyRow: { flexDirection: "row", gap: 14, backgroundColor: colors.card, borderRadius: radius.md, marginBottom: 10, overflow: "hidden" },
  storyImg: { width: 80, height: 80 },
  storyInfo: { flex: 1, paddingVertical: 10, paddingRight: 12 },
  storyCat: { fontFamily: "Inter_500Medium", fontSize: 9, color: colors.gold, letterSpacing: 1 },
  storyTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 15, color: colors.textPrimary, marginTop: 4 },
  storyMeta: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 6 },
  storyMetaText: { fontFamily: "Inter_400Regular", fontSize: 10, color: colors.muted },

  // Feature kartları (Sanal Oyma + AR)
  featureCard: { height: 180, borderRadius: radius.xl, overflow: "hidden" },
  featureBadge: { position: "absolute", top: 14, right: 14, flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(201,164,106,0.9)", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 },
  featureBadgeText: { fontFamily: "Inter_600SemiBold", fontSize: 8, color: colors.background, letterSpacing: 1 },
  featureContent: { position: "absolute", bottom: 20, left: 20, right: 20 },
  featureTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 22, color: colors.textPrimary, marginTop: 8 },
  featureSub: { fontFamily: "Inter_300Light", fontSize: 12, color: colors.textSecondary, marginTop: 4 },
  featureBtn: { flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: colors.gold, alignSelf: "flex-start", paddingHorizontal: 14, paddingVertical: 7, borderRadius: 12, marginTop: 12 },
  featureBtnText: { fontFamily: "Inter_600SemiBold", fontSize: 12, color: colors.background },
});
