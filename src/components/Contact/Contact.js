import { ContactWrap, ContactBtn } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <ContactWrap>
      <p>{name}:</p>
      <p>{number} </p>
      <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ContactBtn>
    </ContactWrap>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
