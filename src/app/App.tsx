import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SplashScreen } from "./components/screens/SplashScreen";
import { OnboardingScreen } from "./components/screens/OnboardingScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { StoriesScreen } from "./components/screens/StoriesScreen";
import { StoryDetailScreen } from "./components/screens/StoryDetailScreen";
import { ArtisanScreen } from "./components/screens/ArtisanScreen";
import { WorkshopsScreen } from "./components/screens/WorkshopsScreen";
import { WorkshopDetailScreen } from "./components/screens/WorkshopDetailScreen";
import { ReservationScreen } from "./components/screens/ReservationScreen";
import { MapScreen } from "./components/screens/MapScreen";
import { RoutesScreen } from "./components/screens/RoutesScreen";
import { ExperienceScreen } from "./components/screens/ExperienceScreen";
import { SearchScreen } from "./components/screens/SearchScreen";
import { ProfileScreen } from "./components/screens/ProfileScreen";
import { FavoritesScreen } from "./components/screens/FavoritesScreen";
import { NotificationsScreen } from "./components/screens/NotificationsScreen";
import { SettingsScreen } from "./components/screens/SettingsScreen";
import { BottomNav } from "./components/BottomNav";

type Tab = "home" | "stories" | "map" | "workshops" | "profile";

interface Screen {
  id: string;
  params?: Record<string, string>;
}

const MAIN_TABS: Tab[] = ["home", "stories", "map", "workshops", "profile"];

export default function App() {
  const [phase, setPhase] = useState<"splash" | "onboarding" | "main">("splash");
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [screenStack, setScreenStack] = useState<Screen[]>([]);

  const currentScreen = screenStack[screenStack.length - 1];

  const navigate = useCallback((screenId: string, params?: Record<string, string>) => {
    if (MAIN_TABS.includes(screenId as Tab)) {
      setActiveTab(screenId as Tab);
      setScreenStack([]);
    } else {
      setScreenStack(prev => [...prev, { id: screenId, params }]);
    }
  }, []);

  const goBack = useCallback(() => {
    setScreenStack(prev => prev.slice(0, -1));
  }, []);

  const handleTabNavigate = useCallback((tab: Tab) => {
    setActiveTab(tab);
    setScreenStack([]);
  }, []);

  const renderDetailScreen = () => {
    if (!currentScreen) return null;
    const { id, params } = currentScreen;

    switch (id) {
      case "story-detail":
        return <StoryDetailScreen storyId={params?.id ?? ""} onBack={goBack} onNavigate={navigate} />;
      case "artisan":
        return <ArtisanScreen artisanId={params?.id ?? ""} onBack={goBack} onNavigate={navigate} />;
      case "workshop-detail":
        return <WorkshopDetailScreen workshopId={params?.id ?? ""} onBack={goBack} onNavigate={navigate} />;
      case "reservation":
        return <ReservationScreen workshopId={params?.workshopId ?? ""} onBack={goBack} onNavigate={navigate} />;
      case "routes":
        return <RoutesScreen onBack={goBack} onNavigate={navigate} />;
      case "experience":
        return <ExperienceScreen routeId={params?.routeId ?? ""} onBack={goBack} />;
      case "search":
        return <SearchScreen onBack={goBack} onNavigate={navigate} />;
      case "favorites":
        return <FavoritesScreen onBack={goBack} onNavigate={navigate} />;
      case "notifications":
        return <NotificationsScreen onBack={goBack} />;
      case "settings":
        return <SettingsScreen onBack={goBack} />;
      case "location-detail":
        return <LocationDetailScreen locationId={params?.id ?? ""} onBack={goBack} onNavigate={navigate} />;
      default:
        return null;
    }
  };

  const renderMainTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={navigate} />;
      case "stories":
        return <StoriesScreen onNavigate={navigate} />;
      case "map":
        return <MapScreen onNavigate={navigate} />;
      case "workshops":
        return <WorkshopsScreen onNavigate={navigate} />;
      case "profile":
        return <ProfileScreen onNavigate={navigate} />;
    }
  };

  const showBottomNav = phase === "main" && !currentScreen;

  return (
    <div
      className="size-full flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #050505 0%, #0F0A06 50%, #080808 100%)" }}
    >
      {/* Phone Frame */}
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: 390,
          height: 844,
          borderRadius: 44,
          background: "#0A0A0A",
          boxShadow: `
            0 0 0 1px rgba(201,164,106,0.15),
            0 0 0 10px rgba(0,0,0,0.4),
            0 0 0 11px rgba(201,164,106,0.06),
            0 60px 120px rgba(0,0,0,0.8),
            0 20px 40px rgba(0,0,0,0.6)
          `,
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-50"
          style={{
            width: 120,
            height: 34,
            background: "#0A0A0A",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />

        {/* Screen Content */}
        <div className="relative flex-1 flex flex-col min-h-0">
          <AnimatePresence mode="wait">
            {phase === "splash" && (
              <motion.div
                key="splash"
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SplashScreen onComplete={() => setPhase("onboarding")} />
              </motion.div>
            )}

            {phase === "onboarding" && (
              <motion.div
                key="onboarding"
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <OnboardingScreen onComplete={() => setPhase("main")} />
              </motion.div>
            )}

            {phase === "main" && (
              <motion.div
                key="main"
                className="absolute inset-0 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Main tab content */}
                <div className="flex-1 min-h-0 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {!currentScreen ? (
                      <motion.div
                        key={activeTab}
                        className="absolute inset-0"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                      >
                        {renderMainTab()}
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`detail-${currentScreen.id}-${JSON.stringify(currentScreen.params)}`}
                        className="absolute inset-0"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {renderDetailScreen()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Nav */}
                <AnimatePresence>
                  {showBottomNav && (
                    <motion.div
                      initial={{ y: 80 }}
                      animate={{ y: 0 }}
                      exit={{ y: 80 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BottomNav active={activeTab} onNavigate={handleTabNavigate} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center pb-2 shrink-0" style={{ background: "#0A0A0A" }}>
          <div style={{ width: 134, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.2)" }} />
        </div>
      </div>
    </div>
  );
}

// Inline Location Detail (simple, to avoid extra file)
function LocationDetailScreen({
  locationId,
  onBack,
  onNavigate: _onNavigate,
}: {
  locationId: string;
  onBack: () => void;
  onNavigate: (screen: string, params?: Record<string, string>) => void;
}) {
  const locations: Record<string, { name: string; type: string; address: string; hours?: string; description: string; image: string }> = {
    "1": {
      name: "Mehmet Usta Atölyesi",
      type: "Atölye",
      address: "Odunpazarı Mah. No: 14, Eskişehir",
      hours: "09:00 – 18:00",
      description: "1978'den bu yana faaliyet gösteren bu tarihi atölye, dört neslin el emeğini barındırır. Mehmet Usta'nın dedesinden kalan ekipmanlar hâlâ kullanılmaktadır.",
      image: "https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=800&q=80",
    },
    "2": {
      name: "Lületaşı Müzesi",
      type: "Müze",
      address: "Tarihi Çarşı, Eskişehir",
      hours: "10:00 – 17:00",
      description: "800'den fazla eserin sergilendiği bu müze, lületaşının binlerce yıllık tarihini ve Eskişehir'deki zanaatını belgelemektedir.",
      image: "https://images.unsplash.com/photo-1511306162219-1c5a469ab86c?w=800&q=80",
    },
  };

  const loc = locations[locationId] ?? {
    name: "Odunpazarı Atölyesi",
    type: "Atölye",
    address: "Odunpazarı, Eskişehir",
    hours: "09:00 – 18:00",
    description: "Tarihi Odunpazarı semtinde bulunan bu mekan, geleneksel lületaşı sanatının yaşatıldığı önemli bir kültürel mekandır.",
    image: "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=800&q=80",
  };

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ background: "#0A0A0A", scrollbarWidth: "none" }}>
      <div className="relative shrink-0" style={{ height: 300 }}>
        <img src={loc.image} alt={loc.name} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,1) 100%)" }} />
        <button
          onClick={onBack}
          className="absolute top-14 left-6 w-10 h-10 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(12px)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
          <span className="inline-block px-3 py-1 rounded-full mb-3" style={{ background: "rgba(201,164,106,0.9)", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 600, color: "#0A0A0A", letterSpacing: "0.12em" }}>
            {loc.type.toUpperCase()}
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}>
            {loc.name}
          </h1>
        </div>
      </div>

      <div className="px-6 py-6 shrink-0">
        <div className="flex gap-3 mb-5">
          <div className="flex items-center gap-2 flex-1 p-3 rounded-[14px]" style={{ background: "#1B1B1B" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2C5.79 2 4 3.79 4 6C4 9.5 8 14 8 14C8 14 12 9.5 12 6C12 3.79 10.21 2 8 2Z" stroke="#C9A46A" strokeWidth="1.2" fill="none" />
              <circle cx="8" cy="6" r="1.5" stroke="#C9A46A" strokeWidth="1.2" fill="none" />
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#E8DFC9" }}>{loc.address}</span>
          </div>
          {loc.hours && (
            <div className="flex items-center gap-2 p-3 rounded-[14px]" style={{ background: "#1B1B1B" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="#8AA57B" strokeWidth="1.2" fill="none" />
                <path d="M8 5V8L10 10" stroke="#8AA57B" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#8AA57B" }}>{loc.hours}</span>
            </div>
          )}
        </div>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(176,176,176,0.85)", lineHeight: 1.7, fontWeight: 300 }}>
          {loc.description}
        </p>

        <div className="mt-6">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#B0B0B0", fontWeight: 500, marginBottom: 10 }}>
            YAKIN DENEYİMLER
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {[
              { img: "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?w=300&q=80", label: "Oyma Atölyesi" },
              { img: "https://images.unsplash.com/photo-1660796334938-cf0b03be7e6d?w=300&q=80", label: "Kültürel Tur" },
              { img: "https://images.unsplash.com/photo-1655376407042-b35a5c396cae?w=300&q=80", label: "Sergi Gezisi" },
            ].map(({ img, label }) => (
              <div key={label} className="relative shrink-0 rounded-[16px] overflow-hidden" style={{ width: 140, height: 100 }}>
                <img src={img} alt={label} className="size-full object-cover" />
                <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.6)" }} />
                <p className="absolute bottom-2 left-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: "#FFFFFF" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="mt-6 w-full py-4 rounded-[18px] flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(135deg, #C9A46A, #9D6B53)" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 3L15 9L9 15M3 9H15" stroke="#0A0A0A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#0A0A0A" }}>Yol Tarifi Al</span>
        </button>
      </div>
    </div>
  );
}
