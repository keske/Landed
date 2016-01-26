import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { About } from 'containers/About';
import { Services } from 'containers/Services';
import { Join } from 'containers/Join';
import { QuizContainer } from 'containers/Quiz';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="about" component={ About } />
    <Route path="services" component={ Services } />
    <Route path="join" component={ Join } />
    <Route path="quiz" component={ QuizContainer } />
    <Route status={ 404 } path="*" component={ Home } />
  </Route>
);
