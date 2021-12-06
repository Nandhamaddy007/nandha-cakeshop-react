import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Routing from './components/Routing';
import { Provider } from 'react-redux';
import { store } from './reduxstore/store';
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);
