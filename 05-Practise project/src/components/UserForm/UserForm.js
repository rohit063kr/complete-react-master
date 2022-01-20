import React, { useState } from 'react';

// import UserButton from './UserButton';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
// import UserModal from '../UserModal/UserModal';

import styles from './UserForm.module.css';

let isValid = true;

const UserForm = function (props) {
  const [error, setError] = useState();

  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const modalHideHandler = function () {
    setError(undefined);
  };

  const modalShowHandler = function (title, message) {
    setError({ title, message });
  };

  const userNameChangeHandler = function (e) {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = function (e) {
    setEnteredAge(e.target.value);
  };

  const formData = { name: enteredName, age: enteredAge };

  const formSubmitHandler = function (e) {
    e.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      modalShowHandler(
        'Invalid input!',
        'Please enter your name and age in the provided fields'
      );
      return;
    }

    if (+enteredAge < 1) {
      modalShowHandler('invalid age!', 'Please fill your valid age (>0)');
      return;
    }

    setError(undefined);

    props.onFormSubmit(formData);
    setEnteredName('');
    setEnteredAge('');
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onModalCancel={modalHideHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card>
        <form className={styles['user__form']} onSubmit={formSubmitHandler}>
          <div className={styles['user__inputs-container']}>
            <label className={styles['user__label']} htmlFor="name">
              Username
            </label>
            <input
              className={styles['user__inputs']}
              id="name"
              type="text"
              onChange={userNameChangeHandler}
              value={enteredName}
            />

            <label className={styles['user__label']} htmlFor="age">
              Age
            </label>
            <input
              className={styles['user__inputs']}
              id="age"
              type="number"
              onChange={ageChangeHandler}
              value={enteredAge}
            />
          </div>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
