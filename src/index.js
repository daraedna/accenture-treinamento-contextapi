import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToggleProvider } from './context/ToggleProvider';

ReactDOM.render(
  <React.StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
