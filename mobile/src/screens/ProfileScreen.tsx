import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Bell, Bookmark, ChevronRight, Gem, LogOut, Settings, User } from "lucide-react-native";
import { AppAssets } from "../AppAssets";
import { colors, radius, spacing } from "../theme";
import type { NavigateFn } from "../navigation/types";

const menu = [
  { id: "favorites",      label: "Favorilerim",      desc: "Kaydettiğiniz hikayeler ve ustalar",  icon: Bookmark },
  { id: "virtual-carving",label: "Sanal Oymacılık",  desc: "Dijital ortamda eser oluşturun",       icon: Gem      },
  { id: "notifications",  label: "Bildirimler",       desc: "Etkinlik ve atölye bildirimleri",      icon: Bell     },
  { id: "settings",       label: "Ayarlar",           desc: "Hesap ve uygulama tercihleri",         icon: Settings },
];

const statItems = [
  { n: "12", l: "Hikaye" },
  { n: "3",  l: "Atölye" },
  { n: "2",  l: "Rota"   },
];

export function ProfileScreen({ onNavigate }: { onNavigate: NavigateFn }) {
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {/* Hero arka planı */}
      <View style={styles.hero}>
        <Image source={{ uri: AppAssets.luleWorkshop }} style={StyleSheet.absoluteFill} contentFit="cover" />
        <LinearGradient
          colors={["rgba(10,10,10,0.25)", "rgba(10,10,10,0.7)", colors.background]}
          style={StyleSheet.absoluteFill}
        />

        {/* Avatar + isim */}
        <View style={styles.profileBlock}>
          <View style={styles.avatarRing}>
            <Image source={{ uri: AppAssets.profileAvatar }} style={styles.avatar} contentFit="cover" />
          </View>
          <Text style={styles.name}>Zeynep Arslan</Text>
          <Text style={styles.sub}>Kültür Meraklısı · Eskişehir</Text>

          {/* İstatistikler */}
          <View style={styles.stats}>
            {statItems.map((s, i) => (
              <View key={s.l} style={[styles.stat, i < statItems.length - 1 && styles.statBorder]}>
                <Text style={styles.statN}>{s.n}</Text>
                <Text style={styles.statL}>{s.l}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Menü */}
      <View style={styles.menuList}>
        <Text style={styles.menuSection}>HESABIM</Text>
        {menu.map(({ id, label, desc, icon: Icon }) => (
          <Pressable
            key={id}
            style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemPressed]}
            onPress={() => onNavigate(id)}
          >
            <View style={styles.menuIcon}>
              <Icon size={18} color={colors.gold} strokeWidth={1.8} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.menuLabel}>{label}</Text>
              <Text style={styles.menuDesc}>{desc}</Text>
            </View>
            <ChevronRight size={16} color={colors.muted} strokeWidth={1.5} />
          </Pressable>
        ))}

        {/* Çıkış */}
        <Pressable
          style={({ pressed }) => [styles.menuItem, styles.menuItemLogout, pressed && styles.menuItemPressed]}
          onPress={() => {}}
        >
          <View style={[styles.menuIcon, styles.menuIconLogout]}>
            <LogOut size={18} color="#E07070" strokeWidth={1.8} />
          </View>
          <Text style={styles.menuLabelLogout}>Çıkış Yap</Text>
        </Pressable>
      </View>

      {/* App versiyon */}
      <Text style={styles.version}>LüleCraft v1.0 · Eskişehir Kültürel Miras</Text>
      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },

  hero: { height: 360, justifyContent: "flex-end" },
  profileBlock: { alignItems: "center", paddingBottom: 24, paddingHorizontal: spacing.lg },

  avatarRing: { width: 96, height: 96, borderRadius: 48, padding: 3, backgroundColor: "rgba(10,10,10,0.6)", borderWidth: 2, borderColor: colors.gold, marginBottom: 14 },
  avatar: { flex: 1, borderRadius: 44 },

  name: { fontFamily: "CormorantGaramond_500Medium", fontSize: 28, color: colors.textPrimary },
  sub: { fontFamily: "Inter_300Light", fontSize: 12, color: colors.textSecondary, marginTop: 4, letterSpacing: 0.3 },

  stats: { flexDirection: "row", marginTop: 20, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: radius.md, overflow: "hidden" },
  stat: { flex: 1, alignItems: "center", paddingVertical: 14 },
  statBorder: { borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: "rgba(255,255,255,0.1)" },
  statN: { fontFamily: "CormorantGaramond_600SemiBold", fontSize: 26, color: colors.gold },
  statL: { fontFamily: "Inter_400Regular", fontSize: 10, color: colors.textSecondary, marginTop: 3, letterSpacing: 0.5 },

  menuList: { paddingHorizontal: spacing.lg, paddingTop: 8 },
  menuSection: { fontFamily: "Inter_500Medium", fontSize: 9, color: colors.gold, letterSpacing: 2, marginBottom: 14 },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: 16,
    marginBottom: 8,
  },
  menuItemPressed: { opacity: 0.7, transform: [{ scale: 0.98 }] },
  menuItemLogout: { marginTop: 8 },
  menuIcon: { width: 38, height: 38, borderRadius: 12, backgroundColor: "rgba(201,164,106,0.12)", alignItems: "center", justifyContent: "center" },
  menuIconLogout: { backgroundColor: "rgba(224,112,112,0.1)" },
  menuText: { flex: 1 },
  menuLabel: { fontFamily: "Inter_500Medium", fontSize: 15, color: colors.textPrimary },
  menuDesc: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary, marginTop: 2 },
  menuLabelLogout: { flex: 1, fontFamily: "Inter_500Medium", fontSize: 15, color: "#E07070" },

  version: { textAlign: "center", fontFamily: "Inter_400Regular", fontSize: 10, color: colors.muted, letterSpacing: 1, marginTop: 16 },
});
