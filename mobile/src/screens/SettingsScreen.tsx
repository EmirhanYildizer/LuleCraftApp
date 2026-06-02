import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { colors } from "../theme";

const items = ["Bildirimler", "Dil", "Gizlilik", "Hakkında", "Yardım"];

export function SettingsScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScrollView style={styles.root}>
      <BackButton onPress={onBack} top={16} />
      <Text style={styles.title}>Ayarlar</Text>
      {items.map((label) => (
        <View key={label} style={styles.item}>
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background, padding: 24, paddingTop: 80 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 32, color: colors.textPrimary, marginBottom: 24 },
  item: { padding: 16, backgroundColor: colors.card, borderRadius: 16, marginBottom: 8 },
  label: { fontFamily: "Inter_500Medium", fontSize: 15, color: colors.textPrimary },
});
