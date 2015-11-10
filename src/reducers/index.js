import { combineReducers } from 'redux';

import { app } from './app';
import { toggle } from './toggle';

const rootReducer = combineReducers({
  app,
  toggle,
});

export default rootReducer;
