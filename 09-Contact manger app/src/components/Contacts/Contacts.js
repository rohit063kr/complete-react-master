import React, { useContext } from 'react';
import ContactItem from './ContactItem';

import ContactContext from '../../store/contact-context/contact-context';

import styles from './Contacts.module.scss';

const Contacts = function (props) {
  const ContactCtxValues = useContext(ContactContext);

  return (
    <React.Fragment>
      <div className={styles['contacts']}>
        <ul className={styles['contacts__list']}>
          <ContactItem isLabelling={true} />
          {ContactCtxValues.filteredContacts.map(info => {
            return (
              <ContactItem
                key={info.id}
                isLabelling={false}
                data={{
                  names: info.name,
                  phone: info.phone,
                  tags: info.tags,
                }}
              />
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
