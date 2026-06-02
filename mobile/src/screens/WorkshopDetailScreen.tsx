import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { workshops } from "../data";
import { BackButton } from "../components/BackButton";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

export function WorkshopDetailScreen({ workshopId, onBack, onNavigate }: { workshopId: string; onBack: () => void; onNavigate: NavigateFn }) {
  const w = workshops.find((x) => x.id === workshopId) ?? workshops[0];

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Image source={{ uri: w.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient colors={["transparent", colors.background]} style={StyleSheet.absoluteFill} />
        <BackButton onPress={onBack} />
        <Text style={styles.heroTitle}>{w.title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.desc}>{w.description}</Text>
        {w.agenda.map((item) => (
          <View key={item.time} style={styles.agendaRow}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.agendaItem}>{item.item}</Text>
          </View>
        ))}
        <Pressable style={styles.cta} onPress={() => onNavigate("reservation", { workshopId: w.id })}>
          <Text style={styles.ctaText}>Rezervasyon Yap — {w.price}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  hero: { height: 300, justifyContent: "flex-end", padding: 24 },
  heroTitle: { fontFamily: "CormorantGaramond_400Regular", fontSize: 28, color: colors.textPrimary },
  body: { padding: 24 },
  desc: { fontFamily: "Inter_300Light", fontSize: 14, color: colors.textSecondary, lineHeight: 22 },
  agendaRow: { flexDirection: "row", gap: 16, marginTop: 12, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.06)" },
  time: { fontFamily: "Inter_600SemiBold", fontSize: 12, color: colors.gold, width: 48 },
  agendaItem: { flex: 1, fontFamily: "Inter_400Regular", fontSize: 13, color: colors.ivory },
  cta: { marginTop: 32, backgroundColor: colors.gold, borderRadius: radius.lg, paddingVertical: 16, alignItems: "center" },
  ctaText: { fontFamily: "Inter_600SemiBold", fontSize: 15, color: colors.background },
});
