import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';

import { app } from './app';
import { toggle } from './toggle';

const rootReducer = combineReducers({
  routing: routeReducer,
  form: formReducer,
  /* your reducers */
  app,
  toggle,
});

export default rootReducer;
