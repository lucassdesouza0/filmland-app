import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IconButton} from 'react-native-paper';

import {useDispatch} from 'react-redux';

export default function FilmItem({item}) {
  const dispatch = useDispatch();

  function openModal() {
    dispatch({type: 'SHOW_DETAIL_MODAL', data: item});
  }

  return (
    <View style={styles.item}>
      <View style={styles.imgContainer}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <IconButton
        icon="information-outline"
        color={'#000'}
        size={20}
        onPress={openModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
  },
  imgContainer: {
    flex: 1,
  },
  title: {
    flex: 1,
    flexGrow: 4,
    fontSize: 18,
  },
});
