import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>FilmLand</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#142850',
  },
  title: {
    color: '#ededed',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
