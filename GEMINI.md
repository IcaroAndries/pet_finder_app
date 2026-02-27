# PetFinder Mobile - Project Documentation (React Native)

## Project Overview
PetFinder Mobile is a modern, mobile-first application designed to facilitate pet adoption. Developed with React Native and Expo, it allows users to browse available pets, find local shelters, and post new pets for adoption. The application features a clean, interactive UI (Clean UI) with an Emerald/Slate color palette and extremely rounded corners.

## Tech Stack
- **Framework:** React Native 0.76 (via Expo 52)
- **Language:** TypeScript
- **Styling:** React Native StyleSheet (Tailwind-inspired design)
- **Icons:** Lucide React Native
- **Persistence:** AsyncStorage

## Getting Started

### Prerequisites
- Node.js installed on your system.
- Expo Go app on your mobile device (optional, for physical testing).

### Installation
1. Clone the repository and navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
- **Start Expo Development Server:**
  ```bash
  npm start
  ```
- **Run on Android:**
  ```bash
  npm run android
  ```
- **Run on iOS:**
  ```bash
  npm run ios
  ```
- **Run on Web (Expo Web):**
  ```bash
  npm run web
  ```

## Project Structure
- `App.tsx`: The main entry point and orchestrator for the application's tabs and navigation.
- `src/domain/types.ts`: Domain models and TypeScript interfaces.
- `src/presentation/components/UI.tsx`: Reusable native UI components (Card, Button, Input).
- `src/presentation/hooks/usePetFinder.ts`: State management and data persistence logic.

## Design Rules
- **Corners:** Extremely rounded (`borderRadius: 32` or `40`).
- **Colors:** Primary Emerald (`#059669`) and Neutral Slate (`#f8fafc`).
- **Typography:** Modern, sans-serif feel.
- **Feedback:** Modal-based sidebar and active opacity for interactive elements.

## Development Status
- [x] Initial React Native/Expo setup.
- [x] Clean Architecture implementation (Domain/Presentation).
- [x] Functional navigation (Discover, Add, Shelters, Profile).
- [x] User Profile persistence with AsyncStorage.
- [ ] Backend integration for real pet data.
- [ ] Image upload implementation for new posts.
