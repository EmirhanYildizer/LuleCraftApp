import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Search } from "lucide-react-native";
import { artisans, stories, workshops } from "../data";
import { BackButton } from "../components/BackButton";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

export function SearchScreen({ onBack, onNavigate }: { onBack: () => void; onNavigate: NavigateFn }) {
  const [q, setQ] = useState("");
  const lower = q.toLowerCase();
  const results = q.length < 2 ? [] : [
    ...stories.filter((s) => s.title.toLowerCase().includes(lower)).map((s) => ({ type: "story", id: s.id, title: s.title })),
    ...artisans.filter((a) => a.name.toLowerCase().includes(lower)).map((a) => ({ type: "artisan", id: a.id, title: a.name })),
    ...workshops.filter((w) => w.title.toLowerCase().includes(lower)).map((w) => ({ type: "workshop", id: w.id, title: w.title })),
  ];

  return (
    <View style={styles.root}>
      <BackButton onPress={onBack} top={16} />
      <View style={styles.searchRow}>
        <Search size={18} color={colors.textSecondary} />
        <TextInput style={styles.input} placeholder="Hikaye, usta veya atölye ara..." placeholderTextColor={colors.muted} value={q} onChangeText={setQ} autoFocus />
      </View>
      <ScrollView contentContainerStyle={{ padding: 24, paddingTop: 80 }}>
        {results.map((r) => (
          <Pressable
            key={`${r.type}-${r.id}`}
            style={styles.result}
            onPress={() => onNavigate(r.type === "story" ? "story-detail" : r.type === "artisan" ? "artisan" : "workshop-detail", { id: r.id })}
          >
            <Text style={styles.resultTitle}>{r.title}</Text>
            <Text style={styles.resultType}>{r.type}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  searchRow: { flexDirection: "row", alignItems: "center", gap: 12, marginHorizontal: 24, marginTop: 72, padding: 14, backgroundColor: colors.card, borderRadius: radius.md },
  input: { flex: 1, fontFamily: "Inter_400Regular", fontSize: 15, color: colors.textPrimary },
  result: { padding: 16, backgroundColor: colors.card, borderRadius: radius.md, marginBottom: 8 },
  resultTitle: { fontFamily: "Inter_500Medium", fontSize: 15, color: colors.textPrimary },
  resultType: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.gold, marginTop: 4, textTransform: "capitalize" },
});
