// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Componentnes
import { Container } from './components/Container';

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Container} />
      <Route exact path="/common/colors" component={Container} />
    </Switch>
  </Router>
);

export default AppRouter;
