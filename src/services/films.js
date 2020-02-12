import {AsyncStorage} from 'react-native';
import {filmApi as api} from './api';

export const searchByQuery = (search, page = 1) =>
  api().request({url: `&query=${search}&page=${page}`, method: 'GET'});

export const saveFilme = film =>
  AsyncStorage.setItem('@films', JSON.stringify(film));

export const getFilmsSaved = async () =>
  JSON.parse(await AsyncStorage.getItem('@films'));
