import React from 'react';

import Chart from './../Chart/Chart';

const ExpenseChart = function (props) {
  const data = [
    {
      label: 'jan',
      value: 0,
    },
    {
      label: 'feb',
      value: 0,
    },
    {
      label: 'mar',
      value: 0,
    },
    {
      label: 'apr',
      value: 0,
    },
    {
      label: 'may',
      value: 0,
    },
    {
      label: 'jun',
      value: 0,
    },
    {
      label: 'jul',
      value: 0,
    },

    {
      label: 'aug',
      value: 0,
    },
    {
      label: 'sep',
      value: 0,
    },
    {
      label: 'oct',
      value: 0,
    },
    {
      label: 'nov',
      value: 0,
    },
    {
      label: 'dec',
      value: 0,
    },
  ];

  props.expenses.forEach(expense => {
    const expenseMonth = expense.date.getMonth();
    data[expenseMonth].value += expense.amount;
  });

  return <Chart datapoints={data} />;
};

export default ExpenseChart;
