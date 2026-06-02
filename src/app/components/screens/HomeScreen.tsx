import { Bell, Search, Bookmark, ChevronRight, Star, Clock, Users } from "lucide-react";
import { motion } from "motion/react";
import { stories, artisans, workshops } from "../../data/index";

interface HomeScreenProps {
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A" }}>
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-4 pb-2 shrink-0">
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>9:41</span>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#C9A46A", opacity: 0.6 }} />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-6 pb-4 shrink-0">
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "#C9A46A", fontWeight: 500 }}>
            HOŞ GELDİNİZ
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}>
            Zeynep A.
          </h1>
        </div>
        <div className="flex gap-3">
          <button onClick={() => onNavigate("search")} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#1B1B1B" }}>
            <Search size={18} color="#B0B0B0" />
          </button>
          <button onClick={() => onNavigate("notifications")} className="relative w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#1B1B1B" }}>
            <Bell size={18} color="#B0B0B0" />
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ background: "#C9A46A" }} />
          </button>
        </div>
      </div>

      {/* Hero Story */}
      <div className="px-6 shrink-0">
        <button
          onClick={() => onNavigate("story-detail", { id: stories[0].id })}
          className="relative w-full rounded-[28px] overflow-hidden"
          style={{ height: 260 }}
        >
          <img
            src={stories[0].image}
            alt={stories[0].title}
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 55%, transparent 100%)",
            }}
          />
          {/* Badge */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-full" style={{ background: "rgba(201,164,106,0.9)", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 600, color: "#0A0A0A", letterSpacing: "0.12em" }}>
              ÖZEL HABER
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <Bookmark size={18} color="rgba(255,255,255,0.6)" />
          </div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.15em", color: "#C9A46A", fontWeight: 500, marginBottom: 6 }}>
              {stories[0].category.toUpperCase()}
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.15, marginBottom: 8 }}>
              {stories[0].title}
            </h2>
            <div className="flex items-center gap-3">
              <img src={stories[0].authorImage} alt={stories[0].author} className="w-6 h-6 rounded-full object-cover" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(176,176,176,0.8)" }}>{stories[0].author}</span>
              <span style={{ color: "rgba(176,176,176,0.4)" }}>·</span>
              <Clock size={10} color="rgba(176,176,176,0.6)" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(176,176,176,0.6)" }}>{stories[0].readTime}</span>
            </div>
          </div>
        </button>
      </div>

      {/* Featured Artisan */}
      <div className="mt-8 shrink-0">
        <div className="flex items-center justify-between px-6 mb-4">
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#C9A46A", fontWeight: 500 }}>HAFTANIN USTASI</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 400, color: "#FFFFFF" }}>Öne Çıkan Sanatçı</h3>
          </div>
        </div>
        <button
          onClick={() => onNavigate("artisan", { id: artisans[0].id })}
          className="mx-6 flex items-center gap-4 p-4 rounded-[20px]"
          style={{ background: "#1B1B1B", border: "1px solid rgba(201,164,106,0.12)" }}
        >
          <div className="relative shrink-0">
            <img src={artisans[0].image} alt={artisans[0].name} className="w-16 h-16 rounded-[16px] object-cover" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#C9A46A" }}>
              <Star size={9} color="#0A0A0A" fill="#0A0A0A" />
            </div>
          </div>
          <div className="flex-1 text-left">
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 500, color: "#FFFFFF" }}>{artisans[0].name}</h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A", fontWeight: 500 }}>{artisans[0].subtitle}</p>
            <div className="flex items-center gap-2 mt-1">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{artisans[0].experience} yıl deneyim</span>
              <span style={{ color: "rgba(176,176,176,0.3)" }}>·</span>
              <Star size={9} color="#C9A46A" fill="#C9A46A" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{artisans[0].rating}</span>
            </div>
          </div>
          <ChevronRight size={16} color="rgba(176,176,176,0.4)" />
        </button>
      </div>

      {/* Story Carousel */}
      <div className="mt-8 shrink-0">
        <div className="flex items-center justify-between px-6 mb-4">
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 400, color: "#FFFFFF" }}>Hikayeler</h3>
          <button onClick={() => onNavigate("stories")} className="flex items-center gap-1">
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A" }}>Tümünü Gör</span>
            <ChevronRight size={12} color="#C9A46A" />
          </button>
        </div>
        <div className="flex gap-4 px-6 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {stories.slice(1).map((story) => (
            <button
              key={story.id}
              onClick={() => onNavigate("story-detail", { id: story.id })}
              className="shrink-0 rounded-[20px] overflow-hidden relative"
              style={{ width: 160, height: 200 }}
            >
              <img src={story.image} alt={story.title} className="size-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 55%)" }} />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded-full" style={{ background: "rgba(10,10,10,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#C9A46A", letterSpacing: "0.1em" }}>
                  {story.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2 }}>
                  {story.title}
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <Clock size={8} color="rgba(176,176,176,0.6)" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "rgba(176,176,176,0.6)" }}>{story.readTime}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recommended Workshops */}
      <div className="mt-8 shrink-0">
        <div className="flex items-center justify-between px-6 mb-4">
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 400, color: "#FFFFFF" }}>Önerilen Atölyeler</h3>
          <button onClick={() => onNavigate("workshops")} className="flex items-center gap-1">
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A" }}>Tümü</span>
            <ChevronRight size={12} color="#C9A46A" />
          </button>
        </div>
        <div className="flex flex-col gap-3 px-6">
          {workshops.slice(0, 2).map((workshop) => (
            <button
              key={workshop.id}
              onClick={() => onNavigate("workshop-detail", { id: workshop.id })}
              className="flex gap-4 p-3 rounded-[20px]"
              style={{ background: "#1B1B1B", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <img src={workshop.image} alt={workshop.title} className="w-20 h-20 rounded-[14px] object-cover shrink-0" />
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full" style={{ background: workshop.level === "Başlangıç" ? "rgba(138,165,123,0.2)" : "rgba(201,164,106,0.15)", fontFamily: "'Inter', sans-serif", fontSize: "8px", color: workshop.level === "Başlangıç" ? "#8AA57B" : "#C9A46A", letterSpacing: "0.08em" }}>
                    {workshop.level}
                  </span>
                  {workshop.available <= 2 && (
                    <span className="px-2 py-0.5 rounded-full" style={{ background: "rgba(157,107,83,0.2)", fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#9D6B53" }}>
                      Son {workshop.available} yer
                    </span>
                  )}
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2 }}>
                  {workshop.title}
                </h4>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center gap-1">
                    <Clock size={9} color="#B0B0B0" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={9} color="#B0B0B0" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{workshop.participants}</span>
                  </div>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", fontWeight: 600, color: "#C9A46A", marginTop: 4 }}>
                  {workshop.price}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Events Banner */}
      <div className="mx-6 mt-6 mb-6 p-5 rounded-[20px] shrink-0" style={{ background: "linear-gradient(135deg, rgba(201,164,106,0.15) 0%, rgba(157,107,83,0.12) 100%)", border: "1px solid rgba(201,164,106,0.2)" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#C9A46A", fontWeight: 500 }}>YAKLAŞAN ETKİNLİK</p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, color: "#FFFFFF", marginTop: 4 }}>
          Eskişehir Lületaşı Festivali
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#B0B0B0", marginTop: 4 }}>3–7 Temmuz 2025 · Odunpazarı Meydanı</p>
        <button
          className="mt-4 px-4 py-2 rounded-xl"
          style={{ background: "#C9A46A", fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, color: "#0A0A0A" }}
        >
          Detayları Gör
        </button>
      </div>

      <div className="shrink-0 h-4" />
    </div>
  );
}
