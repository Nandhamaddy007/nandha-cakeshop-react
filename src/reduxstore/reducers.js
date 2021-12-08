export function AuthReducer(
  state = {
    isLoggedin: localStorage.getItem('token') ? true : false,
  },
  action
) {
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
    case 'FETCH_CART_START': {
      state = {
        ...state,
      };
      state['isLoading'] = true;
      return state;
    }
    case 'FETCH_CART_SUCCESS': {
      state = {
        ...state,
      };
      console.log(action.payload);
      state['cartitems'] = action.payload;
      state['isLoading'] = false;
      return state;
    }
    case 'FETCH_CART_ERROR': {
      state = {
        ...state,
      };
      state['carterror'] = true;
      state['isLoading'] = false;
      return state;
    }
    // case 'ADDTOCART': {
    //   state = {
    //     cartitems: action.payload,
    //   };
    //   return state;
    // }
    default:
      return state;
  }
}
export function InitCakes(state = { cakes: [] }, action) {
  switch (action.type) {
    case 'INIT_CAKES': {
      state = {
        ...state,
        cakes: action.payload,
      };
      return state;
    }
    default:
      return state;
  }
}
