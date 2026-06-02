import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    image: "https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=800&q=80",
    tag: "01 — Keşif",
    title: "Eskişehir'in Gizli Mirasını Keşfet",
    body: "Yüzyıllardır süren geleneksel lületaşı sanatının kalbine yolculuğa çıkın. Her taşın, her eserin ardında gizemli bir hikaye sizi bekliyor.",
    cta: "Devam Et",
  },
  {
    image: "https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=800&q=80",
    tag: "02 — Ustalar",
    title: "Usta Sanatçılarla Tanışın",
    body: "Nesiller boyu aktarılan el sanatlarını yaşatan ustalarla birebir bağlantı kurun. Onların hikayeleri, sanatları ve bilgeliklerine ortak olun.",
    cta: "Devam Et",
  },
  {
    image: "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=800&q=80",
    tag: "03 — Deneyim",
    title: "Zanaatı Bizzat Deneyimleyin",
    body: "Atölye katılımları, rehberli rotalar ve sürükleyici hikaye anlatımı ile lületaşı sanatının tam kalbine girin. Sadece izlemeyin, hissedin.",
    cta: "Başlayın",
  },
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      onComplete();
    }
  };

  const slide = slides[current];

  return (
    <div className="relative size-full overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Full-screen imagery */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="size-full object-cover"
            style={{ opacity: 0.5 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.4) 45%, rgba(10,10,10,0.97) 80%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Skip button */}
      <div className="absolute top-14 right-6 z-10">
        {current < slides.length - 1 && (
          <button onClick={onComplete}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                color: "rgba(176,176,176,0.7)",
                letterSpacing: "0.08em",
              }}
            >
              Geç
            </span>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Tag */}
            <div className="flex items-center gap-2">
              <div style={{ width: 20, height: 1, background: "#C9A46A" }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  color: "#C9A46A",
                  fontWeight: 500,
                }}
              >
                {slide.tag.toUpperCase()}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "34px",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              {slide.title}
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "rgba(176,176,176,0.85)",
                lineHeight: 1.65,
                fontWeight: 300,
              }}
            >
              {slide.body}
            </p>

            {/* Dots + CTA */}
            <div className="flex items-center justify-between mt-4">
              {/* Dots */}
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === current ? 24 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: i === current ? "#C9A46A" : "rgba(201,164,106,0.25)",
                      transition: "all 0.35s ease",
                    }}
                  />
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl"
                style={{ background: "linear-gradient(135deg, #C9A46A, #9D6B53)" }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#0A0A0A",
                    letterSpacing: "0.04em",
                  }}
                >
                  {slide.cta}
                </span>
                <ChevronRight size={14} color="#0A0A0A" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
