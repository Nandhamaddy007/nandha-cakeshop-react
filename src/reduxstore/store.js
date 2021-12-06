import { createStore, combineReducers } from 'redux';
import { AuthReducer, CartReducer } from './reducers';

var reducers = combineReducers({ AuthReducer, CartReducer });
var store = createStore(reducers);

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
// console.log(store.getState());

export default store;
