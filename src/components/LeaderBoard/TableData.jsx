import React from 'react';
import Table from './Table';

const TableData = () => {

  const data = [
    {
      userName: 'Wahiba Jalal',
      city: 'Salfit',
      tasks: 13,
      points: 450,
      totalPoints: 56782,
    },
    {
        userName: 'Razi Adnan',
        city: 'Nablus',
        tasks: 2,
        points: 40,
        totalPoints: 56,
      },
      {
        userName: 'Sozi123',
        city: 'Jenin',
        tasks: 10,
        points: 500,
        totalPoints: 1500,
      },
      {
        userName: 'Wahiba Jalal',
        city: 'Salfit',
        tasks: 13,
        points: 450,
        totalPoints: 56782,
      },
    
  ];

  return (
    <div>
      
      <Table data={data} />
    </div>
  );
};

export default TableData;
