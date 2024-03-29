import React, { useContext } from 'react';

import ContactContext from '../../store/contact-context/contact-context';
import NewFormContext from '../../store/new-form-context/new-form-context';

import Button from '../UI/Button';

import styles from './Navigation.module.scss';

const Navigation = function (props) {
  const NewFormCtxValues = useContext(NewFormContext);
  const ContactCtxValues = useContext(ContactContext);

  return (
    <div className={styles['navigation']}>
      <ul className={styles['navigation__list']}>
        <li className={styles['navigation__list-item']}>
          <h3 className={styles['navigation__logo']}>All contacts</h3>
        </li>
        <li className={styles['navigation__list-item']}>
          <p className={styles['navigation__logo-description']}>
            {ContactCtxValues.numOfContacts} contacts
          </p>
        </li>
      </ul>

      <ul className={styles['navigation__list']}>
        <li className={styles['navigation__list-item']}>
          <Button
            type="button"
            className={`btn-outline-primary ${styles['navigation__btn']}`}
          >
            <i className={`fas fa-file-export ${styles['navigation__icon']}`} />
            Export
          </Button>
        </li>
        <li className={styles['navigation__list-item']}>
          <Button
            type="button"
            className={`btn-primary ${styles['navigation__btn']}`}
            onClick={NewFormCtxValues.openForm}
          >
            <i className={`fas fa-user-plus ${styles['navigation__icon']}`} />
            Add new
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
