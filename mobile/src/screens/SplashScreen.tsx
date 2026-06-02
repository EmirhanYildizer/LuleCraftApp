import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { LocalAssets } from "../AppAssets";
import { colors } from "../theme";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
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
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [fade, onComplete, progress]);

  const barWidth = progress.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] });

  return (
    <Animated.View style={[styles.root, { opacity: fade }]}>
      {/* Arka plan: oymacılık / usta elleri */}
      <Image source={LocalAssets.carvingHero} style={StyleSheet.absoluteFill} contentFit="cover" />
      <LinearGradient
        colors={["rgba(10,10,10,0.25)", "rgba(10,10,10,0.55)", "rgba(10,10,10,0.97)"]}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.center}>
        {/* Dekoratif çerçeve */}
        <View style={styles.emblem}>
          <View style={styles.emblemOuter} />
          <View style={styles.emblemInner} />
          <Text style={styles.emblemIcon}>◈</Text>
        </View>

        <View style={styles.logoBlock}>
          <View style={styles.dividerRow}>
            <View style={styles.divLine} />
            <Text style={styles.brandSmall}>ESKİŞEHİR</Text>
            <View style={styles.divLine} />
          </View>
          <Text style={styles.brand}>LÜLETAŞI</Text>
          <Text style={styles.sub}>KÜLTÜREL MİRAS UYGULAMASI</Text>
        </View>

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

  emblem: { alignItems: "center", justifyContent: "center", width: 80, height: 80, marginBottom: 24 },
  emblemOuter: { position: "absolute", width: 80, height: 80, borderRadius: 40, borderWidth: 0.8, borderColor: "rgba(201,164,106,0.5)" },
  emblemInner: { position: "absolute", width: 60, height: 60, borderRadius: 30, borderWidth: 0.4, borderColor: "rgba(201,164,106,0.25)" },
  emblemIcon: { fontSize: 28, color: colors.gold, opacity: 0.9 },

  logoBlock: { alignItems: "center", gap: 6 },
  dividerRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  divLine: { width: 28, height: 1, backgroundColor: colors.gold, opacity: 0.6 },
  brandSmall: { fontFamily: "Inter_500Medium", fontSize: 8, letterSpacing: 4, color: colors.gold },
  brand: { fontFamily: "CormorantGaramond_300Light", fontSize: 52, color: colors.textPrimary, letterSpacing: 6 },
  sub: { fontFamily: "Inter_400Regular", fontSize: 9, letterSpacing: 2, color: "rgba(232,223,201,0.6)" },
  tagline: { fontFamily: "CormorantGaramond_400Regular", fontSize: 15, fontStyle: "italic", color: "rgba(201,164,106,0.75)", marginTop: 28, textAlign: "center", lineHeight: 22 },

  footer: { alignItems: "center", paddingBottom: 64, gap: 10 },
  barTrack: { width: 40, height: 1, backgroundColor: "rgba(201,164,106,0.3)", overflow: "hidden" },
  barFill: { height: 1, backgroundColor: colors.gold },
  loading: { fontFamily: "Inter_400Regular", fontSize: 8, letterSpacing: 3, color: "rgba(176,176,176,0.4)" },
});
