import { ChevronLeft, Play, Pause, ChevronRight, Volume2, VolumeX, Mic } from "lucide-react";
import { useState } from "react";
import { routes } from "../../data/index";

interface ExperienceScreenProps {
  routeId: string;
  onBack: () => void;
}

export function ExperienceScreen({ routeId, onBack }: ExperienceScreenProps) {
  const route = routes.find(r => r.id === routeId) ?? routes[0];
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentStop, setCurrentStop] = useState(0);

  const stop = route.locations[currentStop] ?? {
    id: "s0",
    name: "Mehmet Usta Atölyesi",
    type: "Atölye",
    duration: "30 dk",
    image: "https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=800&q=80",
  };

  const progress = ((currentStop + 1) / Math.max(route.locations.length, 1)) * 100;

  return (
    <div className="relative flex flex-col size-full overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Full-screen image */}
      <div className="absolute inset-0">
        <img src={stop.image} alt={stop.name} className="size-full object-cover" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.2) 40%, rgba(10,10,10,0.7) 80%, rgba(10,10,10,0.95) 100%)" }} />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-14 shrink-0">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}>
          <ChevronLeft size={20} color="#FFFFFF" />
        </button>
        <div className="flex flex-col items-center">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.6)" }}>DENEYİM MODU</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "#FFFFFF" }}>{route.title}</span>
        </div>
        <button onClick={() => setMuted(!muted)} className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}>
          {muted ? <VolumeX size={18} color="#B0B0B0" /> : <Volume2 size={18} color="#C9A46A" />}
        </button>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 px-6 mt-4 shrink-0">
        <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div
            className="h-full rounded-full"
            style={{ width: `${progress}%`, background: "linear-gradient(to right, #C9A46A, #9D6B53)", transition: "width 0.5s ease" }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "rgba(176,176,176,0.6)" }}>Durak {currentStop + 1}/{Math.max(route.locations.length, 1)}</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "rgba(176,176,176,0.6)" }}>{route.duration}</span>
        </div>
      </div>

      {/* Chapter list */}
      <div className="relative z-10 flex gap-2 px-6 mt-4 overflow-x-auto shrink-0" style={{ scrollbarWidth: "none" }}>
        {(route.locations.length > 0 ? route.locations : [stop]).map((loc, i) => (
          <button
            key={loc.id}
            onClick={() => setCurrentStop(i)}
            className="shrink-0 px-3 py-2 rounded-full flex items-center gap-2"
            style={{
              background: i === currentStop ? "rgba(201,164,106,0.2)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${i === currentStop ? "#C9A46A" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: i < currentStop ? "#8AA57B" : i === currentStop ? "#C9A46A" : "rgba(255,255,255,0.1)" }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#0A0A0A", fontWeight: 700 }}>{i + 1}</span>
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: i === currentStop ? "#C9A46A" : "#B0B0B0", whiteSpace: "nowrap" }}>
              {loc.name}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-8">
        {/* Location info */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full mb-3" style={{ background: "rgba(201,164,106,0.15)", border: "1px solid rgba(201,164,106,0.3)", fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C9A46A", letterSpacing: "0.12em", fontWeight: 500 }}>
            {stop.type.toUpperCase()} · {stop.duration}
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.1 }}>
            {stop.name}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(176,176,176,0.75)", marginTop: 10, lineHeight: 1.65, fontWeight: 300 }}>
            Bu tarihi mekan, lületaşı sanatının binlerce yıllık sırlarını barındırmaktadır. Burada her köşe farklı bir hikaye anlatır. Sesli rehberiniz sizi bu özel yolculukta yönlendirecek.
          </p>
        </div>

        {/* Audio Controls */}
        <div className="p-4 rounded-[24px]" style={{ background: "rgba(10,10,10,0.75)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Waveform visualization */}
          <div className="flex items-center gap-0.5 justify-center mb-4" style={{ height: 32 }}>
            {Array.from({ length: 40 }).map((_, i) => {
              const h = playing ? (Math.sin(i * 0.5 + Date.now() * 0.001) * 10 + 14) : (6 + Math.abs(Math.sin(i * 0.8)) * 10);
              return (
                <div
                  key={i}
                  style={{
                    width: 2.5,
                    height: `${h}px`,
                    borderRadius: 2,
                    background: i < 40 * (progress / 100) ? "#C9A46A" : "rgba(255,255,255,0.15)",
                    transition: "height 0.3s ease",
                  }}
                />
              );
            })}
          </div>

          {/* Playback controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentStop(Math.max(0, currentStop - 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <ChevronLeft size={20} color="#B0B0B0" />
            </button>

            <button
              onClick={() => setPlaying(!playing)}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #C9A46A, #9D6B53)" }}
            >
              {playing ? <Pause size={24} color="#0A0A0A" /> : <Play size={24} color="#0A0A0A" fill="#0A0A0A" />}
            </button>

            <button
              onClick={() => setCurrentStop(Math.min((route.locations.length || 1) - 1, currentStop + 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <ChevronRight size={20} color="#B0B0B0" />
            </button>
          </div>

          {/* Mic toggle */}
          <div className="flex justify-center mt-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
              <Mic size={12} color="#B0B0B0" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B0B0B0" }}>Sesli Rehber</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
