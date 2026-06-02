import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { routes } from "../data";
import { BackButton } from "../components/BackButton";
import { colors } from "../theme";

export function ExperienceScreen({ routeId, onBack }: { routeId: string; onBack: () => void }) {
  const route = routes.find((r) => r.id === routeId) ?? routes[0];

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: route.image }} style={styles.hero} contentFit="cover" />
      <BackButton onPress={onBack} />
      <View style={styles.body}>
        <Text style={styles.title}>{route.title}</Text>
        <Text style={styles.desc}>{route.description}</Text>
        {route.locations.map((loc, i) => (
          <View key={loc.id} style={styles.stop}>
            <Text style={styles.stopNum}>{i + 1}</Text>
            <View>
              <Text style={styles.stopName}>{loc.name}</Text>
              <Text style={styles.stopType}>{loc.type} · {loc.duration}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  hero: { width: "100%", height: 220 },
  body: { padding: 24 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 28, color: colors.textPrimary },
  desc: { fontFamily: "Inter_300Light", fontSize: 14, color: colors.textSecondary, lineHeight: 22, marginTop: 12 },
  stop: { flexDirection: "row", gap: 16, marginTop: 20, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.06)" },
  stopNum: { fontFamily: "CormorantGaramond_600SemiBold", fontSize: 24, color: colors.gold, width: 28 },
  stopName: { fontFamily: "Inter_500Medium", fontSize: 15, color: colors.textPrimary },
  stopType: { fontFamily: "Inter_400Regular", fontSize: 12, color: colors.textSecondary, marginTop: 4 },
});
