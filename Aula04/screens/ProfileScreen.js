import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Usuário</Text>
      <Text style={styles.subtitulo}>Bem-vindo à sua tela de perfil!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, color: '#007AFF' },
    subtitulo: { fontSize: 16, color: '#555' }
});