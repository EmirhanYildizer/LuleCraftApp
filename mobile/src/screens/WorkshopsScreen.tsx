import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Clock, Star } from "lucide-react-native";
import { workshops } from "../data";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

export function WorkshopsScreen({ onNavigate }: { onNavigate: NavigateFn }) {
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.label}>DENEYİM</Text>
        <Text style={styles.title}>Atölyeler</Text>
      </View>
      {workshops.map((w) => (
        <Pressable key={w.id} style={styles.card} onPress={() => onNavigate("workshop-detail", { id: w.id })}>
          <Image source={{ uri: w.image }} style={styles.img} contentFit="cover" />
          <View style={styles.info}>
            <Text style={styles.level}>{w.level}</Text>
            <Text style={styles.cardTitle}>{w.title}</Text>
            <Text style={styles.instructor}>{w.instructor}</Text>
            <View style={styles.meta}>
              <Clock size={10} color={colors.textSecondary} />
              <Text style={styles.metaText}>{w.duration}</Text>
              <Star size={10} color={colors.gold} fill={colors.gold} />
              <Text style={styles.metaText}>{w.rating}</Text>
            </View>
            <Text style={styles.price}>{w.price}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: { padding: 24, paddingTop: 16 },
  label: { fontFamily: "Inter_500Medium", fontSize: 10, letterSpacing: 2, color: colors.gold },
  title: { fontFamily: "CormorantGaramond_300Light", fontSize: 36, color: colors.textPrimary },
  card: { marginHorizontal: 24, marginBottom: 16, borderRadius: radius.lg, overflow: "hidden", backgroundColor: colors.card },
  img: { width: "100%", height: 160 },
  info: { padding: 16 },
  level: { fontFamily: "Inter_600SemiBold", fontSize: 9, color: colors.success, letterSpacing: 1 },
  cardTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 20, color: colors.textPrimary, marginTop: 6 },
  instructor: { fontFamily: "Inter_400Regular", fontSize: 12, color: colors.gold, marginTop: 4 },
  meta: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 8 },
  metaText: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary },
  price: { fontFamily: "CormorantGaramond_600SemiBold", fontSize: 18, color: colors.gold, marginTop: 8 },
});
