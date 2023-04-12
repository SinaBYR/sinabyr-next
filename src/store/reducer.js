export const initialState = {
  isLoggedIn: false,
  user: null
};

export function reducer(state = initialState, action) {
  if(action.type === 'LOGIN') {
    return {
      ...state,
      isLoggedIn: true,
      user: action.payload
    }
  } else {
    return state
  }
}