import React from 'react';

import styles from './ContactItem.module.scss';

import ContactPerson from './ContactPerson';

const ContactItem = function (props) {
  return (
    <li
      className={`${styles['contacts__list-item']} ${styles['contacts__labels']}`}
    >
      {props.isLabelling ? (
        <div className={styles['contacts__contact']}>
          <input type="checkbox" className={styles['contacts__all-select']} />
          Contacts
        </div>
      ) : (
        <ContactPerson names={props.data.names} />
      )}
      <div className={styles['contacts__phn-num']}>
        {props.isLabelling ? 'Phone numbers' : props.data.phone}
      </div>
      <div className={styles['contacts__tags']}>
        {props.isLabelling
          ? 'Tags'
          : props.data.tags.split(',').map(el => (
              <span key={Math.random()} className={styles['contacts__tag']}>
                {el}
              </span>
            ))}
      </div>
      <div className={styles['contacts__interactions']}>
        {props.isLabelling ? 'Interactions' : props.data.interactions?.length}
      </div>
      <div className={styles['contacts__last-interaction']}>
        {props.isLabelling
          ? 'Last interaction'
          : props.data.interactions
          ? props.data.interactions[0]
          : undefined}
      </div>
    </li>
  );
};

export default ContactItem;
