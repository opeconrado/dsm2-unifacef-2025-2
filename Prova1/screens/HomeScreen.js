import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedro Conrado Fernandes Vieira</Text>
      <Button title="Internet" onPress={() => navigation.navigate('Internet')} />
      <Button title="Local" onPress={() => navigation.navigate('Local')} />
      <Button title="Ícones" onPress={() => navigation.navigate('Icones')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000ff',
    marginBottom: 32,
    textAlign: 'center',
  },
});