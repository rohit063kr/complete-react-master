import React from 'react';

import styles from './ListItems.module.scss';

const ListItems = function (props) {
  return (
    <div
      data-id={props['data-id']}
      key={props.keys}
      className={`${styles.items} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default ListItems;
