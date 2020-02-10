import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import MapView from 'react-native-maps';

export default function MapScreen() {
  const [location, setLocation] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
    } else {
    }

    let location = await Location.getCurrentPositionAsync({});

    setLocation({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    });
  }

  return (
    <MapView
      region={location.mapRegion}
      loadingEnabled={true}
      style={styles.mapStyle}
    />
  );
}
