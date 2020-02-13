import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import MapView from 'react-native-maps';
import Markers from '../Marker';
import {FAB} from 'react-native-paper';
import {Loading} from '../../shared/loading';

const {height, width} = Dimensions.get('screen');

export default function MapScreen() {
  const dispatch = useDispatch();
  let initialLocation = useSelector(state => state.map.location);
  let loadingCinemas = useSelector(state => state.map.loadingCinemas);

  useEffect(() => {
    dispatch({type: 'GET_INITIAL_LOCATION'});
  }, []);

  function regionChange({latitude, longitude}) {
    dispatch({
      type: 'GET_CINEMAS_LOCATION',
      region: {latitude, longitude},
      payload: false,
    });
  }

  return (
    <View>
      {loadingCinemas ? <Loading /> : <></>}
      <MapView
        initialRegion={initialLocation}
        loadingEnabled={true}
        style={styles.mapStyle}
        onRegionChange={regionChange}>
        <Markers />
      </MapView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: width,
    height: height,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
