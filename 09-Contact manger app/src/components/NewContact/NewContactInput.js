import React, { forwardRef } from 'react';

import styles from './NewContactInput.module.scss';

import Input from '../UI/Input';

const NewContactInput = forwardRef(function (props, ref) {
  return (
    <div className={styles['contact-form__input-container']}>
      <label className={styles['contact-form__label']} htmlFor={props.id}>
        {props.label}
      </label>
      <Input
        ref={ref}
        className={`${styles['contact-form__input']} ${
          props.errSite === props.label && styles['invalid']
        }`}
        type={props.type}
        id={props.id}
      />
    </div>
  );
});

export default NewContactInput;
