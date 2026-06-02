import { ChevronLeft, ChevronRight, Globe, Eye, Moon, Volume2, Bell, Shield, LogOut } from "lucide-react";
import { useState } from "react";

interface SettingsScreenProps {
  onBack: () => void;
}

interface ToggleProps {
  value: boolean;
  onChange: (v: boolean) => void;
  color?: string;
}

function Toggle({ value, onChange, color = "#C9A46A" }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="relative"
      style={{ width: 44, height: 26, borderRadius: 13, background: value ? color : "rgba(255,255,255,0.1)", transition: "background 0.2s" }}
    >
      <div
        style={{
          position: "absolute",
          top: 3,
          left: value ? "calc(100% - 23px)" : 3,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#FFFFFF",
          transition: "left 0.2s",
          boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }}
      />
    </button>
  );
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [audio, setAudio] = useState(true);
  const [accessibility, setAccessibility] = useState(false);
  const [language, setLanguage] = useState("Türkçe");

  const sections = [
    {
      title: "TERCIHLER",
      items: [
        {
          icon: Moon,
          label: "Karanlık Mod",
          description: "Gece modu aktif",
          type: "toggle" as const,
          value: darkMode,
          onChange: setDarkMode,
        },
        {
          icon: Globe,
          label: "Dil",
          description: language,
          type: "select" as const,
        },
        {
          icon: Eye,
          label: "Erişilebilirlik",
          description: "Büyük metin & yüksek kontrast",
          type: "toggle" as const,
          value: accessibility,
          onChange: setAccessibility,
        },
      ],
    },
    {
      title: "BİLDİRİMLER & SES",
      items: [
        {
          icon: Bell,
          label: "Bildirimler",
          description: "Atölye hatırlatıcıları ve haberler",
          type: "toggle" as const,
          value: notifications,
          onChange: setNotifications,
        },
        {
          icon: Volume2,
          label: "Ses Rehberi",
          description: "Rota deneyiminde otomatik çal",
          type: "toggle" as const,
          value: audio,
          onChange: setAudio,
        },
      ],
    },
    {
      title: "GİZLİLİK",
      items: [
        {
          icon: Shield,
          label: "Gizlilik Politikası",
          description: "",
          type: "link" as const,
        },
        {
          icon: Shield,
          label: "Kullanım Koşulları",
          description: "",
          type: "link" as const,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-6 pt-14 pb-6 shrink-0">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#1B1B1B" }}>
          <ChevronLeft size={20} color="#FFFFFF" />
        </button>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", fontWeight: 300, color: "#FFFFFF" }}>Ayarlar</h1>
      </div>

      {/* App Version Banner */}
      <div className="mx-6 mb-6 p-4 rounded-[20px] flex items-center gap-4 shrink-0" style={{ background: "rgba(201,164,106,0.07)", border: "1px solid rgba(201,164,106,0.15)" }}>
        <div className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: "rgba(201,164,106,0.12)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="#C9A46A" strokeWidth="0.8" />
            <path d="M8 12 Q10 8 12 8 Q14 8 16 12" stroke="#C9A46A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M14 10 L17 7" stroke="#C9A46A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <ellipse cx="8" cy="13.5" rx="2" ry="2.5" stroke="#C9A46A" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#FFFFFF" }}>LÜLETAŞI</h4>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A" }}>Sürüm 1.0.0 · Kültürel Miras Platformu</p>
        </div>
      </div>

      {/* Settings Sections */}
      {sections.map((section) => (
        <div key={section.title} className="px-6 mb-6 shrink-0">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 10 }}>
            {section.title}
          </p>
          <div className="rounded-[20px] overflow-hidden" style={{ background: "#1B1B1B" }}>
            {section.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 px-4 py-4"
                  style={{ borderBottom: i < section.items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                >
                  <div className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: "rgba(201,164,106,0.1)" }}>
                    <Icon size={16} color="#C9A46A" />
                  </div>
                  <div className="flex-1">
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#FFFFFF", fontWeight: 400 }}>{item.label}</p>
                    {item.description && (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0", marginTop: 1 }}>{item.description}</p>
                    )}
                  </div>
                  {item.type === "toggle" && "value" in item && (
                    <Toggle value={item.value} onChange={item.onChange!} />
                  )}
                  {(item.type === "link" || item.type === "select") && (
                    <ChevronRight size={16} color="rgba(176,176,176,0.4)" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Sign Out */}
      <div className="px-6 mb-4 shrink-0">
        <button
          className="w-full flex items-center justify-center gap-3 p-4 rounded-[18px]"
          style={{ background: "rgba(157,107,83,0.1)", border: "1px solid rgba(157,107,83,0.2)" }}
        >
          <LogOut size={18} color="#9D6B53" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#9D6B53", fontWeight: 500 }}>Çıkış Yap</span>
        </button>
      </div>

      <div className="h-4 shrink-0" />
    </div>
  );
}
