import type { FC } from "react";
import { ChevronLeft, Bell, BookOpen, Calendar, MapPin, User } from "lucide-react";
import { notifications } from "../../data/index";

interface NotificationsScreenProps {
  onBack: () => void;
}

const typeIcons: Record<string, FC<{ size: number; color: string }>> = {
  workshop: Calendar,
  story: BookOpen,
  event: MapPin,
  artisan: User,
  route: MapPin,
};

const typeColors: Record<string, string> = {
  workshop: "#C9A46A",
  story: "#E8DFC9",
  event: "#8AA57B",
  artisan: "#9D6B53",
  route: "#C9A46A",
};

export function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-6 pt-14 pb-6 shrink-0">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#1B1B1B" }}>
          <ChevronLeft size={20} color="#FFFFFF" />
        </button>
        <div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", fontWeight: 300, color: "#FFFFFF" }}>Bildirimler</h1>
        </div>
        <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "rgba(201,164,106,0.15)" }}>
          <div className="w-2 h-2 rounded-full" style={{ background: "#C9A46A" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A", fontWeight: 500 }}>
            {notifications.filter(n => !n.read).length} yeni
          </span>
        </div>
      </div>

      {/* Unread Section */}
      <div className="px-6 mb-4 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 12 }}>
          OKUNMAMIŞLAR
        </p>
        <div className="flex flex-col gap-3">
          {notifications.filter(n => !n.read).map((notif) => {
            const Icon = typeIcons[notif.type] || Bell;
            const color = typeColors[notif.type] || "#C9A46A";
            return (
              <div
                key={notif.id}
                className="flex items-start gap-4 p-4 rounded-[20px]"
                style={{ background: "#1B1B1B", border: `1px solid ${color}22` }}
              >
                <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 relative" style={{ background: `${color}15` }}>
                  <Icon size={18} color={color} />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full" style={{ background: color, border: "2px solid #1B1B1B" }} />
                </div>
                <div className="flex-1">
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#FFFFFF", fontWeight: 600, lineHeight: 1.3 }}>
                    {notif.title}
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0", lineHeight: 1.5, marginTop: 3, fontWeight: 300 }}>
                    {notif.body}
                  </p>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: color, marginTop: 4, display: "block" }}>
                    {notif.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Read Section */}
      <div className="px-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 12 }}>
          ÖNCEKİLER
        </p>
        <div className="flex flex-col gap-3">
          {notifications.filter(n => n.read).map((notif) => {
            const Icon = typeIcons[notif.type] || Bell;
            const color = typeColors[notif.type] || "#C9A46A";
            return (
              <div
                key={notif.id}
                className="flex items-start gap-4 p-4 rounded-[20px]"
                style={{ background: "rgba(27,27,27,0.5)", border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <Icon size={18} color="rgba(176,176,176,0.5)" />
                </div>
                <div className="flex-1">
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", fontWeight: 500, lineHeight: 1.3 }}>
                    {notif.title}
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(176,176,176,0.5)", lineHeight: 1.5, marginTop: 3, fontWeight: 300 }}>
                    {notif.body}
                  </p>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "rgba(176,176,176,0.4)", marginTop: 4, display: "block" }}>
                    {notif.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-8 shrink-0" />
    </div>
  );
}
