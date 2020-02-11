import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {useSelector} from 'react-redux';

import MapView from 'react-native-maps';
import CinemasMarkers from './marker';

const {height, width} = Dimensions.get('screen');

export default function MapScreen() {
  let initialLocation = useSelector(state => state.map.location);

  return (
    <MapView
      initialRegion={initialLocation}
      loadingEnabled={true}
      style={styles.mapStyle}>
      <CinemasMarkers />
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: width,
    height: height,
  },
});
