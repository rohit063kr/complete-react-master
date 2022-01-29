import React, { useState, useEffect, useReducer } from 'react';
import ReactDom from 'react-dom';

import './App.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import NewContact from './components/NewContact/NewContact';

const contactReducer = function (prevState, action) {
  if (action.type === 'COLLECT_CONTACTS')
    return {
      allContacts: [...prevState.allContacts, ...action.data],
      filteredContacts: [...prevState.allContacts, ...action.data],
    };

  if (action.type === 'FILTER_CONTACTS')
    return {
      allContacts: prevState.allContacts,
      filteredContacts: prevState.allContacts.filter(
        contact =>
          contact.tags
            .toLowerCase()
            .includes(action.filterKeyword.toLowerCase()) ||
          contact.name
            .toLowerCase()
            .includes(action.filterKeyword.toLowerCase())
      ),
    };
};

const App = function () {
  const [isNewContactFormRequired, setIsNewContactFormRequired] =
    useState(false);

  const [contactState, dispatchContactState] = useReducer(contactReducer, {
    allContacts: [],
    filteredContacts: [],
  });

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts &&
      dispatchContactState({ type: 'COLLECT_CONTACTS', data: contacts });
  }, []);

  const saveContacts = function (data) {
    localStorage.setItem('contacts', JSON.stringify(data));
  };

  const addContactFormHandler = function () {
    setIsNewContactFormRequired(true);
  };

  const removeContactFormHandler = function () {
    setIsNewContactFormRequired(false);
  };

  const formSubmitHandler = function (data) {
    // setContactData(prevData => [...prevData, data]);
    dispatchContactState({ type: 'COLLECT_CONTACTS', data: [data] });

    saveContacts([...contactState.allContacts, data]);
  };

  const contactFilterHandler = function (filterKeyword) {
    dispatchContactState({ type: 'FILTER_CONTACTS', filterKeyword });
  };

  const collectVisibleContact = function (page = 1) {
    // Page changing logic here
    return contactState.filteredContacts;
  };

  return (
    <React.Fragment>
      {isNewContactFormRequired &&
        ReactDom.createPortal(
          <NewContact
            onFormSubmit={formSubmitHandler}
            onFormRemove={removeContactFormHandler}
          />,
          document.getElementById('new-contact-root')
        )}
      <Navigation
        numContacts={contactState.allContacts.length}
        onFormAdd={addContactFormHandler}
      />
      <Header
        onFilter={contactFilterHandler}
        numContacts={contactState.allContacts.length}
      />
      <Contacts contactInfo={contactState.filteredContacts} />
    </React.Fragment>
  );
};

export default App;
