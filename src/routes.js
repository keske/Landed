import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/Root';
import About from './components/Pages/About';
import Calc from './components/Pages/Calc/';
import Home from './components/Pages/Home';
import HowItWorks from './components/Pages/HowItWorks';
import GetLanded from './components/Pages/GetLanded';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />

    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/calculator" component={Calc} />
    <Route path="/how-it-works" component={HowItWorks} />
    <Route path="/get-landed" component={GetLanded} />

    <Route status={404} path="*" component={Home} />
  </Route>
);