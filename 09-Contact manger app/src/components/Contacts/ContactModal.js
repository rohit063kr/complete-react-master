import React from 'react';

import styles from './ContactModal.module.scss';

import ContactPerson from './ContactPerson';
import ContactTags from './ContactTags';

const ContactModal = function (props) {
  return (
    <React.Fragment>
      <div
        className={styles['contact-overlay']}
        onClick={props.onModalClose}
      ></div>
      <div className={styles['contact-modal']}>
        <ContactPerson
          names={props.data.names}
          className={styles['contact-modal__profile']}
        />
        <div className={styles['contact-modal__name']}>
          Name: {props.data.names}
        </div>
        <div className={styles['contact-modal__phone']}>
          Phone: {props.data.phone}
        </div>
        <ContactTags tags={props.data.tags} isLebelling={false} />
        {/* <div className={styles['contact-modal__tags']}>{props.data.tags}</div> */}
      </div>
    </React.Fragment>
  );
};

export default ContactModal;
