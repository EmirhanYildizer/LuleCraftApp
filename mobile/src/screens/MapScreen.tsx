import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { MapPin, Navigation } from "lucide-react-native";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

const pins = [
  { id: "1", name: "Mehmet Usta Atölyesi", type: "Atölye", top: 80, left: 100 },
  { id: "2", name: "Lületaşı Müzesi", type: "Müze", top: 140, left: 200 },
  { id: "3", name: "Odunpazarı Atölyesi", type: "Atölye", top: 200, left: 140 },
];

export function MapScreen({ onNavigate }: { onNavigate: NavigateFn }) {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.label}>KEŞFET</Text>
        <Text style={styles.title}>Kültürel Harita</Text>
      </View>
      <View style={styles.mapArea}>
        <View style={styles.mapGrid} />
        {pins.map((p) => (
          <Pressable key={p.id} style={[styles.pin, { top: p.top, left: p.left }]} onPress={() => onNavigate("location-detail", { id: p.id })}>
            <MapPin size={14} color={colors.background} fill={colors.gold} />
          </Pressable>
        ))}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cards}>
        {pins.map((p) => (
          <Pressable key={p.id} style={styles.card} onPress={() => onNavigate("location-detail", { id: p.id })}>
            <Text style={styles.cardType}>{p.type}</Text>
            <Text style={styles.cardName}>{p.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Pressable style={styles.routesBtn} onPress={() => onNavigate("routes")}>
        <Navigation size={18} color={colors.background} />
        <Text style={styles.routesBtnText}>Kültürel Rotalar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: 24, paddingTop: 16 },
  label: { fontFamily: "Inter_500Medium", fontSize: 10, letterSpacing: 2, color: colors.gold },
  title: { fontFamily: "CormorantGaramond_300Light", fontSize: 32, color: colors.textPrimary },
  mapArea: { flex: 1, margin: 24, borderRadius: radius.xl, backgroundColor: "#141210", borderWidth: 1, borderColor: "rgba(201,164,106,0.2)", overflow: "hidden", position: "relative" },
  mapGrid: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, opacity: 0.15, backgroundColor: colors.card },
  pin: { position: "absolute", width: 32, height: 32, borderRadius: 16, backgroundColor: colors.gold, alignItems: "center", justifyContent: "center" },
  cards: { paddingHorizontal: 24, gap: 12, paddingBottom: 8 },
  card: { width: 160, padding: 16, borderRadius: radius.md, backgroundColor: colors.card },
  cardType: { fontFamily: "Inter_600SemiBold", fontSize: 9, color: colors.gold, letterSpacing: 1 },
  cardName: { fontFamily: "CormorantGaramond_500Medium", fontSize: 16, color: colors.textPrimary, marginTop: 6 },
  routesBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, marginHorizontal: 24, marginBottom: 16, paddingVertical: 14, borderRadius: radius.lg, backgroundColor: colors.gold },
  routesBtnText: { fontFamily: "Inter_600SemiBold", fontSize: 14, color: colors.background },
});
