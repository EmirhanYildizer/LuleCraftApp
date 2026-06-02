import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"logo" | "tagline" | "fade">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("tagline"), 900);
    const t2 = setTimeout(() => setPhase("fade"), 2400);
    const t3 = setTimeout(() => onComplete(), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-between size-full overflow-hidden"
      style={{ background: "#0A0A0A" }}
      animate={{ opacity: phase === "fade" ? 0 : 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Cinematic hero */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=800&q=80"
          alt="Lületaşı ustası"
          className="size-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 100%)",
          }}
        />
      </div>

      {/* Top status bar */}
      <div className="relative z-10 w-full flex justify-between items-center px-6 pt-4">
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>9:41</span>
        <div className="flex gap-1.5 items-center">
          <div style={{ width: 16, height: 8, border: "1px solid rgba(255,255,255,0.5)", borderRadius: 2, position: "relative" }}>
            <div style={{ position: "absolute", inset: "1px", right: "2px", background: "rgba(255,255,255,0.8)", borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* Center logo */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <AnimatePresence>
          <motion.div
            key="logo-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            {/* Emblem */}
            <div className="relative">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="35" stroke="#C9A46A" strokeWidth="0.8" opacity="0.6" />
                <circle cx="36" cy="36" r="28" stroke="#C9A46A" strokeWidth="0.4" opacity="0.3" />
                {/* Pipe silhouette */}
                <path d="M24 38 Q28 30 36 30 Q44 30 48 38" stroke="#C9A46A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M44 34 L50 28 M50 28 L54 30" stroke="#C9A46A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <ellipse cx="24" cy="40" rx="4" ry="5" stroke="#C9A46A" strokeWidth="1.5" fill="none" />
                {/* Stars */}
                <circle cx="36" cy="18" r="1" fill="#C9A46A" opacity="0.7" />
                <circle cx="52" cy="26" r="0.8" fill="#C9A46A" opacity="0.5" />
                <circle cx="20" cy="26" r="0.8" fill="#C9A46A" opacity="0.5" />
              </svg>
              <div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 40px rgba(201,164,106,0.25)", border: "none" }}
              />
            </div>

            {/* Logo text */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <div style={{ height: 1, width: 28, background: "linear-gradient(to right, transparent, #C9A46A)" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", letterSpacing: "0.35em", color: "#C9A46A", fontWeight: 500 }}>
                  ESKİŞEHİR
                </span>
                <div style={{ height: 1, width: 28, background: "linear-gradient(to left, transparent, #C9A46A)" }} />
              </div>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "48px",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  letterSpacing: "0.06em",
                  lineHeight: 1,
                }}
              >
                LÜLETAŞI
              </h1>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  color: "rgba(232,223,201,0.7)",
                  fontWeight: 400,
                }}
              >
                KÜLTÜREL MİRAS UYGULAMASI
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: phase === "tagline" || phase === "fade" ? 1 : 0, y: phase === "tagline" || phase === "fade" ? 0 : 8 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "16px",
            fontStyle: "italic",
            color: "rgba(201,164,106,0.8)",
            marginTop: 24,
            textAlign: "center",
            letterSpacing: "0.02em",
          }}
        >
          "Her eserin ardında gizli bir hikaye vardır."
        </motion.p>
      </div>

      {/* Bottom loading */}
      <div className="relative z-10 flex flex-col items-center gap-3 pb-16">
        <div
          style={{ width: 40, height: 1, background: "rgba(201,164,106,0.4)", borderRadius: 1 }}
          className="overflow-hidden"
        >
          <motion.div
            style={{ height: "100%", background: "#C9A46A", borderRadius: 1 }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", letterSpacing: "0.25em", color: "rgba(176,176,176,0.5)" }}>
          YÜKLENIYOR
        </span>
      </div>
    </motion.div>
  );
}
