import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Conteiner } from './Conteiner/Conteiner';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const App = () => {
  const exampleContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useLocalStorage('contacts', exampleContacts);
  const [filter, setFilter] = useState('');

  const handleSubmit = values => {
    const allContacts = contacts.map(contact =>
      contact.name.toLocaleLowerCase()
    );
    const newContact = values.name.toLocaleLowerCase();

    if (allContacts.includes(newContact)) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, values]);
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDeleteContact = toDeleteId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== toDeleteId)
    );
  };
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Conteiner>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList
        contacts={filteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </Conteiner>
  );
};
