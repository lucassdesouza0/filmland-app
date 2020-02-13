import React, {useEffect} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import FilmsList from '../../components/FilmsList';
import {ListLoading} from '../../shared/loading';
import {IconButton} from 'react-native-paper';

export default function FilmsSearch() {
  const show = useSelector(state => state.films.loading);
  const dispatch = useDispatch();
  let filmsSaved = useSelector(state => state.films.filmsSaved);

  useEffect(() => {
    dispatch({type: 'ASYNC_GET_LOCAL_FILMS'});
  }, []);

  function input(input) {
    dispatch({type: 'ASYNC_SEARCH_INPUT', search: {input}});
  }

  function search() {
    dispatch({type: 'ASYNC_GET_FILMS_BY_QUERY', search: {page: 1}});
  }
  return (
    <View style={styles.view}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => input(text)}
          placeholder="Busque seu filme"
          mode="Outlined"
          dense={true}
          style={styles.input}></TextInput>
        <IconButton icon="magnify" onPress={search} style={styles.button} />
      </View>
      {show ? (
        <View style={styles.loading}>
          <ListLoading />
        </View>
      ) : (
        <FilmsList />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    flexGrow: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    flex: 1,
  },
  loading: {
    paddingHorizontal: 10,
  },
});
