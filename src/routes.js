import React from 'react';
import { Route } from 'react-router';
import ga from 'react-ga';

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
  </Route>
);

exports.run = function(location, el) {
  ga.initialize('UA-72154127-1');
  Router.run(routes, location, function(Handler, state) {
    ga.pageview(state.pathname);
    React.render(<Handler/>, el);
  });
};
