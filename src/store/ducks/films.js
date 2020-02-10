export const types = {
  ASYNC_SEARCH_INPUT: 'ASYNC_SEARCH_INPUT',
  ASYNC_GET_FILMS_BY_QUERY: 'ASYNC_GET_FILMS_BY_QUERY',
  GET_FILMS_BY_QUERY_SUCCESS: 'GET_FILMS_BY_QUERY_SUCCESS',
  SHOW_DETAIL_MODAL: 'SHOW_DETAIL_MODAL',
};

const INITIAL_STATE = {
  search: '',
  films: [],
  toggle: false,
  fail: false,
  modal: false,
  modalData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ASYNC_SEARCH_INPUT:
      return {
        ...state,
        search: action.search,
      };
    case types.ASYNC_GET_FILMS_BY_QUERY:
      return {
        ...state,
        toggle: true,
      };
    case types.GET_FILMS_BY_QUERY_SUCCESS:
      return {
        ...state,
        films: action.payload,
        toggle: false,
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
    default:
      return {...state};
  }
};

export const get = () => ({
  type: types.ASYNC_GET,
});
