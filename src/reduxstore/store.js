import { createStore, combineReducers } from 'redux';
import { AuthReducer, CartReducer } from './reducers';

// store.dispatch({
//   type: 'LOGIN',
// });
// store.dispatch({
//   type: 'ADDTOCART',
//   payload: {
//     name: 'Chocolatecake',
//     price: '500rs',
//     weight: '1kg',
//   },
// });

export default function storefunc() {
  var reducers = combineReducers({ AuthReducer, CartReducer });
  var store = createStore(reducers);
  return store;
}
