import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TabType, UserProfile } from '../../domain/types';

const STORAGE_KEY = '@petfinder/user';

const INITIAL_USER: UserProfile = {
  name: 'Ana Silva',
  email: 'ana.silva@email.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  location: 'São Paulo, SP',
  bio: 'Amante de animais e voluntária em abrigos locais nos finais de semana.'
};

export const usePetFinder = () => {
  const [activeTab, setActiveTab] = useState<TabType>('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<UserProfile>(INITIAL_USER);
  const [tempUser, setTempUser] = useState<UserProfile>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setUser(parsed);
        setTempUser(parsed);
      }
    } catch (e) {
      console.error('Failed to load user', e);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const saveProfile = async () => {
    try {
      setUser(tempUser);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tempUser));
      setActiveTab('profile');
    } catch (e) {
      console.error('Failed to save user', e);
    }
  };

  const navigateTo = (tab: TabType) => {
    setActiveTab(tab);
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  return {
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
    isLoading
  };
};
