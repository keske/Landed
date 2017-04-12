import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

if (__CLIENT__ && __DEVELOPMENT__) {
  window.Perf = require('react-addons-perf');
}

let initialState;
try {
  initialState = window.__INITIAL_STATE__;
} catch (err) {
  initialState = {};
}

export const history = browserHistory;

var ReactGA = require('react-ga');
ReactGA.initialize('UA-72154127-1');

function logPageView(){
	ReactGA.set({page: window.location.pathname});
	ReactGA.pageview(window.location.pathname);
}

if (__CLIENT__) {
  ReactDOM.render(
    <Router history={history} onUpdate={logPageView}>
      {routes}
    </Router>,
    document.getElementById('root')
  );
}
