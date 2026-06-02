import { Compass, BookOpen, Map, Scissors, User } from "lucide-react";

type Tab = "home" | "stories" | "map" | "workshops" | "profile";

interface BottomNavProps {
  active: Tab;
  onNavigate: (tab: Tab) => void;
}

const tabs = [
  { id: "home" as Tab, label: "Keşfet", icon: Compass },
  { id: "stories" as Tab, label: "Hikayeler", icon: BookOpen },
  { id: "map" as Tab, label: "Harita", icon: Map },
  { id: "workshops" as Tab, label: "Atölyeler", icon: Scissors },
  { id: "profile" as Tab, label: "Profil", icon: User },
];

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <div
      style={{
        background: "rgba(18,18,18,0.95)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(201,164,106,0.15)",
      }}
      className="flex items-center justify-around px-2 pb-5 pt-2 shrink-0"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className="flex flex-col items-center gap-0.5 py-1 px-3 min-w-0"
          >
            <div className="relative">
              {isActive && (
                <div
                  className="absolute -inset-2 rounded-xl"
                  style={{ background: "rgba(201,164,106,0.12)" }}
                />
              )}
              <Icon
                size={22}
                style={{ color: isActive ? "#C9A46A" : "#555555" }}
                className="relative z-10"
                strokeWidth={isActive ? 2 : 1.5}
              />
            </div>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.02em",
                color: isActive ? "#C9A46A" : "#555555",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
