
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Heart, MapPin } from 'lucide-react-native';
import { Header } from '../layout/Header';
import { Card, Input } from '../components/UI';
import { Pet } from '../../domain/types';

interface DiscoverViewProps {
  pets: Pet[];
  searchQuery: string;
  onSearch: (query: string) => void;
  onMenu: () => void;
}

export const DiscoverView: React.FC<DiscoverViewProps> = ({ pets, searchQuery, onSearch, onMenu }) => (
  <View style={styles.container}>
    <Header title="Encontre seu" subtitle="novo amigo" onMenu={onMenu} />
    <Input 
      placeholder="Busque por raça ou nome..."
      value={searchQuery}
      onChangeText={onSearch}
      style={{ marginTop: 16 }}
    />
    <View style={styles.listContainer}>
      {pets.map(pet => (
        <Card key={pet.id} style={styles.petCard}>
          <View style={styles.petImageContainer}>
            <Image source={{ uri: pet.imageUrl }} style={styles.petImage} />
            <View style={styles.petBadgeContainer}>
              <View style={styles.petBadge}>
                <Text style={styles.petBadgeBreed}>{pet.breed.toUpperCase()}</Text>
                <Text style={styles.petBadgeName}>{pet.name}, {pet.age}</Text>
              </View>
              <TouchableOpacity style={styles.heartButton}>
                <Heart size={20} color="white" fill="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.petInfo}>
            <Text style={styles.petDescription}>{pet.description}</Text>
            <View style={styles.petLocation}>
              <MapPin size={14} color="#059669" />
              <Text style={styles.petShelter}>{pet.shelter}</Text>
            </View>
          </View>
        </Card>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: { gap: 20, marginTop: 24 },
  petCard: { padding: 0, overflow: 'hidden', borderRadius: 40 },
  petImageContainer: { height: 300, width: '100%', backgroundColor: '#f1f5f9' },
  petImage: { width: '100%', height: '100%' },
  petBadgeContainer: { position: 'absolute', bottom: 16, left: 16, right: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  petBadge: { backgroundColor: 'rgba(255,255,255,0.95)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16 },
  petBadgeBreed: { fontSize: 10, fontWeight: '800', color: '#94a3b8', letterSpacing: 1 },
  petBadgeName: { fontSize: 18, fontWeight: '700', color: '#0f172a' },
  heartButton: { backgroundColor: '#059669', padding: 12, borderRadius: 30 },
  petInfo: { padding: 20 },
  petDescription: { fontSize: 14, color: '#64748b', lineHeight: 20 },
  petLocation: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 12 },
  petShelter: { fontSize: 12, fontWeight: '700', color: '#94a3b8' },
});
