import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { ReactDOM } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App'
import friendsReducer from './reducers/friendsReducer';

const root = createRoot(document.getElementById('root'))
const store = createStore(friendsReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)