import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Clock, MapPin } from "lucide-react-native";
import { routes } from "../data";
import { BackButton } from "../components/BackButton";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

export function RoutesScreen({ onBack, onNavigate }: { onBack: () => void; onNavigate: NavigateFn }) {
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <BackButton onPress={onBack} top={16} />
      <View style={styles.header}>
        <Text style={styles.title}>Kültürel Rotalar</Text>
      </View>
      {routes.map((r) => (
        <Pressable key={r.id} style={styles.card} onPress={() => onNavigate("experience", { routeId: r.id })}>
          <Image source={{ uri: r.image }} style={styles.img} contentFit="cover" />
          <View style={styles.info}>
            <Text style={styles.cardTitle}>{r.title}</Text>
            <Text style={styles.sub}>{r.subtitle}</Text>
            <View style={styles.meta}>
              <Clock size={12} color={colors.textSecondary} />
              <Text style={styles.metaText}>{r.duration}</Text>
              <MapPin size={12} color={colors.textSecondary} />
              <Text style={styles.metaText}>{r.distance}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: { padding: 24, paddingTop: 72 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 32, color: colors.textPrimary },
  card: { marginHorizontal: 24, marginBottom: 16, borderRadius: radius.lg, overflow: "hidden", backgroundColor: colors.card },
  img: { width: "100%", height: 140 },
  info: { padding: 16 },
  cardTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 20, color: colors.textPrimary },
  sub: { fontFamily: "Inter_400Regular", fontSize: 12, color: colors.textSecondary, marginTop: 4 },
  meta: { flexDirection: "row", gap: 12, marginTop: 10, alignItems: "center" },
  metaText: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary },
});
