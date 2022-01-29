import React from 'react';

const ContactContext = React.createContext({
  allContacts: [],
  filteredContacts: [],
  numOfContacts: 0,
  filterContacts: () => {},
  addContact: () => {},
});

export default ContactContext;
