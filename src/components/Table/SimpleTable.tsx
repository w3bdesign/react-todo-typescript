import React from 'react';
import MUIDataTable from 'mui-datatables';

import ActionButtons from './ActionButtons';

const columns = ['Title', 'Date', 'Action'];

const options = {
  // filterType: 'checkbox',
};

const SimpleTable: React.FC = () => {
  const data = [
    [
      'Joe James',
      new Date().toLocaleString('no-NO'),
      <ActionButtons id={1} />],
    [
      'John Walsh',
      new Date().toLocaleString('no-NO'),
      <ActionButtons id={2} />,
    ],
    ['Bob Herm',
      new Date().toLocaleString('no-NO'),
      <ActionButtons id={3} />],
    [
      'James Houston',
      new Date().toLocaleString('no-NO'),
      <ActionButtons id={4} />,
    ],
  ];

  return (
    <MUIDataTable
      title="Employee List"
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default SimpleTable;
