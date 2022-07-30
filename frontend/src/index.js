import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './store/reducer/reducer.js'
const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode></Provider>,
  document.getElementById('root')
);