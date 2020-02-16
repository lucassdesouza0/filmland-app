// __tests__/Intro-test.js
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

import * as mock from './__mocks__/store.mock';
import FilmsSearch from '../../../src/pages/FilmsSearch';

describe('FilmsSearch Page', () => {
  let store;
  let component;
  let firstMock = 1;
  beforeEach(() => {
    switch (firstMock) {
      case 1:
        store = mockStore(mock.storeEmpty);
        firstMock = 2;
        break;
      case 2:
        store = mockStore(mock.storeWithOneFilm);
        firstMock = 3;
        break;
      case 3:
        store = mockStore(mock.storeLoadingList);
        firstMock = 4;
        break;
      case 4:
        store = mockStore(mock.storeSavedFilms);
        break;
      default:
        break;
    }
    component = renderer.create(
      <Provider store={store}>
        <FilmsSearch />
      </Provider>,
    );
  });

  it('it should render flatlist with no local movies', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render flatlist with 2 films from api', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render loading screen', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render flatlist with 2 films from local storage', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
