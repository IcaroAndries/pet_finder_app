import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Domain
import { Pet, Shelter } from "./src/domain/types";

// Hooks
import { usePetFinder } from "./src/presentation/hooks/usePetFinder";

// Layout
import { Footer } from "./src/presentation/layout/Footer";
import { Sidebar } from "./src/presentation/layout/Sidebar";

// Views
import { AddPostView } from "./src/presentation/views/AddPostView";
import { DiscoverView } from "./src/presentation/views/DiscoverView";
import { MyPostsView } from "./src/presentation/views/MyPostsView";
import { ProfileView } from "./src/presentation/views/ProfileView";
import { SettingsView } from "./src/presentation/views/SettingsView";
import { SheltersView } from "./src/presentation/views/SheltersView";

const MOCK_PETS: Pet[] = [
  {
    id: "1",
    name: "Bento",
    breed: "Golden Retriever",
    age: "2 anos",
    imageUrl:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400",
    description: "Dócil e brincalhão, ama crianças.",
    shelter: "Abrigo Feliz",
  },
  {
    id: "2",
    name: "Mel",
    breed: "SRD (Vira-lata)",
    age: "1 ano",
    imageUrl:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
    description: "Resgatada e cheia de amor para dar.",
    shelter: "Patinhas de Anjo",
  },
];

const MOCK_SHELTERS: Shelter[] = [
  {
    id: "s1",
    name: "Abrigo Feliz",
    address: "Rua das Flores, 123",
    distance: "2.5 km",
  },
  {
    id: "s2",
    name: "Patinhas de Anjo",
    address: "Av. Principal, 456",
    distance: "4.1 km",
  },
];

const MainApp: React.FC = () => {
  const insets = useSafeAreaInsets();
  const {
    activeTab,
    searchQuery,
    setSearchQuery,
    isSidebarOpen,
    toggleSidebar,
    user,
    tempUser,
    setTempUser,
    saveProfile,
    navigateTo,
    isLoading,
  } = usePetFinder();

  if (isLoading) return null;

  const renderActiveView = () => {
    switch (activeTab) {
      case "discover":
        return (
          <DiscoverView
            pets={MOCK_PETS.filter(
              (p) =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.breed.toLowerCase().includes(searchQuery.toLowerCase()),
            )}
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            onMenu={toggleSidebar}
          />
        );
      case "add":
        return <AddPostView onMenu={toggleSidebar} />;
      case "shelters":
        return <SheltersView shelters={MOCK_SHELTERS} onMenu={toggleSidebar} />;
      case "profile":
        return (
          <ProfileView
            user={user}
            onMenu={toggleSidebar}
            onNavigateToMyPosts={() => navigateTo("my-posts")}
            onNavigateToSettings={() => navigateTo("settings")}
          />
        );
      case "settings":
        return (
          <SettingsView
            tempUser={tempUser}
            onUpdateTempUser={setTempUser}
            onSave={saveProfile}
            onBack={() => navigateTo("profile")}
            onMenu={toggleSidebar}
          />
        );
      case "my-posts":
        return (
          <MyPostsView
            onBack={() => navigateTo("profile")}
            onMenu={toggleSidebar}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        onNavigate={navigateTo}
      />

      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: 100 + insets.bottom },
          ]}
        >
          {renderActiveView()}
        </ScrollView>
      </SafeAreaView>

      <Footer
        activeTab={activeTab}
        onNavigate={navigateTo}
        insetsBottom={insets.bottom}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  scrollContent: { paddingHorizontal: 24, paddingTop: 20 },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}
