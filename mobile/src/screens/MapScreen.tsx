import { useRef, useState } from "react";
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import MapView, { Callout, Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { Navigation, X } from "lucide-react-native";
import { mapLocationsData } from "../data/mapLocationsData";
import { colors, radius, spacing } from "../theme";
import type { MapLocationModel } from "../models";
import type { NavigateFn } from "../navigation/types";

type Category = "Tümü" | MapLocationModel["category"];
const CATEGORIES: Category[] = ["Tümü", "Atölye", "Müze", "Usta", "Satış Noktası", "Tarihi Yer"];

const PIN_COLORS: Record<MapLocationModel["category"], string> = {
  Atölye: "#C9A46A",
  Müze: "#8AA57B",
  Usta: "#E8DFC9",
  "Satış Noktası": "#9D6B53",
  "Tarihi Yer": "#B0B0B0",
};

const ESKISEHIR_REGION = {
  latitude: 39.7767,
  longitude: 30.5203,
  latitudeDelta: 0.012,
  longitudeDelta: 0.012,
};

export function MapScreen({ onNavigate }: { onNavigate: NavigateFn }) {
  const [activeCategory, setActiveCategory] = useState<Category>("Tümü");
  const [selected, setSelected] = useState<MapLocationModel | null>(null);
  const cardAnim = useRef(new Animated.Value(0)).current;
  const mapRef = useRef<MapView>(null);

  const filtered =
    activeCategory === "Tümü"
      ? mapLocationsData
      : mapLocationsData.filter((l) => l.category === activeCategory);

  const selectLocation = (loc: MapLocationModel) => {
    setSelected(loc);
    Animated.spring(cardAnim, { toValue: 1, useNativeDriver: true, tension: 80, friction: 10 }).start();
    mapRef.current?.animateToRegion(
      { latitude: loc.lat - 0.002, longitude: loc.lng, latitudeDelta: 0.005, longitudeDelta: 0.005 },
      400,
    );
  };

  const clearSelection = () => {
    Animated.timing(cardAnim, { toValue: 0, duration: 180, useNativeDriver: true }).start(() => {
      setSelected(null);
    });
    mapRef.current?.animateToRegion(ESKISEHIR_REGION, 400);
  };

  return (
    <View style={styles.root}>
      {/* ── Harita tam ekran ── */}
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={ESKISEHIR_REGION}
        showsUserLocation
        showsCompass={false}
        showsScale={false}
        customMapStyle={darkMapStyle}
      >
        {filtered.map((loc) => (
          <Marker
            key={loc.id}
            coordinate={{ latitude: loc.lat, longitude: loc.lng }}
            onPress={() => selectLocation(loc)}
          >
            <View style={[styles.markerWrap, selected?.id === loc.id && styles.markerWrapActive]}>
              <View style={[styles.markerDot, { backgroundColor: PIN_COLORS[loc.category] }]}>
                <View style={styles.markerInner} />
              </View>
              <View style={[styles.markerTail, { backgroundColor: PIN_COLORS[loc.category] }]} />
            </View>
            <Callout tooltip>
              <View style={styles.callout}>
                <Text style={styles.calloutName}>{loc.name}</Text>
                <Text style={[styles.calloutCat, { color: PIN_COLORS[loc.category] }]}>{loc.category}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* ── Başlık — harita üzerinde, üst kısım ── */}
      <View style={styles.headerOverlay} pointerEvents="none">
        <View style={styles.headerBlur}>
          <Text style={styles.headerLabel}>ESKİŞEHİR</Text>
          <Text style={styles.headerTitle}>Kültürel Harita</Text>
        </View>
      </View>

      {/* ── Filtre çipleri — harita üzerinde yatay kaydırma ── */}
      <View style={styles.filterOverlay}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {CATEGORIES.map((cat) => (
            <Pressable
              key={cat}
              style={[styles.chip, activeCategory === cat && styles.chipActive]}
              onPress={() => { setActiveCategory(cat); clearSelection(); }}
            >
              {cat !== "Tümü" && (
                <View style={[styles.chipDot, { backgroundColor: PIN_COLORS[cat as MapLocationModel["category"]] }]} />
              )}
              <Text style={[styles.chipText, activeCategory === cat && styles.chipTextActive]}>{cat}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* ── Alt panel ── */}
      <View style={styles.bottomPanel}>
        {/* Seçili lokasyon detay kartı */}
        {selected && (
          <Animated.View
            style={[
              styles.detailCard,
              { transform: [{ translateY: cardAnim.interpolate({ inputRange: [0, 1], outputRange: [120, 0] }) }],
                opacity: cardAnim },
            ]}
          >
            <Image source={{ uri: selected.image }} style={styles.detailImg} contentFit="cover" />
            <View style={styles.detailBody}>
              <View style={[styles.catBadge, { backgroundColor: PIN_COLORS[selected.category] + "33" }]}>
                <Text style={[styles.catBadgeText, { color: PIN_COLORS[selected.category] }]}>{selected.category}</Text>
              </View>
              <Text style={styles.detailName}>{selected.name}</Text>
              <Text style={styles.detailDesc} numberOfLines={1}>{selected.description}</Text>
              <View style={styles.detailRow}>
                <Text style={styles.distance}>{selected.distance}</Text>
                <Pressable style={styles.detailBtn} onPress={() => onNavigate("location-detail", { id: selected.id })}>
                  <Text style={styles.detailBtnText}>Detay</Text>
                </Pressable>
              </View>
            </View>
            <Pressable style={styles.closeBtn} onPress={clearSelection}>
              <X size={14} color={colors.textSecondary} strokeWidth={2} />
            </Pressable>
          </Animated.View>
        )}

        {/* Lokasyon kartları yatay listesi */}
        <View style={styles.listRow}>
          <View style={styles.listMeta}>
            <Text style={styles.listCount}>{filtered.length} Konum</Text>
            <Pressable onPress={() => onNavigate("routes")} style={styles.routesBtn}>
              <Navigation size={12} color={colors.gold} />
              <Text style={styles.routesBtnText}>Rota</Text>
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardList}>
            {filtered.map((loc) => (
              <Pressable
                key={loc.id}
                style={[styles.locCard, selected?.id === loc.id && styles.locCardActive]}
                onPress={() => selectLocation(loc)}
              >
                <Image source={{ uri: loc.image }} style={styles.locCardImg} contentFit="cover" />
                <View style={[styles.locCatDot, { backgroundColor: PIN_COLORS[loc.category] }]} />
                <Text style={styles.locCardCat}>{loc.category}</Text>
                <Text style={styles.locCardName} numberOfLines={1}>{loc.name}</Text>
                <Text style={styles.locCardDist}>{loc.distance}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },

  /* Harita — tam ekran */
  map: { ...StyleSheet.absoluteFillObject },

  /* Başlık overlay */
  headerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 8,
    paddingHorizontal: spacing.lg,
    paddingBottom: 6,
  },
  headerBlur: {
    backgroundColor: "rgba(10,10,10,0.6)",
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignSelf: "flex-start",
  },
  headerLabel: { fontFamily: "Inter_500Medium", fontSize: 8, letterSpacing: 2, color: colors.gold },
  headerTitle: { fontFamily: "CormorantGaramond_300Light", fontSize: 22, color: colors.textPrimary, lineHeight: 26 },

  /* Filtre çipleri */
  filterOverlay: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
  },
  filterRow: { paddingHorizontal: spacing.lg, gap: 6 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "rgba(10,10,10,0.75)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  chipActive: { backgroundColor: colors.gold, borderColor: colors.gold },
  chipDot: { width: 6, height: 6, borderRadius: 3 },
  chipText: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.textSecondary },
  chipTextActive: { fontFamily: "Inter_600SemiBold", color: colors.background },

  /* Alt panel */
  bottomPanel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  /* Detay kartı */
  detailCard: {
    marginHorizontal: spacing.lg,
    marginBottom: 8,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(201,164,106,0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
  },
  detailImg: { width: 76, height: 76 },
  detailBody: { flex: 1, padding: 10 },
  catBadge: { alignSelf: "flex-start", paddingHorizontal: 7, paddingVertical: 2, borderRadius: 6, marginBottom: 3 },
  catBadgeText: { fontFamily: "Inter_600SemiBold", fontSize: 9, letterSpacing: 0.5 },
  detailName: { fontFamily: "CormorantGaramond_500Medium", fontSize: 15, color: colors.textPrimary },
  detailDesc: { fontFamily: "Inter_300Light", fontSize: 11, color: colors.textSecondary, marginTop: 2 },
  detailRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 6 },
  distance: { fontFamily: "Inter_400Regular", fontSize: 11, color: colors.muted },
  detailBtn: { backgroundColor: colors.gold, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8 },
  detailBtnText: { fontFamily: "Inter_600SemiBold", fontSize: 11, color: colors.background },
  closeBtn: { width: 28, height: 28, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.06)", alignItems: "center", justifyContent: "center", margin: 8 },

  /* Lokasyon listesi */
  listRow: { backgroundColor: "rgba(10,10,10,0.85)", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 10, paddingBottom: 8, borderWidth: 1, borderColor: "rgba(255,255,255,0.06)", borderBottomWidth: 0 },
  listMeta: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: spacing.lg, marginBottom: 8 },
  listCount: { fontFamily: "Inter_500Medium", fontSize: 11, color: colors.textSecondary },
  routesBtn: { flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(201,164,106,0.12)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  routesBtnText: { fontFamily: "Inter_500Medium", fontSize: 11, color: colors.gold },
  cardList: { paddingHorizontal: spacing.lg, gap: 8, paddingBottom: 4 },
  locCard: { width: 120, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: radius.md, overflow: "hidden", borderWidth: 1.5, borderColor: "transparent" },
  locCardActive: { borderColor: colors.gold },
  locCardImg: { width: "100%", height: 64 },
  locCatDot: { position: "absolute", top: 6, right: 6, width: 7, height: 7, borderRadius: 4 },
  locCardCat: { fontFamily: "Inter_500Medium", fontSize: 8, color: colors.gold, letterSpacing: 0.5, marginHorizontal: 8, marginTop: 6 },
  locCardName: { fontFamily: "CormorantGaramond_500Medium", fontSize: 13, color: colors.textPrimary, marginHorizontal: 8, marginTop: 1 },
  locCardDist: { fontFamily: "Inter_400Regular", fontSize: 9, color: colors.muted, marginHorizontal: 8, marginBottom: 7, marginTop: 2 },

  /* Marker */
  markerWrap: { alignItems: "center" },
  markerWrapActive: { transform: [{ scale: 1.3 }] },
  markerDot: { width: 28, height: 28, borderRadius: 14, alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: "rgba(255,255,255,0.5)" },
  markerInner: { width: 8, height: 8, borderRadius: 4, backgroundColor: "rgba(10,10,10,0.5)" },
  markerTail: { width: 2, height: 5, borderRadius: 1, marginTop: 1 },
  callout: { backgroundColor: "#1A1A1A", borderRadius: 8, padding: 8, borderWidth: 1, borderColor: "rgba(201,164,106,0.3)" },
  calloutName: { fontFamily: "Inter_500Medium", fontSize: 11, color: "#E8DFC9" },
  calloutCat: { fontFamily: "Inter_400Regular", fontSize: 9, marginTop: 2 },
});

const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
  { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
  { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] },
];
