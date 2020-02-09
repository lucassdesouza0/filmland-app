import React, {useEffect} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import FilmsList from '../../components/FilmsList';

export default function FilmsSearch() {
  const dispatch = useDispatch();

  function input(input) {
    dispatch({type: 'ASYNC_SEARCH_INPUT', search: input});
  }

  function search() {
    dispatch({type: 'ASYNC_GET_FILMS_BY_QUERY'});
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => input(text)}
          placeholder="Busque seu filme"
          mode="Outlined"
          dense={true}
          style={styles.input}></TextInput>
        <Button title="Buscar" onPress={search} style={styles.button} />
      </View>
      <FilmsList />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
});
