import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import FilmItem from './item';
import FilmDetail from './detail';

// import { Container } from './styles';

export default function FilmsList() {
  const list = useSelector(state => state.films.films);

  function _renderItem({item}) {
    return <FilmItem item={item} />;
  }

  return (
    <View>
      <FlatList
        style={{marginTop: 30}}
        // contentContainerStyle={styles.list}
        data={list}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
      />
      <FilmDetail />
    </View>
  );
}
