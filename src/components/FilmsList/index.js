import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import FilmItem from '../FilmItem';
import FilmDetail from '../FilmDetail';
import Loading from '../../shared/loading';

export default function FilmsList() {
  const dispatch = useDispatch();
  let list = useSelector(state => state.films.films);
  let filmsSaved = useSelector(state => state.films.filmsSaved);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);

  function _renderItem({item}) {
    return <FilmItem item={item} />;
  }

  function renderFooter() {
    if (!loading) return null;
    return <Loading style={{marginBottom: 10}} />;
  }

  function loadRepositories() {
    setLoading(true);
    dispatch({type: 'ASYNC_GET_FILMS_BY_QUERY', search: {page}});

    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    if (list.length) {
      list = filmsSaved;
    }
  }, [list]);

  return (
    <View>
      <FlatList
        style={{marginTop: 30}}
        // contentContainerStyle={styles.list}
        data={list}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
        onEndReached={loadRepositories}
        onEndReachedThreshold={0.4}
      />
      <FilmDetail />
    </View>
  );
}
