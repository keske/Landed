import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/Root';

import Home from './components/Pages/Home';
import HowItWorks from './components/Pages/HowItWorks';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />

    <Route path="/" component={Home} />
    <Route path="/how-it-works" component={HowItWorks} />

    <Route status={404} path="*" component={Home} />
  </Route>
);
