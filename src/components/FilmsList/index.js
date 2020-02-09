import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import FilmItem from './item';

// import { Container } from './styles';

export default function FilmsList() {
  const list = useSelector(state => state.films.films);

  return (
    <View>
      <FlatList
        style={{marginTop: 30}}
        // contentContainerStyle={styles.list}
        data={list}
        renderItem={FilmItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
