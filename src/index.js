import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './style/styles.scss';
import './style/_media.scss';
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

