import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Heart } from "lucide-react-native";
import { storiesData } from "../data/discoverData";
import { mastersData } from "../data/mastersData";
import { BackButton } from "../components/BackButton";
import { AppAssets } from "../AppAssets";
import { colors, radius, spacing } from "../theme";

export function FavoritesScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <BackButton onPress={onBack} top={16} />

      <View style={styles.header}>
        <Text style={styles.title}>Favorilerim</Text>
        <Text style={styles.sub}>Kaydettiğiniz hikayeler ve ustalar</Text>
      </View>

      {/* Favori Hikayeler */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>HİKAYELER</Text>
        {storiesData.map((story) => (
          <View key={story.id} style={styles.card}>
            <Image source={{ uri: story.image }} style={styles.cardImg} contentFit="cover" />
            <View style={styles.cardBody}>
              <Text style={styles.cardCat}>{story.category}</Text>
              <Text style={styles.cardTitle}>{story.title}</Text>
              <Text style={styles.cardSub}>{story.readTime} · {story.author}</Text>
            </View>
            <View style={styles.heartWrap}>
              <Heart size={16} color={colors.gold} fill={colors.gold} />
            </View>
          </View>
        ))}
      </View>

      {/* Favori Ustalar */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>USTALAR</Text>
        {mastersData.map((master) => (
          <View key={master.id} style={styles.card}>
            <Image source={{ uri: master.image }} style={styles.cardImg} contentFit="cover" />
            <View style={styles.cardBody}>
              <Text style={styles.cardCat}>{master.specialty.join(" · ")}</Text>
              <Text style={styles.cardTitle}>{master.name}</Text>
              <Text style={styles.cardSub}>{master.experience} yıl · {master.location}</Text>
            </View>
            <View style={styles.heartWrap}>
              <Heart size={16} color={colors.gold} fill={colors.gold} />
            </View>
          </View>
        ))}
      </View>

      {/* Favori Görsel — lületaşı temalı banner */}
      <View style={styles.banner}>
        <Image source={{ uri: AppAssets.luleFigure }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <View style={styles.bannerOverlay} />
        <Text style={styles.bannerTitle}>Daha Fazla Keşfet</Text>
        <Text style={styles.bannerSub}>Yeni hikayeler ve ustalar sizi bekliyor</Text>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: spacing.lg, paddingTop: 72, paddingBottom: 20 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 34, color: colors.textPrimary },
  sub: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, marginTop: 6 },
  section: { paddingHorizontal: spacing.lg, marginBottom: 8 },
  sectionLabel: { fontFamily: "Inter_500Medium", fontSize: 9, color: colors.gold, letterSpacing: 2, marginBottom: 12 },
  card: { flexDirection: "row", alignItems: "center", backgroundColor: colors.card, borderRadius: radius.md, marginBottom: 10, overflow: "hidden" },
  cardImg: { width: 72, height: 72 },
  cardBody: { flex: 1, paddingHorizontal: 14, paddingVertical: 10 },
  cardCat: { fontFamily: "Inter_500Medium", fontSize: 9, color: colors.gold, letterSpacing: 0.5 },
  cardTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 16, color: colors.textPrimary, marginTop: 3 },
  cardSub: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary, marginTop: 3 },
  heartWrap: { paddingRight: 14 },
  banner: { marginHorizontal: spacing.lg, marginTop: 8, height: 120, borderRadius: radius.lg, overflow: "hidden", justifyContent: "flex-end", padding: 16 },
  bannerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(10,10,10,0.6)" } as object,
  bannerTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 20, color: colors.textPrimary },
  bannerSub: { fontFamily: "Inter_300Light", fontSize: 12, color: colors.textSecondary, marginTop: 4 },
});
