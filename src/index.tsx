import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { StoreProvider } from 'easy-peasy';

import App from './App';
import theme from './themes/theme';
import store from '../src/store/store';

ReactDOM.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root'),
);
