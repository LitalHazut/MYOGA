import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SpecialApp } from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <SpecialApp />
    </Router>
  </React.StrictMode>
);
reportWebVitals();
