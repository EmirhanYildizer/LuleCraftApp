import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { BackButton } from "../components/BackButton";
import { colors, radius } from "../theme";

const locations: Record<string, { name: string; type: string; address: string; hours?: string; description: string; image: string }> = {
  "1": {
    name: "Mehmet Usta Atölyesi",
    type: "Atölye",
    address: "Odunpazarı Mah. No: 14, Eskişehir",
    hours: "09:00 – 18:00",
    description: "1978'den bu yana faaliyet gösteren bu tarihi atölye, dört neslin el emeğini barındırır.",
    image: "https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=800&q=80",
  },
  "2": {
    name: "Lületaşı Müzesi",
    type: "Müze",
    address: "Tarihi Çarşı, Eskişehir",
    hours: "10:00 – 17:00",
    description: "800'den fazla eserin sergilendiği bu müze, lületaşının binlerce yıllık tarihini belgelemektedir.",
    image: "https://images.unsplash.com/photo-1511306162219-1c5a469ab86c?w=800&q=80",
  },
};

export function LocationDetailScreen({ locationId, onBack }: { locationId: string; onBack: () => void }) {
  const loc = locations[locationId] ?? {
    name: "Odunpazarı Atölyesi",
    type: "Atölye",
    address: "Odunpazarı, Eskişehir",
    hours: "09:00 – 18:00",
    description: "Tarihi Odunpazarı semtinde geleneksel lületaşı sanatının yaşatıldığı kültürel mekan.",
    image: "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=800&q=80",
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Image source={{ uri: loc.image }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient colors={["rgba(10,10,10,0.2)", colors.background]} style={StyleSheet.absoluteFill} />
        <BackButton onPress={onBack} />
        <View style={styles.heroText}>
          <Text style={styles.badge}>{loc.type.toUpperCase()}</Text>
          <Text style={styles.title}>{loc.name}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.address}>{loc.address}</Text>
        {loc.hours && <Text style={styles.hours}>{loc.hours}</Text>}
        <Text style={styles.desc}>{loc.description}</Text>
        <Pressable style={styles.cta}>
          <Text style={styles.ctaText}>Yol Tarifi Al</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  hero: { height: 300 },
  heroText: { position: "absolute", bottom: 20, left: 24, right: 24 },
  badge: { fontFamily: "Inter_600SemiBold", fontSize: 9, color: colors.background, backgroundColor: colors.gold, alignSelf: "flex-start", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, overflow: "hidden", marginBottom: 8 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 30, color: colors.textPrimary },
  body: { padding: 24 },
  address: { fontFamily: "Inter_400Regular", fontSize: 13, color: colors.ivory },
  hours: { fontFamily: "Inter_400Regular", fontSize: 13, color: colors.success, marginTop: 8 },
  desc: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, lineHeight: 22, marginTop: 16 },
  cta: { marginTop: 24, backgroundColor: colors.gold, borderRadius: radius.lg, paddingVertical: 16, alignItems: "center" },
  ctaText: { fontFamily: "Inter_600SemiBold", fontSize: 15, color: colors.background },
});
