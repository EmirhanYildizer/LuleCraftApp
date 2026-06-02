import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { discoverContents } from "../data/discoverData";
import { BackButton } from "../components/BackButton";
import { colors, spacing } from "../theme";

export function DiscoverDetailScreen({
  contentId,
  onBack,
}: {
  contentId: string;
  onBack: () => void;
}) {
  const item = discoverContents.find((c) => c.id === contentId) ?? discoverContents[0];

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {/* Hero görsel */}
      <View style={styles.hero}>
        <Image source={{ uri: item.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient
          colors={["rgba(10,10,10,0.15)", "rgba(10,10,10,0.5)", colors.background]}
          style={StyleSheet.absoluteFill}
        />
        <BackButton onPress={onBack} />
        <View style={styles.heroText}>
          <Text style={styles.heroSub}>{item.subtitle}</Text>
          <Text style={styles.heroTitle}>{item.title}</Text>
        </View>
      </View>

      {/* İçerik */}
      <View style={styles.body}>
        {/* Pull-quote çizgisi */}
        <View style={styles.accentBar} />
        <Text style={styles.content}>{item.body}</Text>

        {/* Alt bilgi notu */}
        <View style={styles.noteCard}>
          <Text style={styles.noteText}>
            Eskişehir lületaşı mirası hakkında daha fazla bilgi edinmek için atölyelerimizi ve ustalarımızı keşfedin.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  hero: { height: 340 },
  heroText: { position: "absolute", bottom: 28, left: spacing.lg, right: spacing.lg },
  heroSub: { fontFamily: "Inter_500Medium", fontSize: 9, color: colors.gold, letterSpacing: 2, marginBottom: 10 },
  heroTitle: { fontFamily: "CormorantGaramond_400Regular", fontSize: 34, color: colors.textPrimary, lineHeight: 40 },
  body: { padding: spacing.lg },
  accentBar: { width: 40, height: 2, backgroundColor: colors.gold, borderRadius: 2, marginBottom: 20 },
  content: { fontFamily: "Inter_400Regular", fontSize: 15, color: colors.ivory, lineHeight: 26 },
  noteCard: {
    marginTop: 28,
    backgroundColor: "rgba(201,164,106,0.08)",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(201,164,106,0.2)",
  },
  noteText: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, lineHeight: 20, textAlign: "center" },
});
