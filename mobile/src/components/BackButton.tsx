import { Pressable, StyleSheet } from "react-native";
import { ChevronLeft } from "lucide-react-native";

interface BackButtonProps {
  onPress: () => void;
  top?: number;
}

export function BackButton({ onPress, top = 48 }: BackButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, { top }]}>
      <ChevronLeft size={20} color="#FFFFFF" strokeWidth={1.5} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "rgba(10,10,10,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
});
