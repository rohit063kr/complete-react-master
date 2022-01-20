import React from 'react';

import Card from '../UI/Card';

import styles from './UserList.module.css';

const UserList = function (props) {
  return (
    <Card>
      <ul className={styles['user__list']}>
        {props.formData.map(user => (
          <li key={Math.random()}>{`${user.name} (${user.age} year old)`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
