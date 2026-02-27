
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { ChevronRight, Edit3, Trash2 } from 'lucide-react-native';
import { Header } from '../layout/Header';
import { Card } from '../components/UI';

interface MyPostsViewProps {
  onBack: () => void;
  onMenu: () => void;
}

export const MyPostsView: React.FC<MyPostsViewProps> = ({ onBack, onMenu }) => (
  <View style={styles.container}>
    <Header title="Minhas" subtitle="Publicações" showBack onBack={onBack} onMenu={onMenu} />
    <Card style={styles.myPostCard}>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400' }} style={styles.myPostImg} />
      <View style={{ flex: 1 }}>
        <Text style={styles.myPostTitle}>Pipoca</Text>
        <Text style={styles.myPostSub}>Beagle</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TouchableOpacity style={styles.actionBtn}><Edit3 size={16} color="#059669" /></TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#fff1f2' }]}><Trash2 size={16} color="#f43f5e" /></TouchableOpacity>
        </View>
      </View>
      <ChevronRight size={20} color="#cbd5e1" />
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  myPostCard: { flexDirection: 'row', gap: 16, padding: 16, backgroundColor: '#f8fafc' },
  myPostImg: { width: 80, height: 80, borderRadius: 16 },
  myPostTitle: { fontSize: 16, fontWeight: '700', color: '#0f172a' },
  myPostSub: { fontSize: 12, color: '#94a3b8', fontWeight: '500', marginBottom: 8 },
  actionBtn: { padding: 8, backgroundColor: '#ecfdf5', borderRadius: 8 },
});
