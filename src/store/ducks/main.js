export const types = {
  ASYNC_GET: 'ASYNC_GET',
  GET: 'GET',
};

const INITIAL_STATE = {
  state: 'Texto qualquer',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET:
      return {
        ...state,
        state: action.payload,
      };
    default:
      return {...state};
  }
};

export const get = () => ({
  type: types.ASYNC_GET,
});
