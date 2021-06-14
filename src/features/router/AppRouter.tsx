import React, { FC } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Layout } from '@features/layout/Layout';
import { Main } from '@pages/main/Main';
import { Details } from '@pages/details/Details';

import { routes } from './routes';

export const AppRouter: FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={routes.main} render={() => <Main />} />
        <Route exact path={routes.details} render={() => <Details />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
