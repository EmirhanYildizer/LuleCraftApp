import { useState } from "react";
import { Search, Navigation, MapPin, ChevronRight, Layers } from "lucide-react";

interface MapLocation {
  id: string;
  name: string;
  type: "Atölye" | "Müze" | "Tarihi Alan" | "Sanatçı";
  x: number;
  y: number;
  address: string;
  hours?: string;
}

const locations: MapLocation[] = [
  { id: "1", name: "Mehmet Usta Atölyesi", type: "Atölye", x: 35, y: 40, address: "Odunpazarı, Eskişehir", hours: "09:00 – 18:00" },
  { id: "2", name: "Lületaşı Müzesi", type: "Müze", x: 55, y: 30, address: "Tarihi Çarşı, Eskişehir", hours: "10:00 – 17:00" },
  { id: "3", name: "Ayşe Demir Stüdyosu", type: "Sanatçı", x: 45, y: 60, address: "Odunpazarı, Eskişehir", hours: "10:00 – 18:00" },
  { id: "4", name: "Tarihi Bedesten", type: "Tarihi Alan", x: 60, y: 50, address: "Kentmerkezi, Eskişehir" },
  { id: "5", name: "Zanaat Merkezi", type: "Atölye", x: 30, y: 65, address: "Odunpazarı, Eskişehir", hours: "09:00 – 17:00" },
];

const typeColors: Record<string, string> = {
  "Atölye": "#C9A46A",
  "Müze": "#9D6B53",
  "Sanatçı": "#E8DFC9",
  "Tarihi Alan": "#8AA57B",
};

const filters = ["Tümü", "Atölye", "Müze", "Sanatçı", "Tarihi Alan"];

interface MapScreenProps {
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

export function MapScreen({ onNavigate }: MapScreenProps) {
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const filtered = activeFilter === "Tümü" ? locations : locations.filter(l => l.type === activeFilter);

  return (
    <div className="flex flex-col size-full overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-4 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div style={{ width: 12, height: 1, background: "#C9A46A" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.2em", color: "#C9A46A", fontWeight: 500 }}>KEŞFET</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "#FFFFFF" }}>Kültürel Harita</h1>
          </div>
          <button className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#1B1B1B" }}>
            <Layers size={18} color="#B0B0B0" />
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-[16px]" style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.06)" }}>
          <Search size={16} color="#B0B0B0" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "rgba(176,176,176,0.4)" }}>Yer, atölye veya usta ara...</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 px-6 pb-4 overflow-x-auto shrink-0" style={{ scrollbarWidth: "none" }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="shrink-0 px-3 py-1.5 rounded-full"
            style={{
              background: activeFilter === f ? "#C9A46A" : "#1B1B1B",
              border: `1px solid ${activeFilter === f ? "#C9A46A" : "rgba(255,255,255,0.06)"}`,
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              color: activeFilter === f ? "#0A0A0A" : "#B0B0B0",
              fontWeight: activeFilter === f ? 600 : 400,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="relative flex-1 mx-6 rounded-[20px] overflow-hidden" style={{ minHeight: 0 }}>
        {/* Dark map background */}
        <div className="absolute inset-0" style={{ background: "#111111" }}>
          {/* Stylized roads */}
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Road network */}
            <line x1="0" y1="35" x2="100" y2="35" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
            <line x1="0" y1="55" x2="100" y2="55" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <line x1="0" y1="70" x2="100" y2="70" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            <line x1="25" y1="0" x2="25" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1.2" />
            <line x1="75" y1="0" x2="75" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
            {/* Diagonal roads */}
            <line x1="0" y1="20" x2="40" y2="55" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            <line x1="60" y1="20" x2="100" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            {/* Parks */}
            <rect x="35" y="20" width="12" height="8" fill="rgba(138,165,123,0.08)" rx="1" />
            <rect x="15" y="50" width="8" height="12" fill="rgba(138,165,123,0.06)" rx="1" />
            {/* Blocks */}
            {[
              [5, 5, 18, 12], [28, 5, 18, 12], [55, 5, 18, 8], [78, 5, 20, 12],
              [5, 40, 15, 12], [28, 40, 18, 10], [55, 40, 18, 12], [78, 40, 20, 10],
              [5, 60, 15, 15], [28, 60, 18, 12], [55, 60, 18, 10], [78, 60, 20, 15],
              [5, 80, 15, 15], [28, 80, 18, 15], [55, 78, 18, 15], [78, 78, 20, 15],
            ].map(([x, y, w, h], i) => (
              <rect key={i} x={x} y={y} width={w} height={h} fill="rgba(255,255,255,0.03)" rx="0.5" />
            ))}
          </svg>
        </div>

        {/* Location Pins */}
        {filtered.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setSelectedLocation(loc === selectedLocation ? null : loc)}
            className="absolute flex flex-col items-center"
            style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)", zIndex: selectedLocation?.id === loc.id ? 20 : 10 }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: selectedLocation?.id === loc.id ? 40 : 30,
                height: selectedLocation?.id === loc.id ? 40 : 30,
                background: selectedLocation?.id === loc.id ? typeColors[loc.type] : `${typeColors[loc.type]}22`,
                border: `2px solid ${typeColors[loc.type]}`,
                transition: "all 0.2s ease",
                boxShadow: selectedLocation?.id === loc.id ? `0 0 20px ${typeColors[loc.type]}44` : "none",
              }}
            >
              <MapPin size={selectedLocation?.id === loc.id ? 18 : 13} color={selectedLocation?.id === loc.id ? "#0A0A0A" : typeColors[loc.type]} />
            </div>
            {selectedLocation?.id === loc.id && (
              <div
                className="mt-1 px-2 py-1 rounded-lg text-center"
                style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(8px)", border: `1px solid ${typeColors[loc.type]}44`, whiteSpace: "nowrap" }}
              >
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#FFFFFF", fontWeight: 500 }}>{loc.name}</span>
              </div>
            )}
          </button>
        ))}

        {/* My location */}
        <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
          <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(66,153,225,0.3)", border: "2px solid #4299E1" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: "#4299E1" }} />
          </div>
        </div>

        {/* Route button */}
        <button
          onClick={() => onNavigate("routes")}
          className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-[14px]"
          style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,164,106,0.3)" }}
        >
          <Navigation size={14} color="#C9A46A" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A", fontWeight: 500 }}>Rotalar</span>
        </button>
      </div>

      {/* Bottom Cards */}
      <div className="px-6 pt-4 pb-2 shrink-0">
        {selectedLocation ? (
          <div className="flex items-center gap-4 p-4 rounded-[20px]" style={{ background: "#1B1B1B", border: `1px solid ${typeColors[selectedLocation.type]}33` }}>
            <div className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: `${typeColors[selectedLocation.type]}15` }}>
              <MapPin size={20} color={typeColors[selectedLocation.type]} />
            </div>
            <div className="flex-1">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: typeColors[selectedLocation.type], letterSpacing: "0.12em", fontWeight: 500 }}>
                {selectedLocation.type.toUpperCase()}
              </p>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 500, color: "#FFFFFF" }}>{selectedLocation.name}</h4>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>{selectedLocation.address}</p>
              {selectedLocation.hours && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#8AA57B", marginTop: 2 }}>{selectedLocation.hours}</p>}
            </div>
            <button
              onClick={() => onNavigate("location-detail", { id: selectedLocation.id })}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(201,164,106,0.15)" }}
            >
              <ChevronRight size={14} color="#C9A46A" />
            </button>
          </div>
        ) : (
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {locations.slice(0, 4).map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className="shrink-0 flex items-center gap-3 px-4 py-3 rounded-[16px]"
                style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: `${typeColors[loc.type]}18` }}>
                  <MapPin size={13} color={typeColors[loc.type]} />
                </div>
                <div className="text-left">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#FFFFFF", fontWeight: 500, whiteSpace: "nowrap" }}>{loc.name}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: typeColors[loc.type] }}>{loc.type}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
