import React from 'react';

const NewFormContext = React.createContext({
  isRequired: false,
  openForm: () => {},
  closeForm: () => {},
});

export default NewFormContext;
