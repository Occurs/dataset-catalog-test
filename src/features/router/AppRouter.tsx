import React, { FC } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Layout } from '@features/layout/Layout';
import { Main } from '@pages/main/Main';

export const AppRouter: FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path={'/'} render={() => <Main />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
