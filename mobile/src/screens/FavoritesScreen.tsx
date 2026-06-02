import { ScrollView, StyleSheet, Text, View } from "react-native";
import { stories } from "../data";
import { BackButton } from "../components/BackButton";
import { colors } from "../theme";

export function FavoritesScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScrollView style={styles.root}>
      <BackButton onPress={onBack} top={16} />
      <Text style={styles.title}>Favorilerim</Text>
      {stories.slice(0, 2).map((s) => (
        <View key={s.id} style={styles.item}>
          <Text style={styles.itemTitle}>{s.title}</Text>
          <Text style={styles.itemCat}>{s.category}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background, padding: 24, paddingTop: 80 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 32, color: colors.textPrimary, marginBottom: 24 },
  item: { padding: 16, backgroundColor: colors.card, borderRadius: 16, marginBottom: 8 },
  itemTitle: { fontFamily: "Inter_500Medium", fontSize: 15, color: colors.textPrimary },
  itemCat: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.gold, marginTop: 4 },
});
