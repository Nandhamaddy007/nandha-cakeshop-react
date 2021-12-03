import { createStore } from 'redux';
import { AuthReducer } from './reducers';

var store = createStore(AuthReducer);

store.dispatch({
  type: 'LOGIN',
});
console.log(store.getState());

export default store;
