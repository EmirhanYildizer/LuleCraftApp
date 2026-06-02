import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { workshopsData } from "../data/workshopsData";
import { BackButton } from "../components/BackButton";
import { colors, radius } from "../theme";
import type { NavigateFn } from "../navigation/types";

const NEXT_DATES = ["15 Haziran 2025", "22 Haziran 2025", "29 Haziran 2025"];

export function ReservationScreen({ workshopId, onBack, onNavigate }: { workshopId: string; onBack: () => void; onNavigate: NavigateFn }) {
  const w = workshopsData.find((x) => x.id === workshopId) ?? workshopsData[0];
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  if (step === 2) {
    return (
      <View style={styles.root}>
        <View style={styles.confirm}>
          <Text style={styles.confirmTitle}>Rezervasyon Onaylandı</Text>
          <Text style={styles.confirmSub}>{w.title}</Text>
          <Text style={styles.confirmDate}>{selectedDate}</Text>
          <Pressable style={styles.cta} onPress={() => onNavigate("discover")}>
            <Text style={styles.ctaText}>Ana Sayfaya Dön</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.root}>
      <BackButton onPress={onBack} top={16} />
      <View style={styles.body}>
        <Text style={styles.title}>Rezervasyon</Text>
        <Text style={styles.sub}>{w.title}</Text>
        <Text style={styles.stepLabel}>{step === 0 ? "Tarih seçin" : "Onaylayın"}</Text>
        {step === 0 &&
          NEXT_DATES.map((d) => (
            <Pressable key={d} style={[styles.dateBtn, selectedDate === d && styles.dateBtnActive]} onPress={() => setSelectedDate(d)}>
              <Text style={[styles.dateText, selectedDate === d && styles.dateTextActive]}>{d}</Text>
            </Pressable>
          ))}
        <Pressable
          style={[styles.cta, !selectedDate && step === 0 && styles.ctaDisabled]}
          disabled={step === 0 && !selectedDate}
          onPress={() => (step === 0 ? setStep(1) : setStep(2))}
        >
          <Text style={styles.ctaText}>{step === 0 ? "Devam" : "Onayla"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  body: { padding: 24, paddingTop: 80 },
  title: { fontFamily: "CormorantGaramond_400Regular", fontSize: 32, color: colors.textPrimary },
  sub: { fontFamily: "Inter_400Regular", fontSize: 14, color: colors.textSecondary, marginTop: 8 },
  stepLabel: { fontFamily: "Inter_500Medium", fontSize: 12, color: colors.gold, marginTop: 24, marginBottom: 16 },
  dateBtn: { padding: 16, borderRadius: radius.md, backgroundColor: colors.card, marginBottom: 8, borderWidth: 1, borderColor: "rgba(255,255,255,0.06)" },
  dateBtnActive: { borderColor: colors.gold, backgroundColor: "rgba(201,164,106,0.15)" },
  dateText: { fontFamily: "Inter_400Regular", fontSize: 14, color: colors.textSecondary },
  dateTextActive: { color: colors.gold, fontFamily: "Inter_600SemiBold" },
  cta: { marginTop: 32, backgroundColor: colors.gold, borderRadius: radius.lg, paddingVertical: 16, alignItems: "center" },
  ctaDisabled: { opacity: 0.4 },
  ctaText: { fontFamily: "Inter_600SemiBold", fontSize: 15, color: colors.background },
  confirm: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  confirmTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 28, color: colors.gold },
  confirmSub: { fontFamily: "Inter_400Regular", fontSize: 16, color: colors.textPrimary, marginTop: 12, textAlign: "center" },
  confirmDate: { fontFamily: "Inter_400Regular", fontSize: 14, color: colors.textSecondary, marginTop: 8 },
});
