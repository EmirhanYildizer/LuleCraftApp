import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Bell, Bookmark, ChevronRight, Settings } from "lucide-react-native";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

const menu = [
  { id: "favorites", label: "Favorilerim", icon: Bookmark },
  { id: "notifications", label: "Bildirimler", icon: Bell },
  { id: "settings", label: "Ayarlar", icon: Settings },
];

export function ProfileScreen({ onNavigate }: { onNavigate: NavigateFn }) {
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" }} style={styles.avatar} />
        <Text style={styles.name}>Zeynep Arslan</Text>
        <Text style={styles.sub}>Kültür Meraklısı · Eskişehir</Text>
      </View>
      <View style={styles.stats}>
        {[
          { n: "12", l: "Hikaye" },
          { n: "3", l: "Atölye" },
          { n: "2", l: "Rota" },
        ].map((s) => (
          <View key={s.l} style={styles.stat}>
            <Text style={styles.statN}>{s.n}</Text>
            <Text style={styles.statL}>{s.l}</Text>
          </View>
        ))}
      </View>
      {menu.map(({ id, label, icon: Icon }) => (
        <Pressable key={id} style={styles.menuItem} onPress={() => onNavigate(id)}>
          <Icon size={20} color={colors.gold} />
          <Text style={styles.menuLabel}>{label}</Text>
          <ChevronRight size={16} color={colors.muted} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: { alignItems: "center", paddingTop: 24, paddingBottom: 16 },
  avatar: { width: 88, height: 88, borderRadius: 44, borderWidth: 2, borderColor: colors.gold },
  name: { fontFamily: "CormorantGaramond_500Medium", fontSize: 26, color: colors.textPrimary, marginTop: 16 },
  sub: { fontFamily: "Inter_400Regular", fontSize: 12, color: colors.textSecondary, marginTop: 4 },
  stats: { flexDirection: "row", marginHorizontal: 24, marginBottom: 24, backgroundColor: colors.card, borderRadius: radius.lg, padding: 20 },
  stat: { flex: 1, alignItems: "center" },
  statN: { fontFamily: "CormorantGaramond_600SemiBold", fontSize: 24, color: colors.gold },
  statL: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary, marginTop: 4 },
  menuItem: { flexDirection: "row", alignItems: "center", gap: 16, marginHorizontal: 24, padding: 16, backgroundColor: colors.card, borderRadius: radius.md, marginBottom: 8 },
  menuLabel: { flex: 1, fontFamily: "Inter_500Medium", fontSize: 15, color: colors.textPrimary },
});
