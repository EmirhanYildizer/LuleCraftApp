import { ScrollView, StyleSheet, Text, View } from "react-native";
import { notifications } from "../data";
import { BackButton } from "../components/BackButton";
import { colors } from "../theme";

export function NotificationsScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScrollView style={styles.root}>
      <BackButton onPress={onBack} top={16} />
      <Text style={styles.title}>Bildirimler</Text>
      {notifications.map((n) => (
        <View key={n.id} style={[styles.item, !n.read && styles.unread]}>
          <Text style={styles.itemTitle}>{n.title}</Text>
          <Text style={styles.body}>{n.body}</Text>
          <Text style={styles.time}>{n.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background, padding: 24, paddingTop: 80 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 32, color: colors.textPrimary, marginBottom: 24 },
  item: { padding: 16, backgroundColor: colors.card, borderRadius: 16, marginBottom: 8 },
  unread: { borderLeftWidth: 3, borderLeftColor: colors.gold },
  itemTitle: { fontFamily: "Inter_600SemiBold", fontSize: 14, color: colors.textPrimary },
  body: { fontFamily: "Inter_400Regular", fontSize: 13, color: colors.textSecondary, marginTop: 6, lineHeight: 20 },
  time: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.muted, marginTop: 8 },
});
