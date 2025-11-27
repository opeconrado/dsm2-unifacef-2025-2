import { SectionList, Text, View, StyleSheet } from 'react-native';

const equipe = [
    {
        title: "(EU)",
        data: [
            "09h30: Reunião 'Daily'",
            "14h00: Reunião com cliente Carros & Carros",
            "16h30: Prazo final Projeto X"
        ]
    },
    {
        title: "Jurema (Chefe)",
        data: [
            "09h30: Reunião 'Daily'",
            "12h00: Almoço com a diretoria",
            "15h00: Saída imagens"
        ]
    },
    {
        title: "Aderbal",
        data: [
            '09h30: Reunião "Daily"',
            "13h30: Visita técnica Uni-FACEF",
            "16h30: Prazo final Projeto X"
        ]
    }
];

export default function TeamScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Pedro Conrado Fernandes Vieira</Text>
            <Text style={styles.subtitle}>Turma A</Text>

            <SectionList
                sections={equipe}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.header}>{section.title}</Text>
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
