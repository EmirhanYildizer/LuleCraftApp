import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../theme";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showTagline, setShowTagline] = useState(false);
  const fade = useRef(new Animated.Value(1)).current;
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const t1 = setTimeout(() => setShowTagline(true), 900);
    const t2 = setTimeout(() => {
      Animated.timing(fade, { toValue: 0, duration: 700, useNativeDriver: true }).start();
    }, 2400);
    const t3 = setTimeout(onComplete, 3200);
    Animated.timing(progress, { toValue: 1, duration: 2200, useNativeDriver: false }).start();
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [fade, onComplete, progress]);

  const barWidth = progress.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] });

  return (
    <Animated.View style={[styles.root, { opacity: fade }]}>
      <Image source={{ uri: "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=800&q=80" }} style={StyleSheet.absoluteFill} contentFit="cover" />
      <LinearGradient colors={["rgba(10,10,10,0.3)", "rgba(10,10,10,0.6)", "rgba(10,10,10,0.95)"]} style={StyleSheet.absoluteFill} />
      <View style={styles.center}>
        <Text style={styles.brandSmall}>ESKİŞEHİR</Text>
        <Text style={styles.brand}>LÜLETAŞI</Text>
        <Text style={styles.sub}>KÜLTÜREL MİRAS UYGULAMASI</Text>
        {showTagline && (
          <Text style={styles.tagline}>"Her eserin ardında gizli bir hikaye vardır."</Text>
        )}
      </View>
      <View style={styles.footer}>
        <View style={styles.barTrack}>
          <Animated.View style={[styles.barFill, { width: barWidth }]} />
        </View>
        <Text style={styles.loading}>YÜKLENIYOR</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  center: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 24 },
  brandSmall: { fontFamily: "Inter_500Medium", fontSize: 8, letterSpacing: 4, color: colors.gold, marginBottom: 8 },
  brand: { fontFamily: "CormorantGaramond_300Light", fontSize: 48, color: colors.textPrimary, letterSpacing: 2 },
  sub: { fontFamily: "Inter_400Regular", fontSize: 9, letterSpacing: 2, color: "rgba(232,223,201,0.7)", marginTop: 8 },
  tagline: { fontFamily: "CormorantGaramond_400Regular", fontSize: 16, fontStyle: "italic", color: "rgba(201,164,106,0.8)", marginTop: 24, textAlign: "center" },
  footer: { alignItems: "center", paddingBottom: 64, gap: 12 },
  barTrack: { width: 40, height: 1, backgroundColor: "rgba(201,164,106,0.4)", overflow: "hidden" },
  barFill: { height: 1, backgroundColor: colors.gold },
  loading: { fontFamily: "Inter_400Regular", fontSize: 8, letterSpacing: 3, color: "rgba(176,176,176,0.5)" },
});
