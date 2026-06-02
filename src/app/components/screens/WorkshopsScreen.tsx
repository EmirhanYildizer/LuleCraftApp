import { useState } from "react";
import { Star, Clock, Users, ChevronRight } from "lucide-react";
import { workshops } from "../../data/index";

const levels = ["Tümü", "Başlangıç", "Orta", "İleri"];
const categories = ["Tümü", "Oyma", "Heykelcilik", "Kültürel Deneyim"];

interface WorkshopsScreenProps {
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

export function WorkshopsScreen({ onNavigate }: WorkshopsScreenProps) {
  const [activeLevel, setActiveLevel] = useState("Tümü");
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered = workshops.filter(w => {
    const levelMatch = activeLevel === "Tümü" || w.level === activeLevel || (activeLevel === "Orta" && w.level === "Herkes");
    const catMatch = activeCategory === "Tümü" || w.category === activeCategory || (activeCategory === "Kültürel Deneyim" && w.category === "Kültürel Deneyim");
    return levelMatch && catMatch;
  });

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-2 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <div style={{ width: 16, height: 1, background: "#C9A46A" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.2em", color: "#C9A46A", fontWeight: 500 }}>
            KATILABİLECEĞİNİZ
          </span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#FFFFFF" }}>
          Atölyeler
        </h1>
      </div>

      {/* Level Filters */}
      <div className="flex gap-2 px-6 pt-2 pb-1 overflow-x-auto shrink-0" style={{ scrollbarWidth: "none" }}>
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setActiveLevel(level)}
            className="shrink-0 px-4 py-2 rounded-full"
            style={{
              background: activeLevel === level ? "#C9A46A" : "#1B1B1B",
              border: `1px solid ${activeLevel === level ? "#C9A46A" : "rgba(255,255,255,0.06)"}`,
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              color: activeLevel === level ? "#0A0A0A" : "#B0B0B0",
              fontWeight: activeLevel === level ? 600 : 400,
            }}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 px-6 pb-4 overflow-x-auto shrink-0" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="shrink-0 px-4 py-2 rounded-full"
            style={{
              background: "transparent",
              border: `1px solid ${activeCategory === cat ? "rgba(201,164,106,0.6)" : "rgba(255,255,255,0.06)"}`,
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              color: activeCategory === cat ? "#C9A46A" : "#B0B0B0",
              fontWeight: activeCategory === cat ? 500 : 400,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Workshop */}
      {filtered.length > 0 && (
        <div className="px-6 mb-6 shrink-0">
          <button
            onClick={() => onNavigate("workshop-detail", { id: filtered[0].id })}
            className="relative w-full rounded-[24px] overflow-hidden"
            style={{ height: 280 }}
          >
            <img src={filtered[0].image} alt={filtered[0].title} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.97) 0%, transparent 55%)" }} />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full" style={{ background: "rgba(201,164,106,0.9)", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 600, color: "#0A0A0A", letterSpacing: "0.1em" }}>
                {filtered[0].level.toUpperCase()}
              </span>
              {filtered[0].available <= 3 && (
                <span className="px-3 py-1 rounded-full" style={{ background: "rgba(157,107,83,0.9)", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 600, color: "#FFFFFF" }}>
                  Son {filtered[0].available} yer!
                </span>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.15em", color: "#C9A46A", fontWeight: 500 }}>{filtered[0].category.toUpperCase()}</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.15, marginTop: 4 }}>
                {filtered[0].title}
              </h3>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                  <Star size={11} color="#C9A46A" fill="#C9A46A" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#FFFFFF", fontWeight: 500 }}>{filtered[0].rating}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>({filtered[0].reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={11} color="#B0B0B0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>{filtered[0].duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={11} color="#B0B0B0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>{filtered[0].participants}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 600, color: "#C9A46A" }}>{filtered[0].price}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}> / kişi</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-[12px]" style={{ background: "rgba(201,164,106,0.9)" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, color: "#0A0A0A" }}>Detaylar</span>
                  <ChevronRight size={12} color="#0A0A0A" />
                </div>
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Workshop list */}
      <div className="flex flex-col gap-4 px-6 shrink-0">
        {filtered.slice(1).map((workshop) => (
          <button
            key={workshop.id}
            onClick={() => onNavigate("workshop-detail", { id: workshop.id })}
            className="flex gap-4 p-4 rounded-[20px]"
            style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="relative shrink-0">
              <img src={workshop.image} alt={workshop.title} className="w-24 h-24 rounded-[14px] object-cover" />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full" style={{ background: "rgba(10,10,10,0.8)", backdropFilter: "blur(8px)" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: workshop.level === "Başlangıç" ? "#8AA57B" : "#C9A46A", fontWeight: 600 }}>
                  {workshop.level}
                </span>
              </div>
            </div>
            <div className="flex-1 text-left">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#C9A46A", letterSpacing: "0.12em", fontWeight: 500 }}>{workshop.category.toUpperCase()}</p>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2, marginTop: 2 }}>
                {workshop.title}
              </h4>
              <div className="flex items-center gap-1 mt-1">
                <img src={workshop.instructorImage} alt={workshop.instructor} className="w-4 h-4 rounded-full object-cover" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{workshop.instructor}</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <Star size={9} color="#C9A46A" fill="#C9A46A" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{workshop.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={9} color="#B0B0B0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{workshop.duration}</span>
                </div>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 600, color: "#C9A46A", marginTop: 4 }}>
                {workshop.price}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="h-8 shrink-0" />
    </div>
  );
}
