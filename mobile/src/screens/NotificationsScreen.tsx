import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Bell, BookOpen, Calendar, Hammer, MapPin } from "lucide-react-native";
import { BackButton } from "../components/BackButton";
import { colors, radius, spacing } from "../theme";

const notifData = [
  { id: "n1", type: "workshop", title: "Yarın Atölyeniz Var!", body: "Lületaşı'ya İlk Dokunuş atölyesi yarın saat 09:00'da başlıyor.", time: "2 saat önce", read: false },
  { id: "n2", type: "story", title: "Yeni Hikaye: Toprağın Oğulları", body: "Mehmet Çelik yeni hikayesini paylaştı. Okumaya hazır mısınız?", time: "1 gün önce", read: false },
  { id: "n3", type: "event", title: "Yakında: Lületaşı Festivali", body: "Eskişehir Lületaşı Festivali 3 Temmuz'da başlıyor. Erken kayıt fırsatı!", time: "2 gün önce", read: true },
  { id: "n4", type: "artisan", title: "Mehmet Usta yeni eserlerini ekledi", body: "4 yeni figüratif heykel galeriye eklendi.", time: "3 gün önce", read: true },
  { id: "n5", type: "route", title: "Rota önerisi: Odunpazarı", body: "Konumunuza yakın Odunpazarı Rotası'nı denediniz mi?", time: "5 gün önce", read: true },
];

const typeIcon = {
  workshop: Hammer,
  story: BookOpen,
  event: Calendar,
  artisan: Hammer,
  route: MapPin,
};

const typeColor = {
  workshop: "#C9A46A",
  story: "#8AA57B",
  event: "#9D6B53",
  artisan: "#C9A46A",
  route: "#E8DFC9",
};

export function NotificationsScreen({ onBack }: { onBack: () => void }) {
  const unread = notifData.filter((n) => !n.read);
  const read = notifData.filter((n) => n.read);

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <BackButton onPress={onBack} top={16} />

      <View style={styles.header}>
        <Text style={styles.title}>Bildirimler</Text>
        {unread.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unread.length} yeni</Text>
          </View>
        )}
      </View>

      {unread.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>YENİ</Text>
          {unread.map((n) => <NotifCard key={n.id} n={n} />)}
        </View>
      )}

      {read.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ÖNCEKİ</Text>
          {read.map((n) => <NotifCard key={n.id} n={n} />)}
        </View>
      )}

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

function NotifCard({ n }: { n: (typeof notifData)[0] }) {
  const Icon = typeIcon[n.type as keyof typeof typeIcon] ?? Bell;
  const color = typeColor[n.type as keyof typeof typeColor] ?? "#C9A46A";

  return (
    <View style={[styles.card, !n.read && styles.cardUnread]}>
      <View style={[styles.iconBox, { backgroundColor: color + "22" }]}>
        <Icon size={16} color={color} />
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardTop}>
          <Text style={styles.cardTitle}>{n.title}</Text>
          {!n.read && <View style={styles.dot} />}
        </View>
        <Text style={styles.cardBody2}>{n.body}</Text>
        <Text style={styles.cardTime}>{n.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: spacing.lg, paddingTop: 72, paddingBottom: 20 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 34, color: colors.textPrimary },
  badge: { backgroundColor: "rgba(201,164,106,0.2)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  badgeText: { fontFamily: "Inter_600SemiBold", fontSize: 11, color: colors.gold },
  section: { paddingHorizontal: spacing.lg, marginBottom: 8 },
  sectionLabel: { fontFamily: "Inter_500Medium", fontSize: 9, color: colors.gold, letterSpacing: 2, marginBottom: 10 },
  card: { flexDirection: "row", gap: 14, backgroundColor: colors.card, borderRadius: radius.md, padding: 14, marginBottom: 8 },
  cardUnread: { borderLeftWidth: 2.5, borderLeftColor: colors.gold },
  iconBox: { width: 38, height: 38, borderRadius: 12, alignItems: "center", justifyContent: "center", flexShrink: 0 },
  cardBody: { flex: 1 },
  cardTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  cardTitle: { fontFamily: "Inter_600SemiBold", fontSize: 13, color: colors.textPrimary, flex: 1 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.gold, marginLeft: 8 },
  cardBody2: { fontFamily: "Inter_400Regular", fontSize: 12, color: colors.textSecondary, lineHeight: 18, marginTop: 4 },
  cardTime: { fontFamily: "Inter_400Regular", fontSize: 10, color: colors.muted, marginTop: 6 },
});
