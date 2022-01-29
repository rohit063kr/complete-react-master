import React from 'react';

import styles from './ContactPerson.module.scss';

const ContactPerson = function (props) {
  return (
    <div className={styles['contacts__contact']}>
      <input type="checkbox" className={styles['contacts__all-select']} />
      <span className={styles['contacts__icon']}>
        {props.names[0].toUpperCase()}
      </span>
      {props.names}
    </div>
  );
};

export default ContactPerson;
