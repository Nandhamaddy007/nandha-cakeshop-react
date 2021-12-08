import axios from 'axios';
import { put, takeEvery, all } from 'redux-saga/effects';

function* Cartgenerator() {
  yield put({
    type: 'FETCH_CART_START',
  });
  var result = yield axios.post(
    'https://apifromashu.herokuapp.com/api/cakecart',
    {},
    { headers: { authToken: localStorage.token } }
  );
  console.log(result.data.data);
  if (result.data.data) {
    console.log('success');
    yield put({
      type: 'FETCH_CART_SUCCESS',
      payload: result.data.data,
    });
  } else {
    yield put({
      type: 'FETCH_CART_ERROR',
    });
  }
}
function* cartSaga() {
  yield takeEvery('GET_CART', Cartgenerator);
}
export function* rootSaga() {
  yield all([cartSaga()]);
}
