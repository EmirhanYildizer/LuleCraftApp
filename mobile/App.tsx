import { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  CormorantGaramond_300Light,
  CormorantGaramond_400Regular,
  CormorantGaramond_500Medium,
  CormorantGaramond_600SemiBold,
} from "@expo-google-fonts/cormorant-garamond";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import { BottomNav } from "./src/components/BottomNav";
import { MAIN_TABS, type AppPhase, type NavigateFn, type ScreenRoute, type Tab } from "./src/navigation/types";
import { colors } from "./src/theme";

// Temel akış ekranları
import { SplashScreen } from "./src/screens/SplashScreen";
import { OnboardingScreen } from "./src/screens/OnboardingScreen";

// Ana sekmeler
import { DiscoverScreen } from "./src/screens/DiscoverScreen";
import { MastersScreen } from "./src/screens/MastersScreen";
import { MapScreen } from "./src/screens/MapScreen";
import { WorkshopScreen } from "./src/screens/WorkshopScreen";

// Detay ekranlar
import { MasterDetailScreen } from "./src/screens/MasterDetailScreen";
import { VirtualCarvingScreen } from "./src/screens/VirtualCarvingScreen";
import { ARScreen } from "./src/screens/ARScreen";
import { StoryDetailScreen } from "./src/screens/StoryDetailScreen";
import { WorkshopDetailScreen } from "./src/screens/WorkshopDetailScreen";
import { ReservationScreen } from "./src/screens/ReservationScreen";
import { RoutesScreen } from "./src/screens/RoutesScreen";
import { ExperienceScreen } from "./src/screens/ExperienceScreen";
import { SearchScreen } from "./src/screens/SearchScreen";
import { NotificationsScreen } from "./src/screens/NotificationsScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";
import { LocationDetailScreen } from "./src/screens/LocationDetailScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { FavoritesScreen } from "./src/screens/FavoritesScreen";
import { DiscoverDetailScreen } from "./src/screens/DiscoverDetailScreen";
import { StoriesScreen } from "./src/screens/StoriesScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    CormorantGaramond_300Light,
    CormorantGaramond_400Regular,
    CormorantGaramond_500Medium,
    CormorantGaramond_600SemiBold,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const [phase, setPhase] = useState<AppPhase>("splash");
  const [activeTab, setActiveTab] = useState<Tab>("discover");
  const [screenStack, setScreenStack] = useState<ScreenRoute[]>([]);

  const currentScreen = screenStack[screenStack.length - 1];

  const navigate: NavigateFn = useCallback((screenId, params) => {
    if (MAIN_TABS.includes(screenId as Tab)) {
      setActiveTab(screenId as Tab);
      setScreenStack([]);
    } else {
      setScreenStack((prev) => [...prev, { id: screenId, params }]);
    }
  }, []);

  const goBack = useCallback(() => {
    setScreenStack((prev) => prev.slice(0, -1));
  }, []);

  const handleTabNavigate = useCallback((tab: Tab) => {
    setActiveTab(tab);
    setScreenStack([]);
  }, []);

  const renderDetailScreen = () => {
    if (!currentScreen) return null;
    const { id, params } = currentScreen;

    switch (id) {
      case "discover-detail":
        return <DiscoverDetailScreen contentId={params?.id ?? ""} onBack={goBack} />;
      case "stories-list":
        return <StoriesScreen onNavigate={navigate} onBack={goBack} />;
      case "master-detail":
        return <MasterDetailScreen masterId={params?.id ?? ""} onBack={goBack} onNavigate={navigate} />;
      case "story-detail":
        return <StoryDetailScreen storyId={params?.id ?? ""} onBack={goBack} onNavigate={navigate} />;
      case "workshop-detail":
        return <WorkshopDetailScreen workshopId={params?.id ?? ""} onBack={goBack} onNavigate={navigate} />;
      case "reservation":
        return <ReservationScreen workshopId={params?.workshopId ?? ""} onBack={goBack} onNavigate={navigate} />;
      case "virtual-carving":
        return <VirtualCarvingScreen onBack={goBack} />;
      case "ar-experience":
        return <ARScreen onBack={goBack} />;
      case "routes":
        return <RoutesScreen onBack={goBack} onNavigate={navigate} />;
      case "experience":
        return <ExperienceScreen routeId={params?.routeId ?? ""} onBack={goBack} />;
      case "search":
        return <SearchScreen onBack={goBack} onNavigate={navigate} />;
      case "favorites":
        return <FavoritesScreen onBack={goBack} />;
      case "notifications":
        return <NotificationsScreen onBack={goBack} />;
      case "settings":
        return <SettingsScreen onBack={goBack} />;
      case "location-detail":
        return <LocationDetailScreen locationId={params?.id ?? ""} onBack={goBack} />;
      default:
        return null;
    }
  };

  const renderMainTab = () => {
    switch (activeTab) {
      case "discover":
        return <DiscoverScreen onNavigate={navigate} />;
      case "masters":
        return <MastersScreen onNavigate={navigate} />;
      case "map":
        return <MapScreen onNavigate={navigate} />;
      case "workshop":
        return <WorkshopScreen onNavigate={navigate} />;
      case "profile":
        return <ProfileScreen onNavigate={navigate} />;
    }
  };

  if (!fontsLoaded) {
    return <View style={styles.loading} />;
  }

  const showBottomNav = phase === "main" && !currentScreen;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root} edges={["top"]}>
        <StatusBar style="light" />
        {phase === "splash" && <SplashScreen onComplete={() => setPhase("onboarding")} />}
        {phase === "onboarding" && <OnboardingScreen onComplete={() => setPhase("main")} />}
        {phase === "main" && (
          <View style={styles.main}>
            <View style={styles.content}>
              {currentScreen ? renderDetailScreen() : renderMainTab()}
            </View>
            {showBottomNav && <BottomNav active={activeTab} onNavigate={handleTabNavigate} />}
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, backgroundColor: colors.background },
  root: { flex: 1, backgroundColor: colors.background },
  main: { flex: 1 },
  content: { flex: 1 },
});
