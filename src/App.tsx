import React from 'react';
import { AppRouter } from '@features/router/AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';

export const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppRouter />
    </React.Fragment>
  );
};
