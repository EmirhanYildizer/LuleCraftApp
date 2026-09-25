# LÜLETAŞI

<img src="src/scene.gif"/>

> A modern mobile cultural heritage experience dedicated to discovering Eskişehir's world-renowned meerschaum culture through stories, artisans, workshops, locations, maps, and immersive experiences.

[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey)](https://reactnative.dev/)

LÜLETAŞI is designed to make cultural heritage more than a collection of text and images. The project aims to create an interactive, visually rich, and discovery-oriented mobile experience around Eskişehir's meerschaum tradition.

The repository contains both the original web-based prototype and the React Native + Expo mobile application.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Core Features](#core-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Mobile Architecture](#mobile-architecture)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Application Screens](#application-screens)
- [Design System](#design-system)
- [Data Architecture](#data-architecture)
- [Web Prototype](#web-prototype)
- [Figma Design](#figma-design)
- [Build & Deployment](#build--deployment)
- [Current Limitations](#current-limitations)
- [Future Improvements](#future-improvements)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)
- [Attributions](#attributions)
- [Project Status](#project-status)
- [Author](#author)
- [License](#license)

---

## About the Project

LÜLETAŞI is a cultural heritage discovery application focused on **meerschaum**, one of Eskişehir's most recognizable cultural and artistic values.

The main goal is to bring traditional craftsmanship and local heritage into a modern digital experience while keeping the cultural context at the center of the product.

The application is designed around several core ideas:

- Presenting the history and cultural importance of meerschaum
- Introducing meerschaum artisans and craftsmen
- Highlighting workshops and cultural locations
- Providing location-based discovery through an interactive map
- Connecting physical places with rich digital content
- Allowing users to save interesting content to their favorites
- Creating a foundation for notifications and personalized discovery
- Exploring augmented reality as part of the cultural heritage experience

The repository combines two complementary layers:

1. **Web prototype:** A Vite + React implementation originating from the Figma Make design/prototyping workflow.
2. **Mobile application:** A React Native + Expo application targeting iOS and Android.

---

## Core Features

### Cultural Heritage Discovery

The application organizes meerschaum-related information into multiple content categories so users can explore the subject from different perspectives.

Potential content includes:

- Historical stories
- Cultural articles
- Artisan profiles
- Workshops
- Discovery locations
- Location-based heritage content

### Discover

The Discover experience acts as the main content exploration area. Users can browse cultural content and navigate to detailed views for individual entries.

### Artisans & Masters

A dedicated experience is provided for introducing the people behind meerschaum craftsmanship.

Users can browse artisan/master profiles, open detailed profiles, explore their work and background, and connect individual craftsmen with the broader cultural story.

### Interactive Map

The map experience allows cultural locations and discovery points to be presented geographically.

The mobile application uses `react-native-maps` for map functionality.

The map architecture is intended to support cultural points of interest, location selection, location detail pages, and physical exploration supported by digital information.

### Location Details

Locations selected from the map or discovery flows can have their own detailed pages. This allows a physical location to become a complete cultural content entry rather than simply a map coordinate.

### Favorites

Users can save content they want to revisit later through the Favorites experience.

### Notifications

The application includes a dedicated notifications experience that can later be connected to new content announcements, events, discovery recommendations, and personalized reminders.

### Augmented Reality

The project includes an `ARScreen` dedicated to extending the cultural heritage experience into augmented reality.

This provides a foundation for future experiences that combine the user's physical environment with digital cultural content.

### Premium Editorial UI

Rather than following a conventional information-app design, LÜLETAŞI aims for a premium, editorial visual language with serif + sans-serif typography, large visual areas, editorial content cards, generous spacing, heritage-inspired visuals, and modern native navigation.

---

## Technology Stack

### Mobile

| Technology                   | Purpose                                     |
| ---------------------------- | ------------------------------------------- |
| React Native                 | Cross-platform mobile application           |
| Expo SDK 54                  | Mobile development and build infrastructure |
| TypeScript                   | Type safety and maintainability             |
| React 19                     | UI layer                                    |
| React Native Reanimated      | Animations and interactions                 |
| React Native Gesture Handler | Gesture-based interactions                  |
| React Native Maps            | Map experience                              |
| React Native SVG             | SVG rendering                               |
| Expo Image                   | Image rendering                             |
| Expo Linear Gradient         | Gradient-based UI elements                  |
| Expo Font                    | Custom font loading                         |
| AsyncStorage                 | Local persistence                           |
| Lucide React Native          | Icon system                                 |

### Web / Prototype

| Technology   | Purpose                                 |
| ------------ | --------------------------------------- |
| React        | Web UI                                  |
| Vite         | Development server and production build |
| TypeScript   | Type safety                             |
| Tailwind CSS | Styling                                 |
| Radix UI     | Accessible UI primitives                |
| Material UI  | UI components                           |
| React Router | Routing                                 |
| Motion       | Animations                              |
| Recharts     | Data visualization                      |
| React DnD    | Drag & drop interactions                |
| date-fns     | Date utilities                          |

---

## Project Structure

```text
LuleCraftApp/
├── mobile/                  # React Native + Expo mobile application
│   ├── src/
│   │   ├── components/      # Reusable native UI components
│   │   ├── data/            # Mock/static content
│   │   ├── models/          # TypeScript data models
│   │   ├── navigation/      # Navigation configuration and types
│   │   ├── screens/         # Application screens
│   │   ├── AppAssets.ts     # Mobile asset definitions
│   │   ├── theme.ts         # Design tokens
│   │   └── typography.ts    # Typography system
│   ├── App.tsx              # Mobile application entry point
│   ├── package.json         # Mobile dependencies and scripts
│   └── ...
│
├── src/                     # Web / Figma Make prototype
├── guidelines/              # Design/development guidelines
├── images.jpg               # Repository visual
├── default_shadcn_theme.css # Web theme variables
├── app.json                 # Expo/project configuration
├── eas.json                 # Expo Application Services configuration
├── package.json             # Web dependencies
├── pnpm-workspace.yaml      # pnpm workspace configuration
├── vite.config.ts           # Vite configuration
├── postcss.config.mjs       # PostCSS configuration
└── README.md
```

---

## Mobile Architecture

The mobile application separates screens, reusable components, data, models, navigation, and design tokens.

### `src/screens/`

Contains user-facing screens including:

- `OnboardingScreen.tsx`
- `HomeScreen.tsx`
- `DiscoverScreen.tsx`
- `DiscoverDetailScreen.tsx`
- `MastersScreen.tsx`
- `MasterDetailScreen.tsx`
- `ArtisanScreen.tsx`
- `MapScreen.tsx`
- `LocationDetailScreen.tsx`
- `FavoritesScreen.tsx`
- `NotificationsScreen.tsx`
- `ProfileScreen.tsx`
- `ExperienceScreen.tsx`
- `ARScreen.tsx`

### `src/components/`

Reusable UI components shared across multiple screens. This helps reduce duplication and maintain a consistent design language.

### `src/data/`

Contains mock and static content used during the prototype and development stages, such as stories, artisans, locations, workshops, and discovery content.

### `src/models/`

Contains TypeScript models representing the application's domain data. This keeps data structures separated from UI implementation and makes future API integration easier.

### `src/navigation/`

Contains navigation configuration and navigation-related types.

### `src/theme.ts`

Centralizes colors, spacing, and other visual design tokens.

### `src/typography.ts`

Centralizes typography definitions. The mobile application uses Cormorant Garamond and Inter as its primary font families.

---

## Getting Started

### Requirements

- Node.js
- npm 10.x or a compatible current version
- Expo tooling
- Android Studio + Android SDK for Android development
- Xcode for native iOS development on macOS
- Expo Go for quick physical-device testing

### Clone the Repository

```bash
git clone https://github.com/EmirhanYildizer/LuleCraftApp.git
cd LuleCraftApp
```

### Install Mobile Dependencies

```bash
cd mobile
npm install
```

---

## Running the Project

### Start Expo

```bash
npm start
```

This starts the Expo development server. You can then open the application using Expo Go or a development build.

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

> Native iOS development requires macOS and Xcode.

### Web

```bash
npm run web
```

---

## Running the Web Prototype

From the repository root:

```bash
npm install
npm run dev
```

For a production web build:

```bash
npm run build
```

The web prototype uses Vite for development and production builds.

---

## Application Screens

| Screen          | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| Onboarding      | Introduces the application and initial user experience.              |
| Home            | Main starting point for featured and important cultural content.     |
| Discover        | Main content exploration experience.                                 |
| Discover Detail | Detailed view of a selected discovery item.                          |
| Masters         | List of meerschaum masters and artisans.                             |
| Master Detail   | Detailed information about an individual master.                     |
| Artisan         | Dedicated craftsmanship-related content experience.                  |
| Map             | Geographic exploration of cultural locations and points of interest. |
| Location Detail | Detailed information about a selected location.                      |
| Favorites       | Access to content saved by the user.                                 |
| Notifications   | Notification center and future notification-driven experiences.      |
| Profile         | User-related information and settings.                               |
| Experience      | Interactive cultural heritage experience area.                       |
| AR              | Entry point for augmented-reality-based experiences.                 |

---

## Design System

LÜLETAŞI combines traditional cultural heritage aesthetics with a modern mobile product language.

### Typography

- **Cormorant Garamond** — editorial headings, cultural storytelling, and expressive titles
- **Inter** — body copy, buttons, labels, and interface text

### Theme

Theme values are centralized in `mobile/src/theme.ts`, while typography values are centralized in `mobile/src/typography.ts`.

This makes it easier to maintain visual consistency and apply design changes globally.

---

## Data Architecture

The current application uses a local/mock-data approach for a significant part of its content model.

This allows the team to:

- Build screens without depending on a backend
- Validate UX flows quickly
- Establish domain models early
- Iterate on content structures independently from API development

A future production architecture can replace the mock data layer with a repository/service layer connected to a backend API while keeping UI and domain models relatively isolated.

---

## Web Prototype

The repository includes a web prototype alongside the mobile application.

```text
Figma / Figma Make
        │
        ▼
Web Prototype
React + Vite + Tailwind
        │
        │ Design reference
        ▼
React Native + Expo
Real iOS / Android application
```

This workflow makes it possible to iterate rapidly on the visual experience while developing the actual cross-platform mobile product in parallel.

---

## Figma Design

**Premium Cultural Heritage UI Design**

[Open the Figma Design](https://www.figma.com/design/YzNi1NdZZeSJtqsF4z5Bw0/Premium-Cultural-Heritage-UI-Design--Copy-)

---

## Build & Deployment

The mobile project is based on Expo SDK 54 and includes an `eas.json` configuration for Expo Application Services.

A typical production workflow:

```text
Development
    │
    ▼
Local Testing
    │
    ▼
Expo Go / Development Build
    │
    ▼
QA & Device Testing
    │
    ▼
EAS Build
    │
    ├── Android → AAB / APK
    │
    └── iOS → IPA
    │
    ▼
Store Submission
```

Before release, review package/bundle identifiers, icons, splash screens, permissions, signing credentials, production environment variables, privacy policy, store metadata, analytics, and error monitoring.

---

## Current Limitations

The repository currently focuses heavily on UI/UX, content structure, prototyping, and the native mobile experience.

Depending on the final production scope, the following areas may require further implementation:

- Production backend/API integration
- Cloud-based content management
- Authentication and user accounts
- Cloud-synchronized favorites
- Production push notifications
- Content management/admin panel
- Backend-driven map data
- Production-grade AR functionality
- Analytics
- Crash and error monitoring
- Offline/cache strategy
- Production environment management
- App Store and Google Play release configuration

---

## Future Improvements

### Content

- Multi-language support
- Expanded historical archive
- Artisan interviews
- Video content
- Audio guides
- Historical timelines
- Interactive meerschaum production stories

### Discovery

- Location-based recommendations
- Walking routes
- Curated cultural routes
- Nearby heritage points
- Discovery progress tracking
- Badges and collections

### Augmented Reality

- Physical artifact recognition
- 3D meerschaum models
- AR information cards
- Historical visualizations
- Camera-based interactive discovery

### Social Features

- Share discoveries
- Share collections
- User comments
- Events
- Community features

### Administration

- Admin dashboard
- Content CRUD
- Artisan management
- Location management
- Map point management
- Push notification management
- Scheduled content publishing
- Analytics dashboard

---

## Development Guidelines

1. **Use TypeScript.** Keep new code strongly typed whenever possible.
2. **Create reusable components.** Extract repeated UI patterns into shared components.
3. **Keep design tokens centralized.** Avoid hardcoding global colors, spacing, and typography inside individual screens.
4. **Keep screens focused.** Split large screens into smaller components when appropriate.
5. **Separate domain models from mock content.** Keep models and sample data in their respective layers.
6. **Respect native behavior.** Account for safe areas, gestures, scrolling, and platform differences.
7. **Maintain design consistency.** New screens should follow the existing typography, spacing, component, and visual language.

---

## Contributing

```bash
git clone https://github.com/EmirhanYildizer/LuleCraftApp.git
cd LuleCraftApp
cd mobile
npm install
npm start
```

Create a feature branch:

```bash
git checkout -b feature/new-feature
```

After making changes:

```bash
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

Pull Requests should include a clear description, affected screens/features, platforms tested, and screenshots or a short video for UI changes where appropriate.

---

## Attributions

Please review [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md) for third-party resources, licenses, and attribution requirements used by the project.

---

## Project Status

**Status:** Active Development / Prototype → Mobile Product

LÜLETAŞI is an active cultural heritage project combining visual prototyping, native mobile development, interactive discovery, location-based experiences, and future immersive technologies.

---

## Author

**Emirhan Yıldızer**

- GitHub: [@EmirhanYildizer](https://github.com/EmirhanYildizer)
- Repository: [LuleCraftApp](https://github.com/EmirhanYildizer/LuleCraftApp)

---

## License

Unless a specific license is provided in the repository, the source code and project assets remain the property of the repository owner. Third-party resources remain subject to their respective licenses and attribution requirements.

---

<p align="center">
  <strong>LÜLETAŞI</strong><br />
  <sub>Discover Eskişehir's cultural heritage through a modern digital experience.</sub>
</p>
