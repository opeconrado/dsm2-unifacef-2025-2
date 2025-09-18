import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

export default function InternetImage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
        style={styles.image}
      />
      <Button title="Voltar para o início" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cb91ffff',
  },
  image: {
    width: 250,
    height: 180,
    borderRadius: 16,
    marginBottom: 24,
  },
});