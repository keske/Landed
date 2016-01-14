import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import { app } from './app';
import { toggle } from './toggle';

const rootReducer = combineReducers({
  routing: routeReducer,
  /* your reducers */
  app,
  toggle,
});

export default rootReducer;
