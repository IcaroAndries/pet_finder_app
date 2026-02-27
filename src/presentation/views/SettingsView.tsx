
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'lucide-react-native';
import { Header } from '../layout/Header';
import { Input, Button } from '../components/UI';
import { UserProfile } from '../../domain/types';

interface SettingsViewProps {
  tempUser: UserProfile;
  onUpdateTempUser: (user: UserProfile) => void;
  onSave: () => void;
  onBack: () => void;
  onMenu: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({ 
  tempUser, 
  onUpdateTempUser, 
  onSave, 
  onBack, 
  onMenu 
}) => (
  <View style={styles.container}>
    <Header title="Configurações" showBack onBack={onBack} onMenu={onMenu} />
    <View style={styles.editAvatar}>
      <Image source={{ uri: tempUser.avatar }} style={styles.editAvatarImg} />
      <TouchableOpacity style={styles.cameraIconBtn}>
        <Camera size={14} color="white" />
      </TouchableOpacity>
    </View>
    <View style={styles.form}>
      <Input label="Nome Completo" value={tempUser.name} onChangeText={t => onUpdateTempUser({...tempUser, name: t})} />
      <Input label="E-mail" value={tempUser.email} onChangeText={t => onUpdateTempUser({...tempUser, email: t})} />
      <Input label="Localização" value={tempUser.location} onChangeText={t => onUpdateTempUser({...tempUser, location: t})} />
      <Input label="Bio" multiline value={tempUser.bio} onChangeText={t => onUpdateTempUser({...tempUser, bio: t})} />
      <Button onPress={onSave} style={{ marginTop: 16 }}>Salvar Alterações</Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  editAvatar: { alignSelf: 'center', marginBottom: 24 },
  editAvatarImg: { width: 100, height: 100, borderRadius: 50, borderSize: 4, borderColor: '#f8fafc' },
  cameraIconBtn: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#059669', padding: 8, borderRadius: 20, borderSize: 2, borderColor: '#ffffff' },
  form: { gap: 16 },
});
