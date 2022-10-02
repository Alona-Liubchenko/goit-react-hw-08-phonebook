import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

export class ContactForms extends Component {
  // hendleChange = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };
  hendleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values.name, values.number);
    // this.props.onSubmit()
    // console.log(values);

    resetForm();
  };
  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.hendleSubmit}>
        <Form autoComplete="off">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="name">Number</label>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
