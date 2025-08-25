import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

const ContactForm = ({ values, setValues }) => {
  const id_name = useId();
  const id_number = useId();

  const ContactFormSchema = Yup;

  const handleSubmit = (valuesForm, actions) => {
    setValues(valuesForm);
    actions.resetForm();
  };
  return (
    <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={ContactFormSchema}>
      <Form className={css.form}>
        <label htmlFor={id_name}>Name</label>
        <Field className={css.field} type="text" name="name" id={id_name} />
        <label htmlFor={id_number}>Number</label>
        <Field className={css.field} type="number" name="number" id={id_number} />

        <button classname={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
