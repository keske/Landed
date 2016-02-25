import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { About } from 'containers/About';
import { Products } from 'containers/Products';
import { Join } from 'containers/Join';
import { QuizContainer } from 'containers/Quiz';
import { AddUserContainer } from 'containers/AddUser';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="/about" component={ About } />
    <Route path="/products" component={ Products } />
    <Route path="/join" component={ Join } />
    <Route path="/quiz" component={ QuizContainer } />
    <Route path="/add-user" component={ AddUserContainer } />
    <Route status={ 404 } path="*" component={ Home } />
  </Route>
);
