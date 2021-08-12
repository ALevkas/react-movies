import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import Favourites from '../../Pages/Favourites/Favourites';
import Error from '../../Pages/Error/Error';

const AppRouter = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/favourites" exact>
      <Favourites />
    </Route>
    <Route path="/error">
      <Error />
    </Route>
    <Redirect to="/error" />
  </Switch>
);

export default AppRouter;
