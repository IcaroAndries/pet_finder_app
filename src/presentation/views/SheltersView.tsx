
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Header } from '../layout/Header';
import { Card } from '../components/UI';
import { Shelter } from '../../domain/types';

interface SheltersViewProps {
  shelters: Shelter[];
  onMenu: () => void;
}

export const SheltersView: React.FC<SheltersViewProps> = ({ shelters, onMenu }) => (
  <View style={styles.container}>
    <Header title="Abrigos" subtitle="Locais" onMenu={onMenu} />
    <View style={styles.listContainer}>
      {shelters.map(shelter => (
        <Card key={shelter.id} style={styles.shelterCard}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={styles.shelterName}>{shelter.name}</Text>
              <View style={styles.distBadge}>
                <Text style={styles.distText}>{shelter.distance}</Text>
              </View>
            </View>
            <Text style={styles.shelterAddress}>{shelter.address}</Text>
          </View>
          <ChevronRight size={18} color="#cbd5e1" />
        </Card>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: { gap: 20, marginTop: 24 },
  shelterCard: { flexDirection: 'row', alignItems: 'center', padding: 20 },
  shelterName: { fontSize: 16, fontWeight: '700', color: '#0f172a' },
  distBadge: { backgroundColor: '#ecfdf5', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  distText: { fontSize: 10, fontWeight: '700', color: '#059669' },
  shelterAddress: { fontSize: 12, color: '#94a3b8', fontWeight: '500', marginTop: 4 },
});
