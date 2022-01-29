import React from 'react';
import ContactItem from './ContactItem';

import styles from './Contacts.module.scss';

const Contacts = function (props) {
  return (
    <React.Fragment>
      <div className={styles['contacts']}>
        <ul className={styles['contacts__list']}>
          <ContactItem isLabelling={true} />
          {props.contactInfo.map(info => {
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
