import { Pressable, StyleSheet } from "react-native";
import { ChevronLeft } from "lucide-react-native";

interface BackButtonProps {
  onPress: () => void;
  top?: number;
}

export function BackButton({ onPress, top = 56 }: BackButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, { top }]}>
      <ChevronLeft size={20} color="#FFFFFF" strokeWidth={1.5} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: 24,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "rgba(10,10,10,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
});
