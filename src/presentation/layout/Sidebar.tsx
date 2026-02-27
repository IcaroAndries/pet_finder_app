
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Modal,
  SafeAreaView
} from 'react-native';
import { 
  X, 
  User, 
  Image as ImageIcon, 
  Settings as SettingsIcon, 
  LogOut 
} from 'lucide-react-native';
import { TabType } from '../../domain/types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate }) => (
  <Modal
    visible={isOpen}
    transparent
    animationType="fade"
    onRequestClose={onClose}
  >
    <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
      <View style={styles.sidebar}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.sidebarHeader}>
            <Text style={styles.sidebarTitle}>Suporte</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X size={20} color="#94a3b8" />
            </TouchableOpacity>
          </View>
          <View style={styles.sidebarContent}>
            <TouchableOpacity onPress={() => onNavigate('profile')} style={styles.sidebarItem}>
              <User size={20} color="#475569" />
              <Text style={styles.sidebarItemText}>Meu Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNavigate('my-posts')} style={styles.sidebarItem}>
              <ImageIcon size={20} color="#475569" />
              <Text style={styles.sidebarItemText}>Minhas Publicações</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNavigate('settings')} style={styles.sidebarItem}>
              <SettingsIcon size={20} color="#475569" />
              <Text style={styles.sidebarItemText}>Configurações</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sidebarFooter}>
            <TouchableOpacity style={[styles.sidebarItem, { marginTop: 'auto' }]}>
              <LogOut size={20} color="#f43f5e" />
              <Text style={[styles.sidebarItemText, { color: '#f43f5e' }]}>Sair</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </TouchableOpacity>
  </Modal>
);

const styles = StyleSheet.create({
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end', flexDirection: 'row' },
  sidebar: { width: 280, height: '100%', backgroundColor: '#ffffff', shadowColor: '#000', shadowOffset: { width: -2, height: 0 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  sidebarHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, marginBottom: 16 },
  sidebarTitle: { fontSize: 20, fontWeight: '800', color: '#0f172a' },
  closeButton: { padding: 8, backgroundColor: '#f8fafc', borderRadius: 12 },
  sidebarContent: { paddingHorizontal: 16, gap: 8 },
  sidebarItem: { flexDirection: 'row', alignItems: 'center', gap: 16, padding: 16, borderRadius: 16 },
  sidebarItemText: { fontSize: 16, fontWeight: '600', color: '#475569' },
  sidebarFooter: { padding: 16, marginTop: 'auto', borderTopWidth: 1, borderTopColor: '#f1f5f9' }
});
