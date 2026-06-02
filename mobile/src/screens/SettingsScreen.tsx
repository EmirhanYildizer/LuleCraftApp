import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Bell, ChevronLeft, ChevronRight, Globe, HelpCircle, Info, Lock, Moon, Smartphone } from "lucide-react-native";
import { colors, radius, spacing } from "../theme";

const sections = [
  {
    title: "TERCIHLER",
    items: [
      { id: "notifications", label: "Bildirimler", desc: "Etkinlik ve atölye bildirimleri", icon: Bell },
      { id: "language", label: "Dil", desc: "Türkçe", icon: Globe },
      { id: "darkmode", label: "Karanlık Mod", desc: "Şu an aktif", icon: Moon },
    ],
  },
  {
    title: "GÜVENLİK",
    items: [
      { id: "privacy", label: "Gizlilik", desc: "Veri ve izin tercihleri", icon: Lock },
      { id: "device", label: "Cihaz Yönetimi", desc: "Aktif oturumlar", icon: Smartphone },
    ],
  },
  {
    title: "DESTEK",
    items: [
      { id: "help", label: "Yardım", desc: "SSS ve iletişim", icon: HelpCircle },
      { id: "about", label: "Hakkında", desc: "Versiyon 1.0 · LüleCraft", icon: Info },
    ],
  },
];

export function SettingsScreen({ onBack }: { onBack: () => void }) {
  return (
    <View style={styles.root}>
      {/* Üst bar — geri butonu + başlık */}
      <View style={styles.topBar}>
        <Pressable onPress={onBack} style={styles.backBtn}>
          <ChevronLeft size={20} color={colors.textPrimary} strokeWidth={1.5} />
        </Pressable>
        <Text style={styles.topTitle}>Ayarlar</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {sections.map((sec) => (
          <View key={sec.title} style={styles.section}>
            <Text style={styles.sectionLabel}>{sec.title}</Text>
            {sec.items.map(({ id, label, desc, icon: Icon }) => (
              <Pressable
                key={id}
                style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
              >
                <View style={styles.iconBox}>
                  <Icon size={17} color={colors.gold} strokeWidth={1.8} />
                </View>
                <View style={styles.itemText}>
                  <Text style={styles.itemLabel}>{label}</Text>
                  <Text style={styles.itemDesc}>{desc}</Text>
                </View>
                <ChevronRight size={15} color={colors.muted} strokeWidth={1.5} />
              </Pressable>
            ))}
          </View>
        ))}

        <Text style={styles.version}>LüleCraft v1.0 · Eskişehir Kültürel Miras Uygulaması</Text>
        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },
  backBtn: { width: 40, height: 40, borderRadius: 14, backgroundColor: "rgba(10,10,10,0.55)", alignItems: "center", justifyContent: "center" },
  topTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 20, color: colors.textPrimary },

  scroll: { paddingHorizontal: spacing.lg, paddingTop: 16 },
  section: { marginBottom: 24 },
  sectionLabel: { fontFamily: "Inter_500Medium", fontSize: 9, color: colors.gold, letterSpacing: 2, marginBottom: 10 },

  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 8,
  },
  itemPressed: { opacity: 0.7 },
  iconBox: { width: 36, height: 36, borderRadius: 10, backgroundColor: "rgba(201,164,106,0.1)", alignItems: "center", justifyContent: "center" },
  itemText: { flex: 1 },
  itemLabel: { fontFamily: "Inter_500Medium", fontSize: 14, color: colors.textPrimary },
  itemDesc: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary, marginTop: 2 },

  version: { textAlign: "center", fontFamily: "Inter_400Regular", fontSize: 10, color: colors.muted, letterSpacing: 0.8, marginTop: 8 },
});
