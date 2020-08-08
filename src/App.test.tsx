/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from 'easy-peasy';

import store from '../src/store/store';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<StoreProvider store={store}><App /></StoreProvider>);
  const linkElement = getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
