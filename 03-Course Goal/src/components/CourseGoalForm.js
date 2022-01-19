import React, { useState } from 'react';

import styles from './CourseGoalForm.module.css';

const CourseGoalForm = function (props) {
  const [inputValue, setInputValue] = useState('');

  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = function (e) {
    if (e.target.value.trim().length) setIsValid(true);
    setInputValue(e.target.value);
  };

  const formSubmitionHandler = function (e) {
    e.preventDefault();

    if (inputValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onDataSave(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles['course-goal__form-container']}>
      <form
        className={`${styles['course-goal__form']} ${
          isValid ? '' : styles['invalid']
        }`}
        onSubmit={formSubmitionHandler}
      >
        <label className={styles['course-goal__label']}>Goal</label>
        <input
          type="text"
          placeholder="Course goal"
          onChange={inputChangeHandler}
          value={inputValue}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CourseGoalForm;
