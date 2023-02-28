import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { ReactDOM } from 'react';

import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <App />
  </Router>
)