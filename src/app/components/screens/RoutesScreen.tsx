import { ChevronLeft, MapPin, Clock, Footprints, Bookmark, ChevronRight, Navigation } from "lucide-react";
import { routes } from "../../data/index";

interface RoutesScreenProps {
  onBack: () => void;
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

const difficultyColors: Record<string, string> = {
  "Kolay": "#8AA57B",
  "Orta": "#C9A46A",
  "Zor": "#9D6B53",
};

export function RoutesScreen({ onBack, onNavigate }: RoutesScreenProps) {
  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-6 pt-14 pb-6 shrink-0">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#1B1B1B" }}>
          <ChevronLeft size={20} color="#FFFFFF" />
        </button>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <div style={{ width: 12, height: 1, background: "#C9A46A" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.2em", color: "#C9A46A", fontWeight: 500 }}>KEŞFEDİN</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", fontWeight: 300, color: "#FFFFFF" }}>Kültürel Rotalar</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="px-6 mb-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#B0B0B0", lineHeight: 1.65, fontWeight: 300 }}>
          Eskişehir'in kültürel mirasını en iyi şekilde deneyimlemek için özenle hazırlanmış rotalar. Her rota farklı bir hikaye anlatır.
        </p>
      </div>

      {/* Routes */}
      <div className="flex flex-col gap-6 px-6 shrink-0">
        {routes.map((route, idx) => (
          <div key={route.id}>
            {/* Route Card */}
            <div className="rounded-[24px] overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
              {/* Hero image */}
              <div className="relative" style={{ height: 200 }}>
                <img src={route.image} alt={route.title} className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.97) 0%, transparent 55%)" }} />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full" style={{ background: `${difficultyColors[route.difficulty]}22`, border: `1px solid ${difficultyColors[route.difficulty]}55`, fontFamily: "'Inter', sans-serif", fontSize: "9px", color: difficultyColors[route.difficulty], fontWeight: 600, letterSpacing: "0.1em" }}>
                    {route.difficulty.toUpperCase()}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(8px)" }}>
                    <Bookmark size={14} color="rgba(255,255,255,0.7)" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2 }}>
                    {route.title}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", fontStyle: "italic", color: "#E8DFC9", marginTop: 4 }}>
                    {route.subtitle}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between px-5 py-4" style={{ background: "#1B1B1B" }}>
                <div className="flex items-center gap-1">
                  <Clock size={13} color="#B0B0B0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0" }}>{route.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Footprints size={13} color="#B0B0B0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0" }}>{route.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={13} color="#B0B0B0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0" }}>{route.stops} durak</span>
                </div>
              </div>

              {/* Description */}
              <div className="px-5 py-4" style={{ background: "#1B1B1B", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(176,176,176,0.8)", lineHeight: 1.6, fontWeight: 300 }}>
                  {route.description}
                </p>
              </div>

              {/* Stops Preview */}
              {route.locations.length > 0 && (
                <div className="px-5 py-4" style={{ background: "#1B1B1B", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.15em", color: "#B0B0B0", fontWeight: 500, marginBottom: 10 }}>
                    DURAKLAR
                  </p>
                  <div className="flex flex-col gap-3">
                    {route.locations.slice(0, 3).map((loc, i) => (
                      <div key={loc.id} className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: i === 0 ? "rgba(201,164,106,0.2)" : "rgba(255,255,255,0.05)", border: `1px solid ${i === 0 ? "#C9A46A" : "rgba(255,255,255,0.08)"}` }}
                          >
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: i === 0 ? "#C9A46A" : "#B0B0B0", fontWeight: 600 }}>{i + 1}</span>
                          </div>
                        </div>
                        <img src={loc.image} alt={loc.name} className="w-10 h-10 rounded-[10px] object-cover shrink-0" />
                        <div className="flex-1">
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#FFFFFF", fontWeight: 500 }}>{loc.name}</p>
                          <div className="flex items-center gap-2">
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C9A46A" }}>{loc.type}</span>
                            <span style={{ color: "rgba(176,176,176,0.3)", fontSize: "10px" }}>·</span>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{loc.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {route.locations.length > 3 && (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A", paddingLeft: 32 }}>
                        +{route.locations.length - 3} durak daha...
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 px-5 py-4" style={{ background: "#1B1B1B", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <button
                  onClick={() => onNavigate("experience", { routeId: route.id })}
                  className="flex-1 py-3 rounded-[14px] flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #C9A46A, #9D6B53)" }}
                >
                  <Navigation size={14} color="#0A0A0A" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0A0A0A" }}>Rotayı Başlat</span>
                </button>
                <button
                  className="px-4 py-3 rounded-[14px] flex items-center justify-center gap-2"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Bookmark size={14} color="#B0B0B0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0" }}>Kaydet</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-8 shrink-0" />
    </div>
  );
}
