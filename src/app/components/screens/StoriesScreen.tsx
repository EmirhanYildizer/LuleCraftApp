import { useState } from "react";
import { Clock, Bookmark } from "lucide-react";
import { stories } from "../../data/index";

const categories = ["Tümü", "Usta Hikayeleri", "Çırak Hikayeleri", "Kültürel Miras", "Lületaşı Gelenekleri"];

interface StoriesScreenProps {
  onNavigate: (screen: string, params?: Record<string, string>) => void;
  onBack?: () => void;
}

export function StoriesScreen({ onNavigate, onBack }: StoriesScreenProps) {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered = activeCategory === "Tümü" ? stories : stories.filter(s => s.category === activeCategory);
  const featured = filtered.filter(s => s.isFeatured);
  const rest = filtered.filter(s => !s.isFeatured);

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-2 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <div style={{ width: 16, height: 1, background: "#C9A46A" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.2em", color: "#C9A46A", fontWeight: 500 }}>
            KEŞFET
          </span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#FFFFFF" }}>
          Hikayeler
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0", fontWeight: 300, marginTop: 4 }}>
          Lületaşı ustalarının gözünden anlatılan hikayeler
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-3 px-6 py-4 overflow-x-auto shrink-0" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="shrink-0 px-4 py-2 rounded-full"
            style={{
              background: activeCategory === cat ? "#C9A46A" : "#1B1B1B",
              border: `1px solid ${activeCategory === cat ? "#C9A46A" : "rgba(255,255,255,0.06)"}`,
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              color: activeCategory === cat ? "#0A0A0A" : "#B0B0B0",
              fontWeight: activeCategory === cat ? 600 : 400,
              whiteSpace: "nowrap",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Stories */}
      {featured.length > 0 && (
        <div className="shrink-0">
          <div className="px-6 mb-3">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500 }}>
              ÖZEL SEÇİM
            </p>
          </div>
          <div className="flex gap-4 px-6 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {featured.map((story) => (
              <button
                key={story.id}
                onClick={() => onNavigate("story-detail", { id: story.id })}
                className="relative shrink-0 rounded-[24px] overflow-hidden"
                style={{ width: 280, height: 360 }}
              >
                <img src={story.image} alt={story.title} className="size-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.3) 55%, transparent 100%)" }}
                />
                <div className="absolute top-4 right-4">
                  <Bookmark size={18} color="rgba(255,255,255,0.6)" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 rounded-full" style={{ background: "rgba(201,164,106,0.9)", fontFamily: "'Inter', sans-serif", fontSize: "8px", fontWeight: 600, color: "#0A0A0A", letterSpacing: "0.1em" }}>
                    {story.category.toUpperCase()}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.15, textAlign: "left" }}>
                    {story.title}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", fontStyle: "italic", color: "#E8DFC9", marginTop: 4, lineHeight: 1.4, textAlign: "left" }}>
                    {story.subtitle}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <img src={story.authorImage} alt={story.author} className="w-7 h-7 rounded-full object-cover" style={{ border: "1px solid rgba(201,164,106,0.4)" }} />
                    <div className="text-left">
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#FFFFFF", fontWeight: 500 }}>{story.author}</p>
                      <div className="flex items-center gap-1">
                        <Clock size={8} color="rgba(176,176,176,0.6)" />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "rgba(176,176,176,0.6)" }}>{story.readTime}</span>
                        <span style={{ color: "rgba(176,176,176,0.3)", fontSize: "9px" }}>·</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "rgba(176,176,176,0.6)" }}>{story.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* All Stories List */}
      <div className="shrink-0 mt-6">
        <div className="px-6 mb-3">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500 }}>
            TÜM HİKAYELER
          </p>
        </div>
        <div className="flex flex-col gap-4 px-6">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onNavigate("story-detail", { id: story.id })}
              className="flex gap-4"
            >
              <img src={story.image} alt={story.title} className="w-24 h-24 rounded-[16px] object-cover shrink-0" />
              <div className="flex-1 text-left py-1">
                <span className="inline-block px-2 py-0.5 rounded-full mb-2" style={{ background: "rgba(201,164,106,0.12)", fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#C9A46A", letterSpacing: "0.1em" }}>
                  {story.category.toUpperCase()}
                </span>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2 }}>
                  {story.title}
                </h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0", lineHeight: 1.5, marginTop: 4, fontWeight: 300 }}>
                  {story.excerpt.substring(0, 80)}...
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Clock size={9} color="#B0B0B0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{story.readTime}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="h-8 shrink-0" />
    </div>
  );
}
