import { TextStyle } from "react-native";
import { colors } from "./theme";

type FontFamily = "serif" | "sans";

export function textStyle(
  variant: "display" | "heading" | "subheading" | "body" | "caption" | "label",
  options?: { color?: string; font?: FontFamily; weight?: TextStyle["fontWeight"] }
): TextStyle {
  const font = options?.font ?? (variant === "display" || variant === "heading" ? "serif" : "sans");
  const family = font === "serif" ? "CormorantGaramond_400Regular" : "Inter_400Regular";
  const sizes: Record<typeof variant, number> = {
    display: 36,
    heading: 28,
    subheading: 20,
    body: 13,
    caption: 11,
    label: 10,
  };
  return {
    fontFamily: family,
    fontSize: sizes[variant],
    color: options?.color ?? colors.textPrimary,
    fontWeight: options?.weight,
  };
}
