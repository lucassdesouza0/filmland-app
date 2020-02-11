import {filmApi as api} from './api';

export const searchByQuery = (search, page = 1) =>
  api().request({url: `&query=${search}&page=${page}`, method: 'GET'});
