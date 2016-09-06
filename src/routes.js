import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/Root';

import Home from './components/Pages/Home';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />

    <Route path="/Home" component={Home} />

  </Route>
);
