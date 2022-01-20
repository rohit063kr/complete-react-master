import React, { useState } from 'react';

import UserForm from './UserForm/UserForm';
import UserList from './UserList/UserList';

import styles from './User.module.css';

const User = function (props) {
  const [users, setUsers] = useState([]);

  const dataTransferHandler = function (data) {
    setUsers(prevUsers => [...prevUsers, data]);
  };

  return (
    <div className={styles['user']}>
      <UserForm onFormSubmit={dataTransferHandler} />
      <UserList formData={users} />
    </div>
  );
};

export default User;
