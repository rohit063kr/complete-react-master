import React from 'react';

import styles from './ContactTags.module.scss';

const ContactTags = function (props) {
  return (
    <div className={styles['contacts__tags']}>
      {props.isLabelling
        ? 'Tags'
        : props.tags.length === 0
        ? ''
        : props.tags.split(',').map(el => (
            <span key={Math.random()} className={styles['contacts__tag']}>
              {el}
            </span>
          ))}
    </div>
  );
};

export default ContactTags;
