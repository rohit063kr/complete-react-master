import React, { useState, useRef } from 'react';

// import UserButton from './UserButton';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
// import UserModal from '../UserModal/UserModal';

import styles from './UserForm.module.css';

const UserForm = function (props) {
  const [error, setError] = useState();

  const userNameInputRef = useRef();
  const ageInputRef = useRef();

  const modalHideHandler = function () {
    setError(undefined);
  };

  const modalShowHandler = function (title, message) {
    setError({ title, message });
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();

    const enteredName = userNameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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

    props.onFormSubmit({ name: enteredName, age: enteredAge });
    userNameInputRef.current.value = ageInputRef.current.value = '';
  };

  return (
    <React.Fragment>
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
              ref={userNameInputRef}
            />

            <label className={styles['user__label']} htmlFor="age">
              Age
            </label>
            <input
              className={styles['user__inputs']}
              id="age"
              type="number"
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default UserForm;
