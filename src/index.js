import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Routing from './components/Routing';
import './reduxstore/store';

ReactDOM.render(<Routing />, document.getElementById('root'));
