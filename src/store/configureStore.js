import { applyMiddleware, compose, createStore } from 'redux';
import { syncHistory } from 'redux-simple-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState, browserHistory) {
  const routerMiddleware = syncHistory(browserHistory);

  const logger = createLogger({ collapsed: true });

  let middleware = applyMiddleware(thunkMiddleware, logger, routerMiddleware);

  const store = middleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
