
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ChevronLeft, Menu as MenuIcon } from 'lucide-react-native';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  onMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, showBack, onBack, onMenu }) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      {showBack && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ChevronLeft size={20} color="#94a3b8" />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
        {subtitle && <Text style={styles.headerSubtitle}>{subtitle}</Text>}
      </View>
    </View>
    <TouchableOpacity onPress={onMenu} style={styles.menuButton}>
      <MenuIcon size={20} color="#0f172a" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  headerTitle: { fontSize: 28, fontWeight: '800', color: '#0f172a', lineHeight: 32 },
  headerSubtitle: { fontSize: 28, fontWeight: '800', color: '#059669', lineHeight: 32 },
  backButton: { padding: 10, backgroundColor: '#f8fafc', borderRadius: 16 },
  menuButton: { padding: 10, backgroundColor: '#ffffff', borderRadius: 16, borderWidth: 1, borderColor: '#f1f5f9' },
});
