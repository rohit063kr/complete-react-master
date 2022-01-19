import React from 'react';

import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';

const NewExpenses = function (props) {
  const expenseDataSaveHandler = function (data) {
    props.onFormSubmition(data);
  };

  return (
    <div className="new-expense">
      <ExpensesForm onExpenseDataSave={expenseDataSaveHandler} />
    </div>
  );
};

export default NewExpenses;
