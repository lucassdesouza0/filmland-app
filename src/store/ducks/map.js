export const types = {
  GET_INITIAL_LOCATION: 'GET_INITIAL_LOCATION',
  SET_INITIAL_LOCATION: 'SET_INITIAL_LOCATION',

  GET_CINEMAS_LOCATION: 'GET_CINEMAS_LOCATION',
  SET_CINEMAS_LOCATION: 'SET_CINEMAS_LOCATION',

  GET_CINEMA_DETAIL: 'GET_CINEMA_DETAIL',
  SET_CINEMA_DETAIL: 'SET_CINEMA_DETAIL',
  SHOW_CINEMA_DETAIL: 'SHOW_CINEMA_DETAIL',
};

const INITIAL_STATE = {
  location: [],
  loadingCinemas: false,
  cinemas: [],
  showCinemaDetail: false,
  cinemaDetail: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_INITIAL_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case types.GET_CINEMAS_LOCATION:
      return {
        ...state,
        loadingCinemas: true,
      };
    case types.SET_CINEMAS_LOCATION:
      return {
        ...state,
        cinemas: action.payload,
        loadingCinemas: false,
      };
    case types.SET_CINEMA_DETAIL:
      return {
        ...state,
        cinemaDetail: action.payload,
      };
    case types.SHOW_CINEMA_DETAIL:
      return {
        ...state,
        showCinemaDetail: !state.showCinemaDetail,
      };
    default:
      return {...state};
  }
};
