import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Routing from './components/Routing';
import { Provider } from 'react-redux';
import './reduxstore/store';

ReactDOM.render(
  // <Provider store={Appstore}>
  <Routing />,
  //</Provider>
  document.getElementById('root')
);
