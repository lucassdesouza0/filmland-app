import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IconButton} from 'react-native-paper';

import {useDispatch} from 'react-redux';

export default function FilmItem({item}) {
  const dispatch = useDispatch();

  function openModal() {
    dispatch({type: 'SHOW_DETAIL_MODAL', data: item});
  }

  function saveItem() {
    dispatch({type: 'SAVE_FILM', data: item});
  }

  return (
    <View style={styles.item}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.icons}>
        <IconButton
          style={styles.icon}
          icon="content-save"
          color={'#000'}
          size={30}
          onPress={saveItem}
        />
        <IconButton
          style={styles.icon}
          icon="information-outline"
          color={'#000'}
          size={30}
          onPress={openModal}
        />
      </View>
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
  img: {
    flex: 1,
    width: 50,
    height: 50,
  },
  title: {
    flex: 1,
    flexGrow: 2,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
  },
});
