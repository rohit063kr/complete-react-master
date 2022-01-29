import React, { useContext } from 'react';

import styles from './HeaderSearchForm.module.scss';
import Input from '../UI/Input';

import ContactContext from '../../store/contact-context/contact-context';

const HeaderSearchFrom = function (props) {
  const ContactCtxValues = useContext(ContactContext);

  const searchInputChangeHandler = function (e) {
    ContactCtxValues.filterContacts(e.target.value);
  };

  return (
    <form className={styles['header__form']}>
      <i className="fas fa-search"></i>
      <Input
        type="text"
        placeholder="Search contact or tags"
        onChange={searchInputChangeHandler}
      />
    </form>
  );
};

export default HeaderSearchFrom;
