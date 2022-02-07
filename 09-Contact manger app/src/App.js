import React from 'react';
import ReactDom from 'react-dom';

import './App.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import NewContact from './components/NewContact/NewContact';

// Context Components
import ContactProvider from './store/contact-context/ContactProvider';
import NewFormProvider from './store/new-form-context/NewFormProvider';

const App = function () {
  return (
    <ContactProvider>
      <NewFormProvider>
        {ReactDom.createPortal(
          <NewContact />,
          document.getElementById('modal-root')
        )}
        <Navigation />
        <Header />
        <Contacts />
      </NewFormProvider>
    </ContactProvider>
  );
};

export default App;
