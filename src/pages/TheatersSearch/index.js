import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import {useDispatch} from 'react-redux';

import MapScreen from './map';
import Detail from './detail';

export default function TheatersSearch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'GET_INITIAL_LOCATION'});
  }, []);

  return (
    <View style={styles.container}>
      <MapScreen />
      <Detail />
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
});
