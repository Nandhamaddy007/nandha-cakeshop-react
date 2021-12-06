export function AuthReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN': {
      state = {
        ...state,
      };
      state['isLoggedin'] = action.payload;
      return state;
    }
    default: {
      return state;
    }
  }
}
export function CartReducer(state = { cartitems: [] }, action) {
  switch (action.type) {
    case 'ADDTOCART': {
      state = {
        ...state,
        cartitems: state.cartitems.push(action.payload),
      };
      return state;
    }
    default:
      return state;
  }
}
