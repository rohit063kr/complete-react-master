import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';

const ExpenseItems = props => {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date}></ExpenseDate>
        <h2>{props.title}</h2>
        <p className="expense-item__price">{props.amount}</p>
      </div>
    </Card>
  );
};

export default ExpenseItems;
