import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Eye, Lock } from "lucide-react-native";
import { AppAssets } from "../AppAssets";
import { BackButton } from "../components/BackButton";
import { colors, radius } from "../theme";

export function ARScreen({ onBack }: { onBack: () => void }) {
  const previewItems = [
    { title: "Geleneksel Pipo", img: AppAssets.lulePipe },
    { title: "Kolye", img: AppAssets.luleJewelry },
    { title: "Figür Heykel", img: AppAssets.luleFigure },
    { title: "Atölye Ortamı", img: AppAssets.luleWorkshop },
  ];

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <BackButton onPress={onBack} top={16} />

      {/* Mock AR Kamera Alanı */}
      <View style={styles.cameraArea}>
        <Image source={{ uri: AppAssets.eskisehir }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <View style={styles.cameraOverlay}>
          <View style={[styles.corner, styles.cornerTL]} />
          <View style={[styles.corner, styles.cornerTR]} />
          <View style={[styles.corner, styles.cornerBL]} />
          <View style={[styles.corner, styles.cornerBR]} />
          <View style={styles.comingSoonBadge}>
            <Lock size={14} color={colors.gold} />
            <Text style={styles.comingSoonText}>YAKINDA</Text>
          </View>
          <Text style={styles.cameraHint}>
            AR modu hazırlandığında lületaşı eserlerini{"\n"}kendi ortamınızda göreceksiniz
          </Text>
        </View>
      </View>

      {/* Açıklama */}
      <View style={styles.info}>
        <View style={styles.iconWrap}>
          <Eye size={22} color={colors.gold} />
        </View>
        <Text style={styles.title}>Artırılmış Gerçeklik</Text>
        <Text style={styles.desc}>
          Lületaşı eserlerini telefonunuzun kamerasıyla gerçek ortamınıza yerleştirin. Satın almadan önce evinizde veya elinizdeki görünümünü inceleyin.
        </Text>
      </View>

      {/* Eser Önizleme Listesi */}
      <Text style={styles.sectionTitle}>AR İLE GÖRÜNTÜLENEBİLECEK ESERLER</Text>
      <View style={styles.grid}>
        {previewItems.map((item) => (
          <Pressable key={item.title} style={styles.gridItem}>
            <Image source={{ uri: item.img }} style={styles.gridImg} contentFit="cover" />
            <View style={styles.gridOverlay}>
              <Eye size={16} color="rgba(255,255,255,0.6)" />
            </View>
            <Text style={styles.gridLabel}>{item.title}</Text>
          </Pressable>
        ))}
      </View>

      {/* CTA */}
      <View style={styles.ctaCard}>
        <Text style={styles.ctaTitle}>AR Özelliği Geliyor</Text>
        <Text style={styles.ctaSub}>
          Kamera iznini şimdiden hazırlıyoruz. Güncelleme geldiğinde bildirim alın.
        </Text>
        <Pressable style={styles.ctaBtn}>
          <Text style={styles.ctaBtnText}>Beni Haberdar Et</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  container: { paddingBottom: 40 },
  cameraArea: { height: 260, position: "relative" },
  cameraOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(10,10,10,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  corner: { position: "absolute", width: 20, height: 20, borderColor: colors.gold },
  cornerTL: { top: 16, left: 16, borderTopWidth: 2, borderLeftWidth: 2 },
  cornerTR: { top: 16, right: 16, borderTopWidth: 2, borderRightWidth: 2 },
  cornerBL: { bottom: 16, left: 16, borderBottomWidth: 2, borderLeftWidth: 2 },
  cornerBR: { bottom: 16, right: 16, borderBottomWidth: 2, borderRightWidth: 2 },
  comingSoonBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(10,10,10,0.8)",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gold,
    marginBottom: 12,
  },
  comingSoonText: { fontFamily: "Inter_600SemiBold", fontSize: 11, color: colors.gold, letterSpacing: 2 },
  cameraHint: { fontFamily: "Inter_300Light", fontSize: 12, color: "rgba(255,255,255,0.7)", textAlign: "center", lineHeight: 18 },
  info: { alignItems: "center", paddingHorizontal: 24, paddingVertical: 20 },
  iconWrap: { width: 52, height: 52, borderRadius: 26, backgroundColor: "rgba(201,164,106,0.12)", alignItems: "center", justifyContent: "center", marginBottom: 12 },
  title: { fontFamily: "CormorantGaramond_500Medium", fontSize: 24, color: colors.textPrimary },
  desc: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, textAlign: "center", lineHeight: 20, marginTop: 8 },
  sectionTitle: { fontFamily: "Inter_500Medium", fontSize: 10, color: colors.gold, letterSpacing: 2, marginHorizontal: 24, marginBottom: 12 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10, paddingHorizontal: 24, marginBottom: 24 },
  gridItem: { width: "47%", borderRadius: radius.md, overflow: "hidden", backgroundColor: colors.card },
  gridImg: { width: "100%", height: 90 },
  gridOverlay: { position: "absolute", top: 8, right: 8, backgroundColor: "rgba(0,0,0,0.5)", padding: 4, borderRadius: 8 },
  gridLabel: { fontFamily: "Inter_500Medium", fontSize: 12, color: colors.textPrimary, padding: 10 },
  ctaCard: { marginHorizontal: 24, backgroundColor: "rgba(201,164,106,0.12)", borderRadius: radius.lg, padding: 20, borderWidth: 1, borderColor: "rgba(201,164,106,0.25)" },
  ctaTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 20, color: colors.textPrimary },
  ctaSub: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, lineHeight: 20, marginTop: 8 },
  ctaBtn: { marginTop: 16, backgroundColor: colors.gold, borderRadius: radius.md, paddingVertical: 12, alignItems: "center" },
  ctaBtnText: { fontFamily: "Inter_600SemiBold", fontSize: 14, color: colors.background },
});
