import React from 'react';
import {View} from 'react-native';

import {useSelector} from 'react-redux';

import {IconButton} from 'react-native-paper';

import {Marker} from 'react-native-maps';

export default function CinemasMarkers() {
  const cinemas = useSelector(state => state.map.cinemas);

  return (
    <View>
      {cinemas.map(item => (
        <Marker
          key={item.id}
          coordinate={{
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
          }}>
          <IconButton icon="filmstrip" color="#000" size={40} />
        </Marker>
      ))}
    </View>
  );
}
