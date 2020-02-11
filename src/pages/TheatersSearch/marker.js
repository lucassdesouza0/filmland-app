import React from 'react';
import {View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {IconButton} from 'react-native-paper';

import {Marker} from 'react-native-maps';

export default function Markers() {
  const dispatch = useDispatch();
  const cinemas = useSelector(state => state.map.cinemas);

  function showDetail(id) {
    dispatch({type: 'GET_CINEMA_DETAIL', payload: id});
  }

  return (
    <View>
      {cinemas.map(item => (
        <Marker
          key={item.id}
          coordinate={{
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
          }}>
          <IconButton
            icon="filmstrip"
            color="#000"
            size={40}
            onPress={showDetail(item.place_id)}
          />
        </Marker>
      ))}
    </View>
  );
}
