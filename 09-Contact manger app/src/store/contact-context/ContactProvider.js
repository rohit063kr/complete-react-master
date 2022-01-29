import React, { useReducer, useEffect } from 'react';

import ContactContext from './contact-context';

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

const ContactProvider = function (props) {
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

  const formSubmitHandler = function (data) {
    // setContactData(prevData => [...prevData, data]);
    dispatchContactState({ type: 'COLLECT_CONTACTS', data: [data] });

    saveContacts([...contactState.allContacts, data]);
  };

  const contactFilterHandler = function (filterKeyword) {
    dispatchContactState({ type: 'FILTER_CONTACTS', filterKeyword });
  };

  const contactContextValues = {
    allContacts: contactState.allContacts,
    filteredContacts: contactState.filteredContacts,
    numOfContacts: contactState.allContacts.length,
    filterContacts: contactFilterHandler,
    addContact: formSubmitHandler,
  };

  return (
    <ContactContext.Provider value={contactContextValues}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
