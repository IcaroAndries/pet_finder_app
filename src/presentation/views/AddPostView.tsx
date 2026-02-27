import { ArrowRight, Camera, Image as ImageIcon } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Input } from "../components/UI";
import { Header } from "../layout/Header";

interface AddPostViewProps {
  onMenu: () => void;
}

export const AddPostView: React.FC<AddPostViewProps> = ({ onMenu }) => (
  <View style={styles.container}>
    <Header title="Nova" subtitle="Publicação" onMenu={onMenu} />
    <View style={styles.addGrid}>
      <TouchableOpacity style={styles.addMediaBtn}>
        <Camera size={32} color="#94a3b8" />
        <Text style={styles.addMediaText}>CÂMERA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addMediaBtn}>
        <ImageIcon size={32} color="#94a3b8" />
        <Text style={styles.addMediaText}>GALERIA</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.form}>
      <Input label="Nome do Pet" placeholder="Ex: Rex" />
      <Input label="Raça / Espécie" placeholder="Ex: Labrador" />
      <Input label="Descrição" multiline placeholder="Conte um pouco..." />
      <Button
        style={{ marginTop: 16 }}
        icon={<ArrowRight size={20} color="white" />}
      >
        Publicar Anúncio
      </Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  addGrid: { flexDirection: "row", gap: 16, marginBottom: 24, marginTop: 16 },
  addMediaBtn: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#f8fafc",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#e2e8f0",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  addMediaText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#94a3b8",
    letterSpacing: 1.5,
  },
  form: { gap: 16 },
});
