import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconsScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={60} color="blue" style={styles.icon} />
      <MaterialCommunityIcons name="horse-variant-fast" size={60} color="green" style={styles.icon} />
      <Ionicons name="camera" size={60} color="red" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    marginHorizontal: 16,
  },
});