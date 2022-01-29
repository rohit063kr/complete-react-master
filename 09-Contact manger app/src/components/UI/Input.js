import React, { forwardRef } from 'react';

import styles from './Input.module.scss';

const Input = forwardRef(function (props, ref) {
  return (
    <input
      ref={ref}
      type={props.type}
      className={`${styles['input']} ${props.className}`}
      placeholder={props.placeholder}
      onChange={props.onChange}
    >
      {props.children}
    </input>
  );
});

export default Input;
