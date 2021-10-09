import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { StateProvider } from './StateProvider';
import reducer,{initialState} from './reducer';

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
