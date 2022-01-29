import React from 'react';

import styles from './HeaderSearchForm.module.scss';
import Input from '../UI/Input';

const HeaderSearchFrom = function (props) {
  const searchInputChangeHandler = function (e) {
    props.onContactsFilter(e.target.value);
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
