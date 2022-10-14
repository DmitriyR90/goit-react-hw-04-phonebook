import { Contact } from '../Contact/Contact';
import { ContactSection, ContactItem } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactSection>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactItem key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </ContactItem>
        );
      })}
    </ContactSection>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
