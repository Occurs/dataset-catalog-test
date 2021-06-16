import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AppRouter } from '@features/router/AppRouter';
import { ErrorBoundary } from '@features/errorBoundary/ErrorBoundary';
import CssBaseline from '@material-ui/core/CssBaseline';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ef8326',
    },
  },
});

export const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </ErrorBoundary>
  );
};
