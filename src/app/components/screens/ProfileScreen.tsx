import { Settings, Bookmark, Scissors, BookOpen, Map, ChevronRight, Bell } from "lucide-react";

interface ProfileScreenProps {
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Header with cover */}
      <div className="relative shrink-0" style={{ height: 200 }}>
        <img
          src="https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=800&q=80"
          alt="cover"
          className="absolute inset-0 size-full object-cover"
          style={{ opacity: 0.3 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.95) 100%)" }} />
        <div className="absolute top-14 right-6 flex gap-2">
          <button onClick={() => onNavigate("notifications")} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(8px)" }}>
            <Bell size={18} color="#B0B0B0" />
          </button>
          <button onClick={() => onNavigate("settings")} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(8px)" }}>
            <Settings size={18} color="#B0B0B0" />
          </button>
        </div>

        {/* Avatar */}
        <div className="absolute bottom-0 left-6 translate-y-1/2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1690286805745-a06d18f66166?w=200&q=80"
              alt="Zeynep"
              className="w-20 h-20 rounded-[20px] object-cover"
              style={{ border: "2.5px solid rgba(201,164,106,0.6)" }}
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#C9A46A", border: "2px solid #0A0A0A" }}>
              <span style={{ fontSize: "9px" }}>✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="px-6 pt-14 pb-4 shrink-0">
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 400, color: "#FFFFFF" }}>Zeynep Arslan</h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#C9A46A", fontWeight: 500, marginTop: 2 }}>Eskişehir · Kültür Meraklısı</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0", lineHeight: 1.5, marginTop: 8, fontWeight: 300 }}>
          Lületaşı sanatıyla 3 yıl önce tanıştım. O günden beri Eskişehir'in gizli güzelliklerini keşfediyorum.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 mx-6 mb-4 rounded-[20px] overflow-hidden shrink-0" style={{ background: "#1B1B1B" }}>
        {[
          { label: "Atölye", value: 12, icon: Scissors, color: "#C9A46A" },
          { label: "Rota", value: 8, icon: Map, color: "#8AA57B" },
          { label: "Hikaye", value: 24, icon: BookOpen, color: "#E8DFC9" },
          { label: "Favori", value: 17, icon: Bookmark, color: "#9D6B53" },
        ].map(({ label, value, icon: Icon, color }, i) => (
          <div key={label} className="flex flex-col items-center py-4" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
            <Icon size={14} color={color} />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 500, color: "#FFFFFF", marginTop: 4 }}>{value}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#B0B0B0", marginTop: 1 }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="px-6 mb-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 12 }}>BAŞARILAR</p>
        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {[
            { label: "İlk Oyma", icon: "🏺", color: "#C9A46A", unlocked: true },
            { label: "Usta Takipçi", icon: "⭐", color: "#E8DFC9", unlocked: true },
            { label: "Rota Kaşifi", icon: "🗺️", color: "#8AA57B", unlocked: true },
            { label: "Hikaye Okuyucu", icon: "📖", color: "#9D6B53", unlocked: false },
            { label: "Festival Katılımcısı", icon: "🎭", color: "#C9A46A", unlocked: false },
          ].map(({ label, icon, color, unlocked }) => (
            <div
              key={label}
              className="shrink-0 flex flex-col items-center gap-2 p-3 rounded-[16px]"
              style={{ background: unlocked ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)", border: `1px solid ${unlocked ? `${color}33` : "rgba(255,255,255,0.04)"}`, opacity: unlocked ? 1 : 0.4, width: 80 }}
            >
              <span style={{ fontSize: "24px", filter: unlocked ? "none" : "grayscale(1)" }}>{icon}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: unlocked ? color : "#B0B0B0", textAlign: "center", lineHeight: 1.3, fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 flex flex-col gap-2 shrink-0">
        {[
          { label: "Favorilerim", icon: Bookmark, count: 17, screen: "favorites", color: "#C9A46A" },
          { label: "Katıldığım Atölyeler", icon: Scissors, count: 12, screen: "workshops", color: "#8AA57B" },
          { label: "Tamamladığım Rotalar", icon: Map, count: 8, screen: "routes", color: "#9D6B53" },
          { label: "İzlediğim Hikayeler", icon: BookOpen, count: 24, screen: "stories", color: "#E8DFC9" },
          { label: "Ayarlar", icon: Settings, screen: "settings", color: "#B0B0B0" },
        ].map(({ label, icon: Icon, count, screen, color }) => (
          <button
            key={label}
            onClick={() => onNavigate(screen)}
            className="flex items-center gap-4 p-4 rounded-[18px]"
            style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.04)" }}
          >
            <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: `${color}14` }}>
              <Icon size={18} color={color} />
            </div>
            <span className="flex-1 text-left" style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#FFFFFF", fontWeight: 400 }}>
              {label}
            </span>
            {count !== undefined && (
              <span className="px-2 py-0.5 rounded-full" style={{ background: `${color}18`, fontFamily: "'Inter', sans-serif", fontSize: "11px", color, fontWeight: 600 }}>
                {count}
              </span>
            )}
            <ChevronRight size={16} color="rgba(176,176,176,0.4)" />
          </button>
        ))}
      </div>

      <div className="h-8 shrink-0" />
    </div>
  );
}
