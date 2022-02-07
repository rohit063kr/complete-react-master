import React, { useReducer, useRef, useContext } from 'react';

import styles from './NewContact.module.scss';

import Button from '../UI/Button';
import NewContactInput from './NewContactInput';

import NewFormContext from '../../store/new-form-context/new-form-context';
import ContactContext from '../../store/contact-context/contact-context';

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
      errSite: 'Phone number',
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

  const ContactCtxValues = useContext(ContactContext);
  const NewFormCtxValues = useContext(NewFormContext);

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

    const data = {
      name: nameInputRef.current.value,
      phone: phoneInputRef.current.value,
      tags: tagsInputRef.current.value,
      id: Math.random(),
    };

    ContactCtxValues.addContact(data);
    NewFormCtxValues.closeForm();
  };

  return NewFormCtxValues.isRequired ? (
    <React.Fragment>
      <div
        className={styles['contact-overlay']}
        onClick={NewFormCtxValues.closeForm}
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
          <i className="fas fa-times" onClick={NewFormCtxValues.closeForm} />
        </button>
        <NewContactInput
          type="text"
          id="name"
          label="Name"
          ref={nameInputRef}
          errSite={formValidState.errSite}
        />
        <NewContactInput
          type="number"
          id="num"
          label="Phone number"
          ref={phoneInputRef}
          errSite={formValidState.errSite}
        />
        <NewContactInput type="text" id="tag" label="tags" ref={tagsInputRef} />
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
  ) : (
    ''
  );
};

export default NewContact;
