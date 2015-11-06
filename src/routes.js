import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';

export default (
  <Route path="/" component={ App }>
    <Route path="home" component={ Home }/>
  </Route>
);
