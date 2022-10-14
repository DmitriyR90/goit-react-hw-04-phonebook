import { Formik } from 'formik';
import { Component } from 'react';
import { customAlphabet } from 'nanoid';
import {
  FormWrap,
  FormFeld,
  FormLabel,
  FormButton,
  ErrorMsg,
} from './ContactForm.styled';

const nanoid = customAlphabet('1234567890abc', 7);

function validateName(name) {
  let error;
  if (!name) {
    error = 'Enter name!';
  } else if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(name)
  ) {
    error =
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  }
  return error;
}

function validateNumber(number) {
  let error;
  if (!number) {
    error = 'Enter telephone number!';
  } else if (
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
      number
    )
  ) {
    error =
      'Phone number must be more then 5 digits and can contain spaces, dashes, parentheses and can start with +';
  }
  return error;
}

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, actions) => {
    const id = nanoid();
    values.id = id;
    this.props.onSubmit(values);
    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{
          name: this.state.name,
          number: this.state.number,
        }}
        onSubmit={this.handleSubmit}
      >
        {({ errors, touched }) => (
          <FormWrap autoComplete="off">
            <FormLabel>
              Name
              <FormFeld
                id="name"
                name="name"
                type="text"
                validate={validateName}
              />
              {errors.name && touched.name && (
                <ErrorMsg>{errors.name}</ErrorMsg>
              )}
            </FormLabel>
            <FormLabel>
              {' '}
              Number
              <FormFeld
                id="number"
                name="number"
                type="tel"
                validate={validateNumber}
              />
              {errors.number && touched.number && (
                <ErrorMsg>{errors.number}</ErrorMsg>
              )}
            </FormLabel>
            <FormButton type="submit">Add contact</FormButton>
          </FormWrap>
        )}
      </Formik>
    );
  }
}
