
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MapPin, Mail, Settings as SettingsIcon } from 'lucide-react-native';
import { Header } from '../layout/Header';
import { Card } from '../components/UI';
import { UserProfile } from '../../domain/types';

interface ProfileViewProps {
  user: UserProfile;
  onMenu: () => void;
  onNavigateToMyPosts: () => void;
  onNavigateToSettings: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ 
  user, 
  onMenu, 
  onNavigateToMyPosts, 
  onNavigateToSettings 
}) => (
  <View style={styles.container}>
    <Header title="Meu" subtitle="Perfil" onMenu={onMenu} />
    <View style={styles.profileHeader}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.profileName}>{user.name}</Text>
      <View style={styles.profileLoc}>
        <MapPin size={14} color="#059669" />
        <Text style={styles.profileLocText}>{user.location}</Text>
      </View>
    </View>
    <View style={styles.statsRow}>
      <Card style={styles.statCard} onPress={onNavigateToMyPosts}>
        <Text style={styles.statValue}>1</Text>
        <Text style={styles.statLabel}>POSTS</Text>
      </Card>
      <Card style={styles.statCard} onPress={onNavigateToSettings}>
        <SettingsIcon size={24} color="#047857" />
        <Text style={styles.statLabel}>AJUSTES</Text>
      </Card>
    </View>
    <Card style={styles.bioCard}>
      <View style={styles.bioHeader}>
        <Mail size={18} color="#059669" />
        <Text style={styles.bioEmail}>{user.email}</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.bioText}>{user.bio}</Text>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  profileHeader: { alignItems: 'center', gap: 12, marginVertical: 24 },
  avatar: { width: 120, height: 120, borderRadius: 60, borderSize: 4, borderColor: '#f0fdf4' },
  profileName: { fontSize: 24, fontWeight: '800', color: '#0f172a' },
  profileLoc: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  profileLocText: { color: '#94a3b8', fontWeight: '600' },
  statsRow: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  statCard: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#f0fdf4', borderColor: '#dcfce7' },
  statValue: { fontSize: 24, fontWeight: '900', color: '#047857' },
  statLabel: { fontSize: 10, fontWeight: '800', color: '#059669', marginTop: 4 },
  bioCard: { backgroundColor: '#f8fafc', padding: 24 },
  bioHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  bioEmail: { fontWeight: '700', color: '#0f172a' },
  divider: { height: 1, backgroundColor: '#e2e8f0', marginVertical: 16, opacity: 0.5 },
  bioText: { color: '#475569', fontSize: 14, lineHeight: 22 },
});
