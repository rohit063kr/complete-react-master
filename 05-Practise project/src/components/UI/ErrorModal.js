import React from 'react';
import ReactDom from 'react-dom';

import Card from './Card';

import Button from './Button';

import styles from './ErrorModal.module.css';

const ModalBackdrop = function (props) {
  return (
    <div className={styles['modal-backdrop']} onClick={props.onClick}></div>
  );
};

const ModalWindow = function (props) {
  return (
    <Card className={styles['modal']}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button type="button" onClick={props.onClickBtn}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = function (props) {
  const modalHideHandler = function () {
    props.onModalCancel();
  };

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <ModalBackdrop onClick={modalHideHandler} />,
        document.getElementById('modal-backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalWindow
          title={props.title}
          message={props.message}
          onClickBtn={modalHideHandler}
        />,
        document.getElementById('modal-window-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
