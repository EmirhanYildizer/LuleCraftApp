import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { storiesData } from "../data/discoverData";
import { BackButton } from "../components/BackButton";
import { colors, spacing } from "../theme";
import type { NavigateFn } from "../navigation/types";

export function StoryDetailScreen({
  storyId,
  onBack,
}: {
  storyId: string;
  onBack: () => void;
  onNavigate: NavigateFn;
}) {
  const story = storiesData.find((s) => s.id === storyId) ?? storiesData[0];

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Image source={{ uri: story.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient
          colors={["rgba(10,10,10,0.15)", "rgba(10,10,10,0.5)", colors.background]}
          style={StyleSheet.absoluteFill}
        />
        <BackButton onPress={onBack} />
        <View style={styles.heroText}>
          <Text style={styles.cat}>{story.category.toUpperCase()}</Text>
          <Text style={styles.title}>{story.title}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.author}>{story.author}</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.readTime}>{story.readTime}</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        {/* Pull quote */}
        <View style={styles.quoteBlock}>
          <View style={styles.quoteLine} />
          <Text style={styles.quote}>{story.pullQuote}</Text>
        </View>

        <Text style={styles.excerpt}>{story.excerpt}</Text>
        <View style={styles.divider} />
        <Text style={styles.content}>{story.content}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  hero: { height: 380 },
  heroText: { position: "absolute", bottom: 28, left: spacing.lg, right: spacing.lg },
  cat: { fontFamily: "Inter_500Medium", fontSize: 9, color: colors.gold, letterSpacing: 2, marginBottom: 10 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 34, color: colors.textPrimary, lineHeight: 40 },
  metaRow: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 10 },
  author: { fontFamily: "Inter_500Medium", fontSize: 12, color: colors.ivory },
  dot: { color: "rgba(176,176,176,0.4)" },
  readTime: { fontFamily: "Inter_400Regular", fontSize: 12, color: colors.textSecondary },
  body: { padding: spacing.lg },
  quoteBlock: { flexDirection: "row", gap: 14, marginBottom: 24 },
  quoteLine: { width: 2.5, backgroundColor: colors.gold, borderRadius: 2, flexShrink: 0 },
  quote: { flex: 1, fontFamily: "CormorantGaramond_400Regular", fontSize: 20, fontStyle: "italic", color: colors.gold, lineHeight: 28 },
  excerpt: { fontFamily: "Inter_400Regular", fontSize: 15, color: colors.ivory, lineHeight: 26 },
  divider: { height: 1, backgroundColor: "rgba(255,255,255,0.06)", marginVertical: 20 },
  content: { fontFamily: "Inter_300Light", fontSize: 14, color: colors.textSecondary, lineHeight: 24 },
});
