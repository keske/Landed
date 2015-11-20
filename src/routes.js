import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { About } from 'containers/About';
import { Oportuninties } from 'containers/Oportuninties';
import { FAQ } from 'containers/FAQ';
import { Join } from 'containers/Join';

export default (
  <Route path="/" component={ App }>
    <Route path="home" component={ Home } />
    <Route path="about" component={ About } />
    <Route path="oportuninties" component={ Oportuninties } />
    <Route path="faq" component={ FAQ } />
    <Route path="join" component={ Join } />
  </Route>
);
