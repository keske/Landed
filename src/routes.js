import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { About } from 'containers/About';
import { Services } from 'containers/Services';
import { Join } from 'containers/Join';

export default (
  <Route path="/" component={ App }>
    <Route path="home" component={ Home } />
    <Route path="about" component={ About } />
    <Route path="services" component={ Services } />
    <Route path="join" component={ Join } />
    <Route status={ 404 } path="*" component={ Home } />
  </Route>
);
