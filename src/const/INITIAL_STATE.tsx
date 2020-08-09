import React from 'react';

import CompleteButton from '../components/Buttons/CompleteButton';
import DeleteButton from '../components/Buttons/DeleteButton';

import { BodyRender } from './types';

const INITIAL_STATE = [
  'Title',
  'Date',
  {
    name: 'Action',
    options: {
      filter: true,
      customBodyRender: ({ value, tableMeta }:BodyRender) => (
        <>
          <CompleteButton tableMeta={tableMeta} />
          <DeleteButton tableMeta={tableMeta} />
        </>
      ),
    },
  },
];

export default INITIAL_STATE;
