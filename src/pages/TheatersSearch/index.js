import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import MapScreen from './map';

const {height, width} = Dimensions.get('screen');

export default function TheatersSearch() {
  return (
    <View style={styles.container}>
      <MapScreen />
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
