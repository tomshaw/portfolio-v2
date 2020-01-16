// ==========================================================================
// Routes
// ==========================================================================
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Page from '../page';
import TrackerFactory from '../tracker';

// containers
import NotFound from '../../containers/notfound';

// data
import data from '../../data/routes';

const Routes = () => (
    <Switch>                
    {
      data.map((route, index) => {
        let path = (typeof route.path === 'object') ? route.path.pathname : route.path;
          return (
            <Route
              key={index}
              path={path}
              exact={true}
              component={TrackerFactory(Page(route.component))}
            />
          )
      })
    }
    <Route path="*" component={TrackerFactory(Page(NotFound), true)} />
  </Switch>
)

export default Routes;
