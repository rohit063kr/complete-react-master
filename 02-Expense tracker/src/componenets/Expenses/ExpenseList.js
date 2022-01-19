import React from 'react';

import ExpenseItems from './ExpenseItems';
import './ExpenseList.css';

const ExpenseList = function (prop) {
  if (prop.items.length === 0)
    return (
      <h2 className="expenses-list__fallback">
        No expenses registered in {prop.expensesDate}
      </h2>
    );

  return (
    <ul className="expenses-list">
      {prop.items.map(expense => {
        return (
          <li>
            <ExpenseItems
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
