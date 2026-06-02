import { ChevronLeft, Star, Clock, Users, MapPin, Calendar, CheckCircle, ChevronRight } from "lucide-react";
import { workshops } from "../../data/index";

interface WorkshopDetailScreenProps {
  workshopId: string;
  onBack: () => void;
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}

export function WorkshopDetailScreen({ workshopId, onBack, onNavigate }: WorkshopDetailScreenProps) {
  const workshop = workshops.find(w => w.id === workshopId) ?? workshops[0];

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      {/* Hero */}
      <div className="relative shrink-0" style={{ height: 320 }}>
        <img src={workshop.image} alt={workshop.title} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.5) 60%, rgba(10,10,10,1) 100%)" }} />
        <div className="absolute top-14 left-0 right-0 flex items-center justify-between px-6">
          <button onClick={onBack} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}>
            <ChevronLeft size={20} color="#FFFFFF" />
          </button>
          <span className="px-3 py-1.5 rounded-full" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)", fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C9A46A", fontWeight: 500 }}>
            {workshop.level}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#C9A46A", fontWeight: 500 }}>{workshop.category.toUpperCase()}</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.15, marginTop: 4 }}>
            {workshop.title}
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", fontStyle: "italic", color: "#E8DFC9", marginTop: 4 }}>
            {workshop.subtitle}
          </p>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 mx-6 mt-4 gap-3 shrink-0">
        {[
          { icon: Star, color: "#C9A46A", label: "Puan", value: `${workshop.rating} (${workshop.reviews})` },
          { icon: Clock, color: "#B0B0B0", label: "Süre", value: workshop.duration },
          { icon: Users, color: "#B0B0B0", label: "Katılımcı", value: workshop.participants },
        ].map(({ icon: Icon, color, label, value }) => (
          <div key={label} className="flex flex-col items-center py-4 rounded-[16px]" style={{ background: "#1B1B1B" }}>
            <Icon size={16} color={color} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#FFFFFF", fontWeight: 500, marginTop: 4 }}>{value}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0", marginTop: 2 }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Instructor */}
      <div className="mx-6 mt-4 p-4 rounded-[20px] flex items-center gap-4 shrink-0" style={{ background: "#1B1B1B", border: "1px solid rgba(201,164,106,0.12)" }}>
        <img src={workshop.instructorImage} alt={workshop.instructor} className="w-14 h-14 rounded-[12px] object-cover" />
        <div className="flex-1">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "#C9A46A", fontWeight: 500 }}>EĞİTMEN</p>
          <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 500, color: "#FFFFFF" }}>{workshop.instructor}</h4>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>Baş Usta — 42 yıl deneyim</p>
        </div>
        <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(201,164,106,0.15)" }}>
          <ChevronRight size={14} color="#C9A46A" />
        </button>
      </div>

      {/* Description */}
      <div className="px-6 mt-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 10 }}>HAKKINDA</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(176,176,176,0.85)", lineHeight: 1.7, fontWeight: 300 }}>
          {workshop.description}
        </p>
      </div>

      {/* Agenda */}
      <div className="px-6 mt-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 12 }}>PROGRAM</p>
        <div className="relative flex flex-col gap-0">
          <div className="absolute left-[26px] top-4 bottom-4 w-px" style={{ background: "rgba(201,164,106,0.2)" }} />
          {workshop.agenda.map((item, i) => (
            <div key={i} className="flex gap-4 pb-4">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-[13px] h-[13px] rounded-full border-2 mt-1 shrink-0" style={{ borderColor: i === 0 ? "#C9A46A" : "rgba(201,164,106,0.4)", background: i === 0 ? "#C9A46A" : "#0A0A0A" }} />
              </div>
              <div className="flex-1 pb-4 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#C9A46A", fontWeight: 600 }}>{item.time}</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#E8DFC9", marginTop: 2, fontWeight: 400 }}>{item.item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Includes */}
      <div className="px-6 mt-4 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 10 }}>DAHİL OLANLAR</p>
        <div className="flex flex-wrap gap-2">
          {workshop.includes.map((item) => (
            <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: "rgba(138,165,123,0.1)", border: "1px solid rgba(138,165,123,0.2)" }}>
              <CheckCircle size={10} color="#8AA57B" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#8AA57B" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="mx-6 mt-6 p-4 rounded-[20px] flex items-center gap-3 shrink-0" style={{ background: "#1B1B1B" }}>
        <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: "rgba(201,164,106,0.12)" }}>
          <MapPin size={18} color="#C9A46A" />
        </div>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#FFFFFF", fontWeight: 500 }}>{workshop.location}</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>Odunpazarı, Eskişehir</p>
        </div>
      </div>

      {/* Available Dates */}
      <div className="px-6 mt-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 10 }}>MÜSAİT TARİHLER</p>
        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {workshop.nextDates.map((date, i) => (
            <button
              key={date}
              className="shrink-0 px-4 py-3 rounded-[14px] flex flex-col items-center"
              style={{
                background: i === 0 ? "rgba(201,164,106,0.15)" : "#1B1B1B",
                border: `1px solid ${i === 0 ? "rgba(201,164,106,0.4)" : "rgba(255,255,255,0.05)"}`,
              }}
            >
              <Calendar size={12} color={i === 0 ? "#C9A46A" : "#B0B0B0"} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: i === 0 ? "#C9A46A" : "#B0B0B0", fontWeight: i === 0 ? 600 : 400, marginTop: 4, whiteSpace: "nowrap" }}>
                {date}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-6 shrink-0">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 10, paddingLeft: 24 }}>GALERİ</p>
        <div className="flex gap-3 px-6 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {[
            "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=400&q=80",
            "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=400&q=80",
            "https://images.unsplash.com/photo-1626252685663-64c6bf60afb1?w=400&q=80",
          ].map((img, i) => (
            <img key={i} src={img} alt={`Galeri ${i+1}`} className="shrink-0 rounded-[14px] object-cover" style={{ width: 120, height: 100 }} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 mt-6 mb-4 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", fontWeight: 600, color: "#C9A46A" }}>{workshop.price}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#B0B0B0" }}> / kişi</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: workshop.available > 0 ? "#8AA57B" : "#9D6B53" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B0B0B0" }}>{workshop.available} yer kaldı</span>
          </div>
        </div>
        <button
          onClick={() => onNavigate("reservation", { workshopId: workshop.id })}
          className="w-full py-4 rounded-[18px] flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(135deg, #C9A46A, #9D6B53)" }}
        >
          <Calendar size={18} color="#0A0A0A" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#0A0A0A" }}>Rezervasyon Yap</span>
        </button>
      </div>

      <div className="h-4 shrink-0" />
    </div>
  );
}
