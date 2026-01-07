import { useId } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice.js';
import css from './ContactForm.module.css';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number must match 555-55-55 format')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        ...values,
        id: nanoid(),
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.contact_form}>
        <div className={css.contact_form__cell}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.contact_form__field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.contact_form__error}
            name="name"
            component="span"
          />
        </div>

        <div className={css.contact_form__cell}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.contact_form__field}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={css.contact_form__error}
            name="number"
            component="span"
          />
        </div>

        <button className={css.contact_form__submit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
