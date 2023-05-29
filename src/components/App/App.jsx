import React from 'react';
import ContactsForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactItem from 'components/ContactList/ContactList';

import css from 'components/App/App.module.css';
import { useSelector } from 'react-redux';

const App = () => {
  const getContacts = useSelector(state => state.contacts.contacts);

  return (
    <div className={css.container}>
      <ContactsForm />
      <Filter />
      <ul className={css.itemList}>
        {getContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default App;
