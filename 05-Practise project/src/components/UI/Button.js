import React from 'react';

import styles from './Button.module.css';

const UserButton = function (props) {
  return (
    <button
      className={styles['user__button']}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default UserButton;
