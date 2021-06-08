import React, { FC } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Layout } from '@features/layout/Layout';

const Main = () => <div>test</div>;

export const AppRouter: FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path={'/'} render={Main} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
