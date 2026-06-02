import { useState } from "react";
import { Search, X, Clock, TrendingUp, ChevronRight } from "lucide-react";
import { stories, artisans, workshops } from "../../data/index";

interface SearchScreenProps {
  onBack: () => void;
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

const recentSearches = ["Mehmet Usta", "Lületaşı oyma", "Odunpazarı atölye", "Kültür rotası"];
const popularSearches = ["Başlangıç atölye", "Usta portreleri", "Miras rotaları", "Tarihi çarşı", "Zanaat dersleri"];

const allResults = [
  ...stories.map(s => ({ id: s.id, type: "hikaye" as const, title: s.title, subtitle: s.category, image: s.image })),
  ...artisans.map(a => ({ id: a.id, type: "usta" as const, title: a.name, subtitle: a.subtitle, image: a.image })),
  ...workshops.map(w => ({ id: w.id, type: "atölye" as const, title: w.title, subtitle: w.level, image: w.image })),
];

const typeColorMap: Record<string, string> = {
  hikaye: "#C9A46A",
  usta: "#E8DFC9",
  atölye: "#8AA57B",
};

const typeNavMap: Record<string, string> = {
  hikaye: "story-detail",
  usta: "artisan",
  atölye: "workshop-detail",
};

export function SearchScreen({ onBack, onNavigate }: SearchScreenProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const results = query.length > 1
    ? allResults.filter(r => r.title.toLowerCase().includes(query.toLowerCase()) || r.subtitle.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-4 shrink-0">
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#FFFFFF", marginBottom: 16 }}>
          Ara
        </h1>
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-[18px]" style={{ background: "#1B1B1B", border: `1px solid ${isFocused ? "rgba(201,164,106,0.4)" : "rgba(255,255,255,0.06)"}` }}>
          <Search size={18} color={isFocused ? "#C9A46A" : "#B0B0B0"} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Usta, hikaye, atölye, rota..."
            className="flex-1 bg-transparent outline-none"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#FFFFFF",
              caretColor: "#C9A46A",
            }}
          />
          {query.length > 0 && (
            <button onClick={() => setQuery("")}>
              <X size={16} color="#B0B0B0" />
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {query.length > 1 ? (
        <div className="px-6 shrink-0">
          {results.length === 0 ? (
            <div className="flex flex-col items-center py-16">
              <Search size={40} color="rgba(176,176,176,0.2)" />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "rgba(255,255,255,0.3)", marginTop: 16 }}>
                Sonuç bulunamadı
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(176,176,176,0.4)", marginTop: 8 }}>
                "{query}" için başka bir şey deneyin
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 4 }}>
                {results.length} SONUÇ
              </p>
              {results.map((result) => (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => onNavigate(typeNavMap[result.type], { id: result.id, workshopId: result.id, artisanId: result.id, storyId: result.id })}
                  className="flex items-center gap-4"
                >
                  <img src={result.image} alt={result.title} className="w-14 h-14 rounded-[12px] object-cover shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full" style={{ background: `${typeColorMap[result.type]}18`, fontFamily: "'Inter', sans-serif", fontSize: "8px", color: typeColorMap[result.type], letterSpacing: "0.1em", fontWeight: 500 }}>
                        {result.type.toUpperCase()}
                      </span>
                    </div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2 }}>
                      {result.title}
                    </h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>{result.subtitle}</p>
                  </div>
                  <ChevronRight size={14} color="rgba(176,176,176,0.4)" />
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Recent Searches */}
          <div className="px-6 mb-6 shrink-0">
            <div className="flex items-center justify-between mb-3">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500 }}>SON ARAMALAR</p>
              <button><span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A" }}>Temizle</span></button>
            </div>
            <div className="flex flex-col gap-2">
              {recentSearches.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="flex items-center gap-3 py-2"
                >
                  <Clock size={14} color="#B0B0B0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#FFFFFF" }}>{s}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Searches */}
          <div className="px-6 mb-6 shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={14} color="#C9A46A" />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500 }}>POPÜLER ARAMALAR</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-4 py-2 rounded-full"
                  style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="mx-6 p-4 rounded-[20px] shrink-0" style={{ background: "rgba(201,164,106,0.06)", border: "1px solid rgba(201,164,106,0.15)" }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(201,164,106,0.2)" }}>
                <span style={{ fontSize: "10px" }}>✨</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A", fontWeight: 500 }}>Sizin için öneriler</p>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0", lineHeight: 1.6, fontWeight: 300 }}>
              İlgi alanlarınıza göre "Geleneksel Lületaşı Rotası" veya "Başlangıç Seviye Oyma Atölyesi" ilginizi çekebilir.
            </p>
          </div>

          {/* AI-powered categories */}
          <div className="mt-6 px-6 shrink-0">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 12 }}>KATEGORİLER</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Ustalar", count: "14", color: "#C9A46A", img: "https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?w=200&q=80" },
                { label: "Hikayeler", count: "38", color: "#E8DFC9", img: "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=200&q=80" },
                { label: "Atölyeler", count: "12", color: "#8AA57B", img: "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=200&q=80" },
                { label: "Rotalar", count: "6", color: "#9D6B53", img: "https://images.unsplash.com/photo-1626252685663-64c6bf60afb1?w=200&q=80" },
              ].map(({ label, count, color, img }) => (
                <button key={label} className="relative rounded-[18px] overflow-hidden" style={{ height: 100 }}>
                  <img src={img} alt={label} className="absolute inset-0 size-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.65)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 500, color: "#FFFFFF" }}>{label}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color }}>+{count} içerik</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="h-8 shrink-0" />
    </div>
  );
}
