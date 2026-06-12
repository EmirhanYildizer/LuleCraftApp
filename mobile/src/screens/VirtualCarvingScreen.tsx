import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { CheckCircle2, ChevronLeft, ChevronRight, Gem } from "lucide-react-native";
import { AppAssets } from "../AppAssets";
import { colors, radius, spacing } from "../theme";

/* ─── Veri ─────────────────────────────────────────────────── */
const STONES = [
  { id: "raw", label: "Ham Taş", sub: "Doğal yüzey", img: AppAssets.vcStoneRaw },
  { id: "smooth", label: "İşlenmiş", sub: "Parlak yüzey", img: AppAssets.vcStoneSmooth },
  { id: "large", label: "Büyük Blok", sub: "Detay çalışması", img: AppAssets.vcStoneLarge },
];

const SHAPES = [
  { id: "pipe",     label: "Pipo",   emoji: "🪵", img: AppAssets.shapePipe     },
  { id: "necklace", label: "Kolye",  emoji: "💎", img: AppAssets.shapeNecklace },
  { id: "figure",   label: "Figür",  emoji: "🗿", img: AppAssets.shapeFigure   },
  { id: "beads",    label: "Tesbih", emoji: "📿", img: AppAssets.shapeBeads    },
  { id: "ring",     label: "Yüzük",  emoji: "💍", img: AppAssets.shapeRing     },
];

const PATTERNS = [
  { id: "plain", label: "Düz", desc: "Sade, minimalist" },
  { id: "arabesque", label: "Arabesk", desc: "Osmanlı motifleri" },
  { id: "dotted", label: "Noktalı", desc: "Geleneksel teknik" },
  { id: "linear", label: "Çizgisel", desc: "Modern yorum" },
  { id: "ottoman", label: "Osmanlı", desc: "Tarihi desenler" },
];

const STEPS = ["Taş Seç", "Şekil Seç", "Desen Seç", "Önizleme"];

/* ─── Bileşen ──────────────────────────────────────────────── */
export function VirtualCarvingScreen({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(0);
  const [stone, setStone] = useState<string | null>(null);
  const [shape, setShape] = useState<string | null>(null);
  const [pattern, setPattern] = useState<string | null>(null);

  const currentValid =
    (step === 0 && !!stone) ||
    (step === 1 && !!shape) ||
    (step === 2 && !!pattern) ||
    step === 3;

  const selectedStone = STONES.find((s) => s.id === stone);
  const selectedShape = SHAPES.find((s) => s.id === shape);
  const selectedPattern = PATTERNS.find((p) => p.id === pattern);

  return (
    <View style={styles.root}>
      {/* Üst başlık */}
      <View style={styles.topBar}>
        <Pressable onPress={onBack} style={styles.backBtn}>
          <ChevronLeft size={20} color={colors.textPrimary} strokeWidth={1.5} />
        </Pressable>
        <View style={styles.topCenter}>
          <Gem size={16} color={colors.gold} />
          <Text style={styles.topTitle}>Sanal Oymacılık</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Adım göstergesi */}
      <View style={styles.stepper}>
        {STEPS.map((label, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <View key={label} style={styles.stepWrap}>
              <View style={[styles.stepDot, active && styles.stepDotActive, done && styles.stepDotDone]}>
                {done ? (
                  <CheckCircle2 size={14} color={colors.background} strokeWidth={2.5} />
                ) : (
                  <Text style={[styles.stepNum, active && styles.stepNumActive]}>{i + 1}</Text>
                )}
              </View>
              <Text style={[styles.stepLabel, active && styles.stepLabelActive, done && styles.stepLabelDone]}>
                {label}
              </Text>
              {i < STEPS.length - 1 && (
                <View style={[styles.stepLine, done && styles.stepLineDone]} />
              )}
            </View>
          );
        })}
      </View>

      {/* İçerik */}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {step === 0 && <StoneStep selected={stone} onSelect={setStone} />}
        {step === 1 && <ShapeStep selected={shape} onSelect={setShape} />}
        {step === 2 && <PatternStep selected={pattern} onSelect={setPattern} />}
        {step === 3 && (
          <PreviewStep
            stone={selectedStone}
            shape={selectedShape}
            pattern={selectedPattern}
          />
        )}
      </ScrollView>

      {/* Alt navigasyon */}
      <View style={styles.navBar}>
        {step > 0 ? (
          <Pressable style={styles.navBackBtn} onPress={() => setStep(step - 1)}>
            <ChevronLeft size={18} color={colors.textSecondary} />
            <Text style={styles.navBackText}>Geri</Text>
          </Pressable>
        ) : (
          <View />
        )}
        {step < 3 ? (
          <Pressable
            style={[styles.navNextBtn, !currentValid && styles.navNextDisabled]}
            disabled={!currentValid}
            onPress={() => setStep(step + 1)}
          >
            <Text style={styles.navNextText}>İleri</Text>
            <ChevronRight size={18} color={colors.background} />
          </Pressable>
        ) : (
          <Pressable style={styles.navNextBtn} onPress={onBack}>
            <Text style={styles.navNextText}>Tamamla</Text>
            <CheckCircle2 size={16} color={colors.background} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

/* ─── Adım: Taş ─────────────────────────────────────────────── */
function StoneStep({ selected, onSelect }: { selected: string | null; onSelect: (id: string) => void }) {
  return (
    <View>
      <Text style={step_styles.heading}>Taşınızı seçin</Text>
      <Text style={step_styles.sub}>Farklı lületaşı türleri farklı işleme teknikleri gerektirir</Text>
      <View style={step_styles.stoneGrid}>
        {STONES.map((s) => (
          <Pressable
            key={s.id}
            style={[step_styles.stoneCard, selected === s.id && step_styles.stoneCardActive]}
            onPress={() => onSelect(s.id)}
          >
            <Image source={{ uri: s.img }} style={step_styles.stoneImg} contentFit="cover" />
            {selected === s.id && (
              <View style={step_styles.stoneCheckWrap}>
                <CheckCircle2 size={20} color={colors.gold} />
              </View>
            )}
            <LinearGradient
              colors={["transparent", "rgba(10,10,10,0.85)"]}
              style={step_styles.stoneGrad}
            />
            <View style={step_styles.stoneInfo}>
              <Text style={step_styles.stoneName}>{s.label}</Text>
              <Text style={step_styles.stoneSub}>{s.sub}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

/* ─── Adım: Şekil ───────────────────────────────────────────── */
function ShapeStep({ selected, onSelect }: { selected: string | null; onSelect: (id: string) => void }) {
  return (
    <View>
      <Text style={step_styles.heading}>Şekil seçin</Text>
      <Text style={step_styles.sub}>Hangi eseri oluşturmak istiyorsunuz?</Text>
      <View style={step_styles.shapeGrid}>
        {SHAPES.map((s) => {
          const active = selected === s.id;
          return (
            <Pressable
              key={s.id}
              style={[step_styles.shapeCard, active && step_styles.shapeCardActive]}
              onPress={() => onSelect(s.id)}
            >
              <Image source={{ uri: s.img }} style={step_styles.shapeImg} contentFit="cover" />
              <LinearGradient
                colors={["transparent", "rgba(10,10,10,0.9)"]}
                style={step_styles.stoneGrad}
              />
              {active && (
                <View style={step_styles.shapeCheck}>
                  <CheckCircle2 size={16} color={colors.gold} />
                </View>
              )}
              <Text style={step_styles.shapeEmoji}>{s.emoji}</Text>
              <Text style={step_styles.shapeName}>{s.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

/* ─── Adım: Desen ───────────────────────────────────────────── */
function PatternStep({ selected, onSelect }: { selected: string | null; onSelect: (id: string) => void }) {
  return (
    <View>
      <Text style={step_styles.heading}>Desen seçin</Text>
      <Text style={step_styles.sub}>Eserinize kazınacak motif</Text>
      <View style={step_styles.patternList}>
        {PATTERNS.map((p) => {
          const active = selected === p.id;
          return (
            <Pressable
              key={p.id}
              style={[step_styles.patternRow, active && step_styles.patternRowActive]}
              onPress={() => onSelect(p.id)}
            >
              <View style={[step_styles.patternDot, active && step_styles.patternDotActive]} />
              <View style={{ flex: 1 }}>
                <Text style={[step_styles.patternName, active && step_styles.patternNameActive]}>{p.label}</Text>
                <Text style={step_styles.patternDesc}>{p.desc}</Text>
              </View>
              {active && <CheckCircle2 size={18} color={colors.gold} />}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

/* ─── Adım: Önizleme ─────────────────────────────────────────── */
function PreviewStep({
  stone,
  shape,
  pattern,
}: {
  stone?: (typeof STONES)[0];
  shape?: (typeof SHAPES)[0];
  pattern?: (typeof PATTERNS)[0];
}) {
  const previewImg = shape?.img ?? AppAssets.vcStoneRaw;

  return (
    <View>
      <Text style={step_styles.heading}>Eseriniz hazır!</Text>
      <Text style={step_styles.sub}>Dijital önizlemenizi inceleyin</Text>

      <View style={step_styles.previewCard}>
        <Image source={{ uri: previewImg }} style={step_styles.previewImg} contentFit="cover" />
        <LinearGradient
          colors={["transparent", "rgba(10,10,10,0.9)"]}
          style={step_styles.stoneGrad}
        />
        <View style={step_styles.previewBadge}>
          <Text style={step_styles.previewBadgeText}>DİJİTAL ÖNİZLEME</Text>
        </View>
        <Text style={step_styles.previewShapeName}>{shape?.label ?? "Eser"}</Text>
      </View>

      <View style={step_styles.summaryCard}>
        <Text style={step_styles.summaryTitle}>Eser Özeti</Text>
        {[
          { label: "Taş", value: stone?.label },
          { label: "Şekil", value: shape?.label },
          { label: "Desen", value: pattern?.label },
        ].map((row) => (
          <View key={row.label} style={step_styles.summaryRow}>
            <Text style={step_styles.summaryLabel}>{row.label}</Text>
            <Text style={step_styles.summaryValue}>{row.value ?? "—"}</Text>
          </View>
        ))}
      </View>

      <View style={step_styles.noteCard}>
        <Text style={step_styles.noteText}>
          Bu bir dijital önizlemedir. Gerçek lületaşı eserinizi yapmak için bir usta atölyesini ziyaret edin veya rezervasyon yapın.
        </Text>
      </View>
    </View>
  );
}

/* ─── Stiller ───────────────────────────────────────────────── */
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  topBar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: spacing.lg, paddingTop: 16, paddingBottom: 12 },
  backBtn: { width: 40, height: 40, borderRadius: 14, backgroundColor: "rgba(10,10,10,0.55)", alignItems: "center", justifyContent: "center" },
  topCenter: { flexDirection: "row", alignItems: "center", gap: 8 },
  topTitle: { fontFamily: "CormorantGaramond_500Medium", fontSize: 20, color: colors.textPrimary },

  stepper: { flexDirection: "row", alignItems: "flex-start", paddingHorizontal: spacing.lg, paddingBottom: 16, gap: 0 },
  stepWrap: { flex: 1, alignItems: "center", position: "relative" },
  stepDot: { width: 30, height: 30, borderRadius: 15, backgroundColor: colors.card, borderWidth: 1.5, borderColor: colors.muted, alignItems: "center", justifyContent: "center" },
  stepDotActive: { borderColor: colors.gold, backgroundColor: "rgba(201,164,106,0.15)" },
  stepDotDone: { backgroundColor: colors.gold, borderColor: colors.gold },
  stepNum: { fontFamily: "Inter_600SemiBold", fontSize: 12, color: colors.muted },
  stepNumActive: { color: colors.gold },
  stepLabel: { fontFamily: "Inter_400Regular", fontSize: 9, color: colors.muted, textAlign: "center", marginTop: 5 },
  stepLabelActive: { color: colors.gold, fontFamily: "Inter_500Medium" },
  stepLabelDone: { color: colors.textSecondary },
  stepLine: { position: "absolute", top: 15, left: "60%", right: "-40%", height: 1.5, backgroundColor: colors.muted },
  stepLineDone: { backgroundColor: colors.gold },

  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: spacing.lg, paddingBottom: 20 },

  navBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: spacing.lg, paddingVertical: 16, paddingBottom: 32, borderTopWidth: 1, borderTopColor: "rgba(255,255,255,0.06)" },
  navBackBtn: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 18, paddingVertical: 13, borderRadius: radius.md, backgroundColor: colors.card },
  navBackText: { fontFamily: "Inter_500Medium", fontSize: 14, color: colors.textSecondary },
  navNextBtn: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 28, paddingVertical: 13, borderRadius: radius.md, backgroundColor: colors.gold },
  navNextDisabled: { opacity: 0.35 },
  navNextText: { fontFamily: "Inter_600SemiBold", fontSize: 15, color: colors.background },
});

const step_styles = StyleSheet.create({
  heading: { fontFamily: "CormorantGaramond_500Medium", fontSize: 26, color: colors.textPrimary, marginBottom: 6 },
  sub: { fontFamily: "Inter_300Light", fontSize: 13, color: colors.textSecondary, marginBottom: 20, lineHeight: 19 },

  // Taş adımı
  stoneGrid: { gap: 12 },
  stoneCard: { height: 110, borderRadius: radius.lg, overflow: "hidden", borderWidth: 2, borderColor: "transparent" },
  stoneCardActive: { borderColor: colors.gold },
  stoneImg: { ...StyleSheet.absoluteFillObject } as object,
  stoneGrad: { ...StyleSheet.absoluteFillObject } as object,
  stoneCheckWrap: { position: "absolute", top: 10, right: 10, backgroundColor: "rgba(10,10,10,0.7)", borderRadius: 12, padding: 2 },
  stoneInfo: { position: "absolute", bottom: 12, left: 14 },
  stoneName: { fontFamily: "CormorantGaramond_500Medium", fontSize: 18, color: colors.textPrimary },
  stoneSub: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.ivory, marginTop: 2 },

  // Şekil adımı
  shapeGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  shapeCard: { width: "47%", height: 110, borderRadius: radius.lg, overflow: "hidden", borderWidth: 2, borderColor: "transparent", justifyContent: "flex-end", padding: 10 },
  shapeCardActive: { borderColor: colors.gold },
  shapeImg: { ...StyleSheet.absoluteFillObject } as object,
  shapeCheck: { position: "absolute", top: 8, right: 8, backgroundColor: "rgba(10,10,10,0.7)", borderRadius: 12, padding: 2 },
  shapeEmoji: { fontSize: 20, marginBottom: 2 },
  shapeName: { fontFamily: "CormorantGaramond_500Medium", fontSize: 15, color: colors.textPrimary },

  // Desen adımı
  patternList: { gap: 10 },
  patternRow: { flexDirection: "row", alignItems: "center", gap: 14, padding: 16, backgroundColor: colors.card, borderRadius: radius.md, borderWidth: 1.5, borderColor: "rgba(255,255,255,0.05)" },
  patternRowActive: { borderColor: colors.gold, backgroundColor: "rgba(201,164,106,0.1)" },
  patternDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.muted },
  patternDotActive: { backgroundColor: colors.gold },
  patternName: { fontFamily: "Inter_500Medium", fontSize: 15, color: colors.textSecondary },
  patternNameActive: { color: colors.textPrimary },
  patternDesc: { fontFamily: "Inter_300Light", fontSize: 11, color: colors.muted, marginTop: 3 },

  // Önizleme adımı
  previewCard: { height: 200, borderRadius: radius.xl, overflow: "hidden", marginBottom: 16, justifyContent: "flex-end", padding: 16 },
  previewImg: { ...StyleSheet.absoluteFillObject } as object,
  previewBadge: { alignSelf: "flex-start", backgroundColor: "rgba(201,164,106,0.85)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, marginBottom: 8 },
  previewBadgeText: { fontFamily: "Inter_600SemiBold", fontSize: 9, color: colors.background, letterSpacing: 1 },
  previewShapeName: { fontFamily: "CormorantGaramond_500Medium", fontSize: 28, color: colors.textPrimary },

  summaryCard: { backgroundColor: colors.card, borderRadius: radius.lg, padding: 16, marginBottom: 12 },
  summaryTitle: { fontFamily: "Inter_500Medium", fontSize: 10, color: colors.gold, letterSpacing: 2, marginBottom: 12 },
  summaryRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.05)" },
  summaryLabel: { fontFamily: "Inter_400Regular", fontSize: 13, color: colors.textSecondary },
  summaryValue: { fontFamily: "Inter_500Medium", fontSize: 13, color: colors.textPrimary },

  noteCard: { backgroundColor: "rgba(201,164,106,0.08)", borderRadius: radius.md, padding: 14, borderWidth: 1, borderColor: "rgba(201,164,106,0.2)" },
  noteText: { fontFamily: "Inter_300Light", fontSize: 12, color: colors.textSecondary, lineHeight: 18, textAlign: "center" },
});
