import React from 'react';

import styles from './Header.module.scss';

import HeaderSearchFrom from './HeaderSearchForm';
import Button from '../UI/Button';

const Header = function (props) {
  return (
    <header className={styles['header']}>
      <div className={styles['header__config']}>
        <HeaderSearchFrom onContactsFilter={props.onFilter} />
        <div className={styles['header__sort']}>
          <label className={styles['header__sort-label']}>Sort by: </label>
          <select className={styles['header__sort-select']}>
            <option value="0">Last interaction</option>
          </select>
        </div>
        <div className={styles['header__list-config']}>
          1-10 of {props.numContacts}
          <span className={styles['header__list-btns']}>
            <Button
              type="button"
              disabled={true}
              className={styles['header__btn']}
            >
              <i className="fas fa-chevron-left" />
            </Button>
            <Button type="button" className={styles['header__btn']}>
              <i className="fas fa-chevron-right" />
            </Button>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
