import { useState } from "react";
import { ChevronLeft, CheckCircle, Calendar, Clock, User, CreditCard } from "lucide-react";
import { workshops } from "../../data/index";
import { motion, AnimatePresence } from "motion/react";

interface ReservationScreenProps {
  workshopId: string;
  onBack: () => void;
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

const steps = ["Tarih", "Kişi", "Ödeme", "Onay"];

export function ReservationScreen({ workshopId, onBack, onNavigate }: ReservationScreenProps) {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [participants, setParticipants] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const workshop = workshops.find(w => w.id === workshopId) ?? workshops[0];

  const dates = workshop.nextDates;
  const times = ["09:00", "10:00", "11:00", "14:00", "15:00"];

  const handleConfirm = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="flex flex-col items-center justify-center size-full px-8 text-center" style={{ background: "#0A0A0A" }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: "rgba(138,165,123,0.15)", border: "2px solid #8AA57B" }}
        >
          <CheckCircle size={36} color="#8AA57B" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "34px", fontWeight: 400, color: "#FFFFFF" }}>
            Katılım Kaydedildi!
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "#E8DFC9", marginTop: 8 }}>
            {workshop.title}
          </p>
          <div className="mt-6 p-5 rounded-[20px]" style={{ background: "#1B1B1B", border: "1px solid rgba(201,164,106,0.15)" }}>
            <div className="flex items-center gap-3 mb-3">
              <Calendar size={16} color="#C9A46A" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#FFFFFF" }}>{selectedDate || dates[0]}</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Clock size={16} color="#C9A46A" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#FFFFFF" }}>{selectedTime || "09:00"} — {workshop.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <User size={16} color="#C9A46A" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#FFFFFF" }}>{participants} Katılımcı</span>
            </div>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0", marginTop: 16, lineHeight: 1.6 }}>
            Onay bilgileri e-posta ve SMS ile gönderildi. Bu atölye bir yolculuğun başlangıcı.
          </p>
          <button
            onClick={onBack}
            className="mt-8 w-full py-4 rounded-[18px]"
            style={{ background: "linear-gradient(135deg, #C9A46A, #9D6B53)", fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#0A0A0A" }}
          >
            Keşfete Dön
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-6 pt-14 pb-6 shrink-0">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#1B1B1B" }}>
          <ChevronLeft size={20} color="#FFFFFF" />
        </button>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#C9A46A", fontWeight: 500 }}>REZERVASYON</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 400, color: "#FFFFFF" }}>
            {workshop.title}
          </h1>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center px-6 mb-8 shrink-0">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: i < step ? "#8AA57B" : i === step ? "#C9A46A" : "#1B1B1B",
                  border: i === step ? "2px solid #C9A46A" : "none",
                }}
              >
                {i < step ? (
                  <CheckCircle size={16} color="#FFFFFF" />
                ) : (
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: i === step ? "#0A0A0A" : "#B0B0B0", fontWeight: 600 }}>{i + 1}</span>
                )}
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: i === step ? "#C9A46A" : "#B0B0B0", marginTop: 4, letterSpacing: "0.05em" }}>
                {s.toUpperCase()}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-px mx-2" style={{ background: i < step ? "#8AA57B" : "rgba(255,255,255,0.08)" }} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col px-6 shrink-0"
        >
          {step === 0 && (
            <>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 400, color: "#FFFFFF", marginBottom: 20 }}>
                Tarih Seçin
              </p>
              <div className="flex flex-col gap-3">
                {dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className="flex items-center gap-4 p-4 rounded-[18px]"
                    style={{
                      background: selectedDate === date ? "rgba(201,164,106,0.12)" : "#1B1B1B",
                      border: `1px solid ${selectedDate === date ? "rgba(201,164,106,0.5)" : "rgba(255,255,255,0.06)"}`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-[12px] flex items-center justify-center" style={{ background: selectedDate === date ? "rgba(201,164,106,0.2)" : "rgba(255,255,255,0.05)" }}>
                      <Calendar size={18} color={selectedDate === date ? "#C9A46A" : "#B0B0B0"} />
                    </div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: selectedDate === date ? "#C9A46A" : "#FFFFFF", fontWeight: selectedDate === date ? 500 : 400 }}>
                      {date}
                    </span>
                    {selectedDate === date && <CheckCircle size={18} color="#C9A46A" className="ml-auto" />}
                  </button>
                ))}
              </div>

              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 400, color: "#FFFFFF", margin: "24px 0 12px" }}>
                Saat Seçin
              </p>
              <div className="flex gap-3 flex-wrap">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className="px-5 py-3 rounded-[14px]"
                    style={{
                      background: selectedTime === time ? "rgba(201,164,106,0.15)" : "#1B1B1B",
                      border: `1px solid ${selectedTime === time ? "#C9A46A" : "rgba(255,255,255,0.06)"}`,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: selectedTime === time ? "#C9A46A" : "#B0B0B0",
                      fontWeight: selectedTime === time ? 600 : 400,
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 400, color: "#FFFFFF", marginBottom: 20 }}>
                Katılımcı Sayısı
              </p>
              <div className="flex items-center justify-center gap-8 py-10">
                <button
                  onClick={() => setParticipants(Math.max(1, participants - 1))}
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "24px", color: "#FFFFFF" }}>−</span>
                </button>
                <div className="flex flex-col items-center">
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "64px", fontWeight: 300, color: "#C9A46A", lineHeight: 1 }}>{participants}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0", marginTop: 4 }}>kişi</span>
                </div>
                <button
                  onClick={() => setParticipants(Math.min(8, participants + 1))}
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "24px", color: "#FFFFFF" }}>+</span>
                </button>
              </div>
              <div className="p-4 rounded-[16px]" style={{ background: "#1B1B1B" }}>
                <div className="flex justify-between">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#B0B0B0" }}>{participants} × {workshop.price}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#C9A46A", fontWeight: 600 }}>
                    ₺{parseInt(workshop.price.replace("₺", "").replace(".", "")) * participants}
                  </span>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 400, color: "#FFFFFF", marginBottom: 20 }}>
                Ödeme
              </p>
              <div className="flex flex-col gap-4">
                {/* Name Field */}
                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500 }}>AD SOYAD</label>
                  <div className="mt-2 px-4 py-3 rounded-[14px] flex items-center gap-3" style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <User size={16} color="#B0B0B0" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#FFFFFF" }}>Zeynep Arslan</span>
                  </div>
                </div>
                {/* Card */}
                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500 }}>KART NUMARASI</label>
                  <div className="mt-2 px-4 py-3 rounded-[14px] flex items-center gap-3" style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <CreditCard size={16} color="#B0B0B0" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#FFFFFF" }}>•••• •••• •••• 4291</span>
                  </div>
                </div>
                {/* Summary */}
                <div className="mt-2 p-4 rounded-[16px]" style={{ background: "rgba(201,164,106,0.07)", border: "1px solid rgba(201,164,106,0.15)" }}>
                  <div className="flex justify-between mb-2">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0" }}>Atölye</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#FFFFFF" }}>{workshop.title}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0" }}>Tarih</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#FFFFFF" }}>{selectedDate || dates[0]}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0" }}>Kişi</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#FFFFFF" }}>{participants}</span>
                  </div>
                  <div className="flex justify-between mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#FFFFFF", fontWeight: 600 }}>Toplam</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#C9A46A", fontWeight: 600 }}>
                      ₺{parseInt(workshop.price.replace("₺", "").replace(".", "")) * participants}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <div className="px-6 mt-8 mb-4 shrink-0">
        <button
          onClick={() => {
            if (step < steps.length - 1) {
              setStep(step + 1);
            } else {
              handleConfirm();
            }
          }}
          className="w-full py-4 rounded-[18px]"
          style={{ background: "linear-gradient(135deg, #C9A46A, #9D6B53)", fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#0A0A0A" }}
        >
          {step < steps.length - 1 ? "Devam Et" : "Rezervasyonu Tamamla"}
        </button>
      </div>
    </div>
  );
}
