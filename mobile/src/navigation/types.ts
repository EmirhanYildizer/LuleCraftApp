export type Tab = "discover" | "masters" | "map" | "workshop" | "profile";

export type AppPhase = "splash" | "onboarding" | "main";

export interface ScreenRoute {
  id: string;
  params?: Record<string, string>;
}

export type NavigateFn = (screenId: string, params?: Record<string, string>) => void;

export const MAIN_TABS: Tab[] = ["discover", "masters", "map", "workshop", "profile"];
