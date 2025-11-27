import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agenda do dia</Text>
            <Text style={styles.subtitle}>Pedro Conrado Fernandes Vieira</Text>
            <Text style={styles.subtitle}>Turma A</Text>

            <View style={styles.buttons}>
                <Button
                    title="Meus compromissos"
                    onPress={() => navigation.navigate("User")}
                />
                <Button
                    title="Compromissos da equipe"
                    onPress={() => navigation.navigate("Team")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
    title: { fontSize: 28, marginBottom: 40 },
    buttons: { gap: 20 },
});