import { ChevronLeft, Star, MapPin, Award, Calendar, BookOpen, Heart, Share2 } from "lucide-react";
import { artisans } from "../../data/index";

interface ArtisanScreenProps {
  artisanId: string;
  onBack: () => void;
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

export function ArtisanScreen({ artisanId, onBack, onNavigate }: ArtisanScreenProps) {
  const artisan = artisans.find(a => a.id === artisanId) ?? artisans[0];

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Hero */}
      <div className="relative shrink-0" style={{ height: 380 }}>
        <img src={artisan.coverImage} alt={artisan.name} className="absolute inset-0 size-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,1) 100%)" }}
        />
        {/* Controls */}
        <div className="absolute top-14 left-0 right-0 flex items-center justify-between px-6">
          <button onClick={onBack} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}>
            <ChevronLeft size={20} color="#FFFFFF" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}>
              <Share2 size={18} color="#FFFFFF" />
            </button>
            <button className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}>
              <Heart size={18} color="#FFFFFF" />
            </button>
          </div>
        </div>

        {/* Artist info overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
          <div className="flex items-end gap-4">
            <img
              src={artisan.image}
              alt={artisan.name}
              className="w-20 h-20 rounded-[18px] object-cover shrink-0"
              style={{ border: "2px solid rgba(201,164,106,0.5)" }}
            />
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#C9A46A", fontWeight: 500 }}>{artisan.title.toUpperCase()}</p>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}>
                {artisan.name}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <MapPin size={10} color="#B0B0B0" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>{artisan.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 mx-6 mt-4 rounded-[20px] overflow-hidden shrink-0" style={{ background: "#1B1B1B" }}>
        {[
          { label: "Eser", value: artisan.works.toLocaleString() },
          { label: "Yıl", value: artisan.experience },
          { label: "Takipçi", value: `${(artisan.followers/1000).toFixed(1)}K` },
          { label: "Puan", value: artisan.rating },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center py-4" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 500, color: "#C9A46A" }}>{stat.value}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0", marginTop: 2 }}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 px-6 mt-4 shrink-0">
        <button
          onClick={() => onNavigate("reservation", { workshopId: "basic-carving" })}
          className="flex-1 py-3 rounded-[16px] flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(135deg, #C9A46A, #9D6B53)" }}
        >
          <Calendar size={16} color="#0A0A0A" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0A0A0A" }}>Atölye Rezervasyonu</span>
        </button>
        <button
          className="w-12 h-12 rounded-[16px] flex items-center justify-center"
          style={{ background: "#1B1B1B", border: "1px solid rgba(201,164,106,0.2)" }}
        >
          <Heart size={18} color="#C9A46A" />
        </button>
      </div>

      {/* Biography */}
      <div className="px-6 mt-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 10 }}>
          BİYOGRAFİ
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(176,176,176,0.85)", lineHeight: 1.7, fontWeight: 300 }}>
          {artisan.bio}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(201,164,106,0.12)", fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A" }}>
            Uzmanlık: {artisan.specialty}
          </span>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 12, paddingLeft: 24 }}>
          ESER GALERİSİ
        </p>
        <div className="flex gap-3 px-6 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {artisan.gallery.map((img, i) => (
            <img key={i} src={img} alt={`Eser ${i+1}`} className="shrink-0 rounded-[16px] object-cover" style={{ width: 140, height: 140 }} />
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="px-6 mt-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 10 }}>
          ÖDÜLLER & BAŞARILAR
        </p>
        <div className="flex flex-col gap-3">
          {artisan.achievements.map((achievement, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-[14px]" style={{ background: "#1B1B1B" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,164,106,0.15)" }}>
                <Award size={14} color="#C9A46A" />
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#E8DFC9", fontWeight: 400 }}>{achievement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stories from Artisan */}
      <div className="px-6 mt-6 shrink-0">
        <div className="flex items-center justify-between mb-3">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500 }}>HİKAYELER</p>
          <button onClick={() => onNavigate("stories")}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A" }}>Tümü</span>
          </button>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate("story-detail", { id: "sons-of-earth" })}
            className="relative flex-1 rounded-[16px] overflow-hidden"
            style={{ height: 120 }}
          >
            <img src="https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=400&q=80" alt="story" className="size-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center gap-1 mb-1">
                <BookOpen size={9} color="#C9A46A" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#C9A46A" }}>8 dk</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", color: "#FFFFFF", fontWeight: 500, textAlign: "left" }}>Toprağın Oğulları</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate("story-detail", { id: "pipe-traditions" })}
            className="relative flex-1 rounded-[16px] overflow-hidden"
            style={{ height: 120 }}
          >
            <img src="https://images.unsplash.com/photo-1511306162219-1c5a469ab86c?w=400&q=80" alt="story" className="size-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center gap-1 mb-1">
                <BookOpen size={9} color="#C9A46A" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#C9A46A" }}>7 dk</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", color: "#FFFFFF", fontWeight: 500, textAlign: "left" }}>Piponun Felsefesi</p>
            </div>
          </button>
        </div>
      </div>

      <div className="h-10 shrink-0" />
    </div>
  );
}
