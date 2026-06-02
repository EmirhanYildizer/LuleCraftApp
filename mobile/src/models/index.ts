export interface MasterModel {
  id: string;
  name: string;
  title: string;
  specialty: string[];
  experience: number;
  location: string;
  bio: string;
  story: string;
  techniques: string[];
  image: string;
  coverImage: string;
  gallery: string[];
  works: MasterWorkModel[];
  workshopDescription: string;
}

export interface MasterWorkModel {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface WorkshopModel {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Başlangıç" | "Orta" | "İleri";
  duration: string;
  image: string;
  includes: string[];
  steps: string[];
}

export interface MapLocationModel {
  id: string;
  name: string;
  category: "Atölye" | "Müze" | "Usta" | "Satış Noktası" | "Tarihi Yer";
  description: string;
  address: string;
  distance: string;
  lat: number;
  lng: number;
  image: string;
}

export interface DiscoverContentModel {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  type: "article" | "video" | "story";
}

export interface StoryModel {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
  excerpt: string;
  content: string;
  pullQuote: string;
}
