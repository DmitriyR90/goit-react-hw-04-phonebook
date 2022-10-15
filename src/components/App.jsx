import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Conteiner } from './Conteiner/Conteiner';
import { useLocalStorage, exampleContacts } from './Hooks/UseLocalStorage';

export const App = () => {
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
