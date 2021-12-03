export function AuthReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN': {
      state = {
        ...state,
      };
      state['isLoggedin'] = true;
      return state;
    }
  }
}
