import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Routing from './components/Routing';
import { loggingMiddleware } from './reduxstore/middleware';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootSaga } from './reduxstore/sagas';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { AuthReducer, CartReducer, InitCakes } from './reduxstore/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

var reducers = combineReducers({ AuthReducer, CartReducer, InitCakes });
var store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);
