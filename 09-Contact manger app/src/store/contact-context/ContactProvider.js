import React, { useReducer, useEffect, useCallback } from 'react';
import useSendRequest from '../../hooks/use-send-request';

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
  const { sendRequest } = useSendRequest();

  const [contactState, dispatchContactState] = useReducer(contactReducer, {
    allContacts: [],
    filteredContacts: [],
  });

  const extractData = useCallback(function (data) {
    const contacts = [];
    for (const el of Object.entries(data)) {
      contacts.push({
        id: el[0],
        name: el[1].name,
        phone: el[1].phone,
        tags: el[1].tags,
      });
    }
    return contacts;
  }, []);

  const loadContacts = useCallback(
    async function () {
      const data = await sendRequest({
        url: 'https://contact-management-app-29bc3-default-rtdb.firebaseio.com/contacts.json',
      });
      return data ? extractData(data) : null;
    },
    [extractData, sendRequest]
  );

  useEffect(() => {
    const fetchData = async () => {
      const contacts = await loadContacts();
      contacts &&
        dispatchContactState({ type: 'COLLECT_CONTACTS', data: contacts });
    };
    fetchData();
  }, [loadContacts]);

  const saveContacts = async function (data) {
    sendRequest({
      url: 'https://contact-management-app-29bc3-default-rtdb.firebaseio.com/contacts.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
  };

  const formSubmitHandler = function (data) {
    // setContactData(prevData => [...prevData, data]);
    dispatchContactState({ type: 'COLLECT_CONTACTS', data: [data] });

    saveContacts(data);
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
