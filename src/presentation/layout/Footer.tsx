
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Plus, Dog, MapPin, User } from 'lucide-react-native';
import { TabType } from '../../domain/types';

interface FooterProps {
  activeTab: TabType;
  onNavigate: (tab: TabType) => void;
  insetsBottom: number;
}

export const Footer: React.FC<FooterProps> = ({ activeTab, onNavigate, insetsBottom }) => {
  const isProfileGroup = ['profile', 'settings', 'my-posts'].includes(activeTab);

  return (
    <View style={[styles.footer, { paddingBottom: insetsBottom + 20 }]}>
      <TouchableOpacity onPress={() => onNavigate('add')} style={styles.navItem}>
        <View style={[styles.navIcon, activeTab === 'add' && styles.navIconActive]}>
          <Plus size={24} color={activeTab === 'add' ? '#047857' : '#94a3b8'} strokeWidth={activeTab === 'add' ? 3 : 2} />
        </View>
        <Text style={[styles.navText, activeTab === 'add' && styles.navTextActive]}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigate('discover')} style={styles.navItem}>
        <View style={[styles.navIcon, activeTab === 'discover' && styles.navIconActive]}>
          <Dog size={24} color={activeTab === 'discover' ? '#047857' : '#94a3b8'} />
        </View>
        <Text style={[styles.navText, activeTab === 'discover' && styles.navTextActive]}>Explorar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigate('shelters')} style={styles.navItem}>
        <View style={[styles.navIcon, activeTab === 'shelters' && styles.navIconActive]}>
          <MapPin size={24} color={activeTab === 'shelters' ? '#047857' : '#94a3b8'} />
        </View>
        <Text style={[styles.navText, activeTab === 'shelters' && styles.navTextActive]}>Abrigos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigate('profile')} style={styles.navItem}>
        <View style={[styles.navIcon, isProfileGroup && styles.navIconActive]}>
          <User size={24} color={isProfileGroup ? '#047857' : '#94a3b8'} />
        </View>
        <Text style={[styles.navText, isProfileGroup && styles.navTextActive]}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: 'rgba(255,255,255,0.95)', 
    borderTopWidth: 1, 
    borderTopColor: '#f1f5f9', 
    flexDirection: 'row', 
    paddingHorizontal: 20, 
    paddingTop: 16 
  },
  navItem: { flex: 1, alignItems: 'center', gap: 4 },
  navIcon: { padding: 10, borderRadius: 16 },
  navIconActive: { backgroundColor: '#ecfdf5' },
  navText: { fontSize: 10, fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5 },
  navTextActive: { color: '#047857' },
});
