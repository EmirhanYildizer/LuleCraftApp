import { Pressable, StyleSheet, Text, View } from "react-native";
import { BookOpen, Compass, Map, Scissors, User } from "lucide-react-native";
import { colors } from "../theme";
import type { Tab } from "../navigation/types";

interface BottomNavProps {
  active: Tab;
  onNavigate: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; Icon: typeof Compass }[] = [
  { id: "home", label: "Keşfet", Icon: Compass },
  { id: "stories", label: "Hikayeler", Icon: BookOpen },
  { id: "map", label: "Harita", Icon: Map },
  { id: "workshops", label: "Atölyeler", Icon: Scissors },
  { id: "profile", label: "Profil", Icon: User },
];

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <View style={styles.container}>
      {tabs.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <Pressable key={id} onPress={() => onNavigate(id)} style={styles.tab}>
            <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
              <Icon size={22} color={isActive ? colors.gold : colors.muted} strokeWidth={isActive ? 2 : 1.5} />
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 8,
    paddingBottom: 28,
    paddingHorizontal: 8,
    backgroundColor: "rgba(18,18,18,0.95)",
    borderTopWidth: 1,
    borderTopColor: "rgba(201,164,106,0.15)",
  },
  tab: { alignItems: "center", paddingVertical: 4, paddingHorizontal: 12, minWidth: 56 },
  iconWrap: { padding: 4, borderRadius: 12 },
  iconWrapActive: { backgroundColor: "rgba(201,164,106,0.12)" },
  label: { fontFamily: "Inter_400Regular", fontSize: 9, color: colors.muted, marginTop: 2 },
  labelActive: { color: colors.gold, fontFamily: "Inter_600SemiBold" },
});
