import React from 'react';

import CompleteButton from '../components/Buttons/CompleteButton';
import DeleteButton from '../components/Buttons/DeleteButton';

const INITIAL_STATE = [
  'Title',
  'Date',
  {
    name: 'Action',
    options: {
      filter: true,
      customBodyRender: (value: number, tableMeta: { rowIndex: number }) => (
        <>
          <CompleteButton tableMeta={tableMeta} />
          <DeleteButton tableMeta={tableMeta} />
        </>
      ),
    },
  },
];

export default INITIAL_STATE;
