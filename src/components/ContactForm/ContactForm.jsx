import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
//import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const id_name = useId();
  const id_number = useId();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.number().min(3, 'Too Short!').max(10, 'Too Long!').required('Required'),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    const newValues = { id: Date.now(), ...values };
    onAdd(newValues);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label htmlFor={id_name}>Name</label>
        <Field className={css.field} type="text" name="name" id={id_name} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={id_number}>Number</label>
        <Field className={css.field} type="number" name="number" id={id_number} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
