import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = function (props) {
  const filterChangeHandler = function (e) {
    props.onFilterChange(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtered by year</label>
        <select onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
