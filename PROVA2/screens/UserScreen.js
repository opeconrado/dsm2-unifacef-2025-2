import { View, Text, FlatList, StyleSheet } from 'react-native';

const compromissos = [
  { id: '1', hora: "09h30", desc: 'Reunião "Daily"' },
  { id: '2', hora: "14h00", desc: "Reunião com cliente Carros & Carros" },
  { id: '3', hora: "16h00", desc: "Prazo final Projeto X" },
];

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>(EU)</Text>
      <Text style={styles.subtitle}>Pedro Conrado Fernandes Vieira</Text>
      <Text style={styles.subtitle}>Turma A</Text>

      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.hora}: {item.desc}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 23, fontWeight: 'bold', marginBottom: 20 },
    header: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
    item: { fontSize: 16, marginLeft: 10, marginVertical: 4 }
});