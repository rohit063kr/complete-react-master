import React, { useState } from 'react';

import './ExpensesForm.css';

const ExpensesForm = function (props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [inputState, setInputState] = useState({
  //   enteredTitle: '',
  //   enteredAmount: ' ',
  //   enteredDate: '',
  // });

  const titleChangeHandler = function (e) {
    setEnteredTitle(e.target.value);

    // setInputState({
    //   ...inputState,
    //   enteredTitle: e.target.value,
    // });

    // setInputState(prevState => {
    //   // This approach of working with multiple state is good enough because we know that the states are updates are scheduled so we will get latest state in this case so that we don't hit any error while working with states

    //   return { ...prevState, enteredTitle: e.target.value };
    // });
    // console.log(enteredTitle);
  };

  const amountChangeHandler = function (e) {
    setEnteredAmount(e.target.value);
    // setInputState({
    //   ...inputState,
    //   enteredAmount: e.target.value,
    // });
    // console.log(enteredAmount);
  };

  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);
    // setInputState({
    //   ...inputState,
    //   enteredDate: e.target.value,
    // });
    // console.log(enteredDate);
  };

  const formSubmitionHandler = function (e) {
    // Preventing refresh
    e.preventDefault();

    // Collecting data
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Creating expense item -passing data
    props.onExpenseDataSave(expenseData);

    // Clearing inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form className="new-expense__controls" onSubmit={formSubmitionHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>

      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>

      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="1-1-2021"
          max="1-1-2023"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpensesForm;
