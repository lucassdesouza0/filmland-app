import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('screen');

export default function TheatersSearch() {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: width,
    height: height,
  },
});
