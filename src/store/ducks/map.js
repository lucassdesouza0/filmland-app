export const types = {
  GET_INITIAL_LOCATION: 'GET_INITIAL_LOCATION',
  SET_INITIAL_LOCATION: 'SET_INITIAL_LOCATION',

  GET_CINEMAS_LOCATION: 'GET_CINEMAS_LOCATION',
  SET_CINEMAS_LOCATION: 'SET_CINEMAS_LOCATION',

  SHOW_CINEMAS_DETAIL: 'SHOW_CINEMAS_DETAIL',
};

const INITIAL_STATE = {
  location: [],
  cinemas: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_INITIAL_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case types.SET_CINEMAS_LOCATION:
      return {
        ...state,
        cinemas: action.payload,
      };
    default:
      return {...state};
  }
};
