import { useState } from "react";
import { ChevronLeft, Bookmark, Clock, Star } from "lucide-react";
import { stories, artisans, workshops, routes } from "../../data/index";

interface FavoritesScreenProps {
  onBack: () => void;
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

const tabs = ["Hikayeler", "Ustalar", "Atölyeler", "Rotalar"];

export function FavoritesScreen({ onBack, onNavigate }: FavoritesScreenProps) {
  const [activeTab, setActiveTab] = useState("Hikayeler");

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-6 pt-14 pb-4 shrink-0">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#1B1B1B" }}>
          <ChevronLeft size={20} color="#FFFFFF" />
        </button>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <Bookmark size={14} color="#C9A46A" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#C9A46A", fontWeight: 500 }}>KAYDEDİLENLER</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "#FFFFFF" }}>Favorilerim</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-6 pb-4 overflow-x-auto shrink-0" style={{ scrollbarWidth: "none" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="shrink-0 px-4 py-2 rounded-full"
            style={{
              background: activeTab === tab ? "#C9A46A" : "#1B1B1B",
              border: `1px solid ${activeTab === tab ? "#C9A46A" : "rgba(255,255,255,0.06)"}`,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: activeTab === tab ? "#0A0A0A" : "#B0B0B0",
              fontWeight: activeTab === tab ? 600 : 400,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-6 shrink-0">
        {activeTab === "Hikayeler" && (
          <div className="flex flex-col gap-4">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => onNavigate("story-detail", { id: story.id })}
                className="flex gap-4"
              >
                <img src={story.image} alt={story.title} className="w-24 h-24 rounded-[16px] object-cover shrink-0" />
                <div className="flex-1 text-left">
                  <span className="inline-block px-2 py-0.5 rounded-full mb-2" style={{ background: "rgba(201,164,106,0.12)", fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#C9A46A", letterSpacing: "0.1em" }}>
                    {story.category.toUpperCase()}
                  </span>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2 }}>{story.title}</h4>
                  <div className="flex items-center gap-1 mt-2">
                    <Clock size={9} color="#B0B0B0" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{story.readTime}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === "Ustalar" && (
          <div className="flex flex-col gap-3">
            {artisans.map((artisan) => (
              <button
                key={artisan.id}
                onClick={() => onNavigate("artisan", { id: artisan.id })}
                className="flex items-center gap-4 p-4 rounded-[20px]"
                style={{ background: "#1B1B1B", border: "1px solid rgba(201,164,106,0.1)" }}
              >
                <img src={artisan.image} alt={artisan.name} className="w-14 h-14 rounded-[12px] object-cover shrink-0" />
                <div className="flex-1 text-left">
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 500, color: "#FFFFFF" }}>{artisan.name}</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A" }}>{artisan.subtitle}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={10} color="#C9A46A" fill="#C9A46A" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>{artisan.rating} ({artisan.reviews} değerlendirme)</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === "Atölyeler" && (
          <div className="flex flex-col gap-3">
            {workshops.map((workshop) => (
              <button
                key={workshop.id}
                onClick={() => onNavigate("workshop-detail", { id: workshop.id })}
                className="flex gap-4 p-3 rounded-[20px]"
                style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <img src={workshop.image} alt={workshop.title} className="w-20 h-20 rounded-[14px] object-cover shrink-0" />
                <div className="flex-1 text-left">
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2 }}>{workshop.title}</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0", marginTop: 2 }}>{workshop.level} · {workshop.duration}</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", fontWeight: 600, color: "#C9A46A", marginTop: 4 }}>{workshop.price}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === "Rotalar" && (
          <div className="flex flex-col gap-4">
            {routes.map((route) => (
              <button
                key={route.id}
                onClick={() => onNavigate("routes")}
                className="relative rounded-[20px] overflow-hidden"
                style={{ height: 140 }}
              >
                <img src={route.image} alt={route.title} className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 500, color: "#FFFFFF" }}>{route.title}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{route.duration}</span>
                    <span style={{ color: "rgba(176,176,176,0.4)" }}>·</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{route.distance}</span>
                    <span style={{ color: "rgba(176,176,176,0.4)" }}>·</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{route.stops} durak</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="h-8 shrink-0" />
    </div>
  );
}
