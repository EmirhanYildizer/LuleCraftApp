import { ChevronLeft, Bookmark, Share2, Clock, Quote } from "lucide-react";
import { stories } from "../../data/index";

interface StoryDetailScreenProps {
  storyId: string;
  onBack: () => void;
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

export function StoryDetailScreen({ storyId, onBack, onNavigate }: StoryDetailScreenProps) {
  const story = stories.find(s => s.id === storyId) ?? stories[0];

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Hero */}
      <div className="relative shrink-0" style={{ height: 340 }}>
        <img src={story.image} alt={story.title} className="absolute inset-0 size-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.5) 60%, rgba(10,10,10,1) 100%)" }}
        />
        {/* Reading progress bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div style={{ width: "35%", height: "100%", background: "#C9A46A" }} />
        </div>

        {/* Top controls */}
        <div className="absolute top-14 left-0 right-0 flex items-center justify-between px-6">
          <button onClick={onBack} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}>
            <ChevronLeft size={20} color="#FFFFFF" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}>
              <Share2 size={18} color="#FFFFFF" />
            </button>
            <button className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}>
              <Bookmark size={18} color="#C9A46A" />
            </button>
          </div>
        </div>

        {/* Category */}
        <div className="absolute bottom-5 left-6">
          <span className="px-3 py-1 rounded-full" style={{ background: "rgba(201,164,106,0.9)", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 600, color: "#0A0A0A", letterSpacing: "0.12em" }}>
            {story.category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 shrink-0">
        {/* Title */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "36px",
            fontWeight: 400,
            color: "#FFFFFF",
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
          }}
        >
          {story.title}
        </h1>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "#E8DFC9", marginTop: 8, lineHeight: 1.4 }}>
          {story.subtitle}
        </p>

        {/* Author + Meta */}
        <div className="flex items-center gap-4 mt-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <img src={story.authorImage} alt={story.author} className="w-10 h-10 rounded-full object-cover" style={{ border: "1.5px solid rgba(201,164,106,0.4)" }} />
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#FFFFFF", fontWeight: 500 }}>{story.author}</p>
            <div className="flex items-center gap-2">
              <Clock size={10} color="#B0B0B0" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>{story.readTime}</span>
              <span style={{ color: "rgba(176,176,176,0.3)" }}>·</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>{story.date}</span>
            </div>
          </div>
        </div>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px",
            color: "#E8DFC9",
            lineHeight: 1.6,
            marginTop: 24,
            fontWeight: 400,
          }}
        >
          {story.excerpt}
        </p>

        {/* Body paragraphs */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            color: "rgba(176,176,176,0.85)",
            lineHeight: 1.75,
            marginTop: 16,
            fontWeight: 300,
          }}
        >
          {story.content}
        </p>

        {/* Pull Quote */}
        <div className="my-8 px-5 py-6 rounded-[20px]" style={{ background: "rgba(201,164,106,0.07)", borderLeft: "3px solid #C9A46A" }}>
          <Quote size={20} color="#C9A46A" className="mb-3" />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontStyle: "italic",
              color: "#E8DFC9",
              lineHeight: 1.45,
              fontWeight: 400,
            }}
          >
            {story.pullQuote}
          </p>
        </div>

        {/* Additional content */}
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "rgba(176,176,176,0.85)", lineHeight: 1.75, fontWeight: 300 }}>
          Lületaşı, dünyada yalnızca Eskişehir'in Sarısın bölgesinde çıkarılan nadir bir mineraldir. Bu eşsizlik, Eskişehir'i yüzyıllar boyunca uluslararası bir zanaat merkezi haline getirmiştir. Osmanlı döneminden başlayarak Avrupa saray sofralarına kadar uzanan bu yolculuk, her ustanın elinde yeni bir boyut kazanmıştır.
        </p>

        {/* Image Gallery */}
        <div className="mt-8 shrink-0">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 12 }}>
            FOTOĞRAF GALERİSİ
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=400&q=80",
              "https://images.unsplash.com/photo-1511306162219-1c5a469ab86c?w=400&q=80",
              "https://images.unsplash.com/photo-1626252685663-64c6bf60afb1?w=400&q=80",
              "https://images.unsplash.com/photo-1655376407042-b35a5c396cae?w=400&q=80",
            ].map((img, i) => (
              <img key={i} src={img} alt={`Galeri ${i+1}`} className="w-full aspect-square rounded-[16px] object-cover" />
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {story.tags.map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-full" style={{ background: "#1B1B1B", fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Stories */}
        <div className="mt-8">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 12 }}>
            İLGİLİ HİKAYELER
          </p>
          <div className="flex flex-col gap-3">
            {stories.filter(s => s.id !== storyId).slice(0, 2).map((s) => (
              <button
                key={s.id}
                onClick={() => onNavigate("story-detail", { id: s.id })}
                className="flex gap-3"
              >
                <img src={s.image} alt={s.title} className="w-16 h-16 rounded-[12px] object-cover shrink-0" />
                <div className="flex-1 text-left">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#C9A46A", letterSpacing: "0.1em", fontWeight: 500 }}>{s.category.toUpperCase()}</p>
                  <h5 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2 }}>{s.title}</h5>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock size={9} color="#B0B0B0" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>{s.readTime}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 shrink-0" />
    </div>
  );
}
