export const types = {
  ASYNC_SEARCH_INPUT: 'ASYNC_SEARCH_INPUT',
  ASYNC_GET_FILMS_BY_QUERY: 'ASYNC_GET_FILMS_BY_QUERY',

  GET_FILMS_BY_QUERY_SUCCESS: 'GET_FILMS_BY_QUERY_SUCCESS',
  SHOW_DETAIL_MODAL: 'SHOW_DETAIL_MODAL',

  SAVE_FILM: 'SAVE_FILM',
  ASYNC_GET_LOCAL_FILMS: 'ASYNC_GET_LOCAL_FILMS',
  GET_FILMS_SAVED: 'GET_FILMS_SAVED',
};

const INITIAL_STATE = {
  search: '',
  films: [],
  filmsSaved: [],
  loading: false,
  fail: false,
  modal: false,
  modalData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ASYNC_SEARCH_INPUT:
      return {
        ...state,
        search: action.search.input,
        films: [],
      };
    case types.ASYNC_GET_FILMS_BY_QUERY:
      return {
        ...state,
        loading: !state.loading,
      };
    case types.GET_FILMS_BY_QUERY_SUCCESS:
      return {
        ...state,
        films: [...state.films, ...action.payload],
        loading: !state.loading,
      };
    case types.GET_FILMS_BY_QUERY_FAIL:
      return {
        ...state,
        fail: true,
      };
    case types.SHOW_DETAIL_MODAL:
      return {
        ...state,
        modal: !state.modal,
        modalData: action.data ? action.data : '',
      };
    case types.GET_FILMS_SAVED:
      return {
        ...state,
        filmsSaved: action.payload,
      };
    default:
      return {...state};
  }
};

export const get = () => ({
  type: types.ASYNC_GET,
});
