import React, { useState } from 'react';

import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import './Expenses.css';

import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const [filteredDate, setFilteredDate] = useState(2022);

  const filterControlHandler = function (year) {
    setFilteredDate(+year);
  };

  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear() === filteredDate
  );

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterChange={filterControlHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} expensesDate={filteredDate} />
    </Card>
  );
}

export default Expenses;
