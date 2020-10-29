/* eslint-disable no-undef */
import * as React from 'react';

import { render } from '@testing-library/react';
import { StoreProvider } from 'easy-peasy';

import store from './store/index';

import Table from './components/Table/Table.component';

test('renders Test', () => {
  const { getByText } = render(
    <StoreProvider store={store}>
      <Table />
    </StoreProvider>
  );
  const linkElement = getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
