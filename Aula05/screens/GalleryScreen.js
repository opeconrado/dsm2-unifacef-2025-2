import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="camera" size={40} color="#2e86de" />
      </View>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f4f8',
    paddingTop: 32,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    width: 300,
    height: 180,
    borderRadius: 16,
    marginBottom: 18,
  },
});
