import React, { useState } from 'react';
import ReactDom from 'react-dom';

import styles from './ContactItem.module.scss';
import ContactModal from './ContactModal';

import ContactPerson from './ContactPerson';
import ContactTags from './ContactTags';

const ContactItem = function (props) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModalHandler = function () {
    setIsContactModalOpen(true);
  };

  const closeContactModalHandler = function () {
    setIsContactModalOpen(false);
  };

  return (
    <React.Fragment>
      {isContactModalOpen &&
        ReactDom.createPortal(
          <ContactModal
            data={props.data}
            onModalClose={closeContactModalHandler}
          />,
          document.getElementById('modal-root')
        )}
      <li
        className={`${styles['contacts__list-item']} ${styles['contacts__labels']}`}
        onClick={props.isLabelling ? () => {} : openContactModalHandler}
      >
        <div className={styles['contacts__contact']}>
          {props.isLabelling ? (
            <React.Fragment>
              <input
                type="checkbox"
                className={styles['contacts__all-select']}
              />
              'Contacts'
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ContactPerson names={props.data.names} />
              <p>{props.data.names}</p>
            </React.Fragment>
          )}
        </div>
        <div className={styles['contacts__phn-num']}>
          {props.isLabelling ? 'Phone numbers' : props.data.phone}
        </div>
        <ContactTags tags={props.data?.tags} isLabelling={props.isLabelling} />
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
    </React.Fragment>
  );
};

export default ContactItem;
