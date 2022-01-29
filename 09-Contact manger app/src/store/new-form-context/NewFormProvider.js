import React, { useState } from 'react';

import NewFormContext from './new-form-context';

const NewFormProvider = function (props) {
  const [isNewContactFormRequired, setIsNewContactFormRequired] =
    useState(false);

  const addContactFormHandler = function () {
    setIsNewContactFormRequired(true);
  };

  const removeContactFormHandler = function () {
    setIsNewContactFormRequired(false);
  };

  const NewFormContextValue = {
    isRequired: isNewContactFormRequired,
    openForm: addContactFormHandler,
    closeForm: removeContactFormHandler,
  };

  return (
    <NewFormContext.Provider value={NewFormContextValue}>
      {props.children}
    </NewFormContext.Provider>
  );
};

export default NewFormProvider;
