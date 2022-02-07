import React from 'react';

import styles from './ContactPerson.module.scss';

const ContactPerson = function (props) {
  return (
    <React.Fragment>
      <span className={`${styles['contacts__icon']} ${props.className}`}>
        {props.names[0].toUpperCase()}
      </span>
    </React.Fragment>
  );
};

export default ContactPerson;
