import React from 'react';
import Card from './Card';

import Button from './Button';

import styles from './ErrorModal.module.css';

const ErrorModal = function (props) {
  const modalHideHandler = function () {
    props.onModalCancel();
  };

  return (
    <div className={styles[props.className]}>
      <div
        className={styles['modal-backdrop']}
        onClick={modalHideHandler}
      ></div>
      <Card className={styles['modal']}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button type="button" onClick={modalHideHandler}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
