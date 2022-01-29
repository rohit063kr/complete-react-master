import React, { useReducer, useRef } from 'react';

import styles from './NewContact.module.scss';

import Button from '../UI/Button';
import Input from '../UI/Input';

const formValidReducer = function (_, action) {
  if (action.type === 'NAME_INPUT_INVALID')
    return {
      isValid: false,
      errMsg: 'Please write name less than 20 and greter than  character',
      errSite: 'Name',
    };

  if (action.type === 'PHONE_INPUT_INVALID')
    return {
      isValid: false,
      errMsg: 'Please write valid phone number or remove (+91) if you added it',
      errSite: 'Phone',
    };

  return { isValid: true, errMsg: null };
};

const NewContact = function (props) {
  const [formValidState, dispatchFormValidState] = useReducer(
    formValidReducer,
    {
      isValid: false, // Only responsible for dom changes
      errMsg: null,
      errSite: null,
    }
  );

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const tagsInputRef = useRef();

  const checkFormValid = function (e) {
    const inputPhoneNumber = phoneInputRef.current.value;

    if (
      nameInputRef.current.value.length > 20 ||
      nameInputRef.current.value.length < 2
    ) {
      dispatchFormValidState({ type: 'NAME_INPUT_INVALID' });
      return { isValid: false };
    }

    if (inputPhoneNumber.length !== 10) {
      dispatchFormValidState({ type: 'PHONE_INPUT_INVALID' });
      return { isValid: false };
    }

    dispatchFormValidState({ type: 'FORM_IS_VALID' });
    return { isValid: true };
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();

    const { isValid } = checkFormValid();

    if (!isValid) return;
    console.log(true);

    const data = {
      name: nameInputRef.current.value,
      phone: phoneInputRef.current.value,
      tags: tagsInputRef.current.value,
      id: Math.random(),
    };

    props.onFormSubmit(data);
    props.onFormRemove();
  };

  return (
    <React.Fragment>
      <div
        className={styles['contact-overlay']}
        onClick={props.onFormRemove}
      ></div>
      <form
        className={styles['contact-form']}
        onSubmit={formSubmitHandler}
        autoComplete="on"
      >
        <button
          type="button"
          className={`${styles['contact-form__btn-cancel']}`}
        >
          <i className="fas fa-times" onClick={props.onFormRemove} />
        </button>
        <div className={styles['contact-form__input-container']}>
          <label className={styles['contact-form__label']} htmlFor="name">
            Name
          </label>
          <Input
            ref={nameInputRef}
            className={`${styles['contact-form__input']} ${
              formValidState.errSite === 'Name' && styles['invalid']
            }`}
            type="text"
            id="name"
          />
        </div>
        <div className={styles['contact-form__input-container']}>
          <label className={styles['contact-form__label']} htmlFor="phone">
            Phone number
          </label>
          <Input
            ref={phoneInputRef}
            className={`${styles['contact-form__input']} ${
              formValidState.errSite === 'Phone' && styles['invalid']
            }
            `}
            type="text"
            id="phone"
          />
        </div>
        <div className={styles['contact-form__input-container']}>
          <label className={styles['contact-form__label']} htmlFor="Tags">
            Tags
          </label>
          <Input
            ref={tagsInputRef}
            className={styles['contact-form__input']}
            type="text"
            id="Tags"
          />
        </div>
        <Button
          type="submit"
          className={`btn-outline-primary ${styles['contact-form__btn']}`}
        >
          <i
            className={`fas fa-phone-alt ${styles['contact-form__btn-icon']}`}
          ></i>
          Add contact
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewContact;
