import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/base/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
