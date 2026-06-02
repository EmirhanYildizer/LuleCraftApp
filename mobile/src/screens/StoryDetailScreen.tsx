import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { stories } from "../data";
import { BackButton } from "../components/BackButton";
import { colors } from "../theme";
import type { NavigateFn } from "../navigation/types";

export function StoryDetailScreen({ storyId, onBack }: { storyId: string; onBack: () => void; onNavigate: NavigateFn }) {
  const story = stories.find((s) => s.id === storyId) ?? stories[0];

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Image source={{ uri: story.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient colors={["rgba(10,10,10,0.2)", colors.background]} style={StyleSheet.absoluteFill} />
        <BackButton onPress={onBack} />
        <View style={styles.heroText}>
          <Text style={styles.cat}>{story.category}</Text>
          <Text style={styles.title}>{story.title}</Text>
          <Text style={styles.sub}>{story.subtitle}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.quote}>{story.pullQuote}</Text>
        <Text style={styles.content}>{story.content}</Text>
        <Text style={styles.excerpt}>{story.excerpt}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  hero: { height: 360 },
  heroText: { position: "absolute", bottom: 24, left: 24, right: 24 },
  cat: { fontFamily: "Inter_500Medium", fontSize: 10, color: colors.gold, letterSpacing: 2 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 32, color: colors.textPrimary, marginTop: 8 },
  sub: { fontFamily: "Inter_400Regular", fontSize: 14, color: colors.textSecondary, marginTop: 4 },
  body: { padding: 24 },
  quote: { fontFamily: "CormorantGaramond_400Regular", fontSize: 20, fontStyle: "italic", color: colors.gold, lineHeight: 28, marginBottom: 24, borderLeftWidth: 2, borderLeftColor: colors.gold, paddingLeft: 16 },
  content: { fontFamily: "Inter_400Regular", fontSize: 15, color: "rgba(176,176,176,0.9)", lineHeight: 26 },
  excerpt: { fontFamily: "Inter_300Light", fontSize: 14, color: colors.textSecondary, lineHeight: 24, marginTop: 16 },
});
