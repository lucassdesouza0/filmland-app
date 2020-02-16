import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import FilmsSearch from '../FilmsSearch';
import TheatersSearch from '../TheatersSearch';
import Header from '../../components/Header';

import {BottomNavigation} from 'react-native-paper';

export default function Main() {
  const [routes, setRoutes] = useState({
    index: 0,
    routes: [
      {key: 'filmes', title: 'Filmes', icon: 'video'},
      {key: 'cinemas', title: 'Cinema Mais Próximo', icon: 'map'},
    ],
  });

  const renderScene = BottomNavigation.SceneMap({
    filmes: FilmsSearch,
    cinemas: TheatersSearch,
  });

  const changeRoute = index => {
    setRoutes({
      ...routes,
      index: index,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BottomNavigation
        navigationState={routes}
        onIndexChange={changeRoute}
        renderScene={renderScene}
        activeColor="#0c7b93"
        barStyle={styles.tab}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  tab: {
    backgroundColor: '#142850',
  },
});
