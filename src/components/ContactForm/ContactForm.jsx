import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
    const id_name = useId();
    const id_number = useId();

    const ContactFormSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        number: Yup.string()
            .matches(/^\d+$/, 'Phone number must contain only digits')
            .length(10, 'Phone number must be exactly 10 digits')
            .required('Required'),
    });

    const handleSubmit = (values, actions) => {
        const newValues = { id: nanoid(), ...values };
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
                <Field
                    className={css.field}
                    type="text"
                    name="name"
                    id={id_name}
                />
                <ErrorMessage
                    className={css.error}
                    name="name"
                    component="span"
                />
                <label htmlFor={id_number}>Number</label>
                <Field
                    className={css.field}
                    type="number"
                    name="number"
                    id={id_number}
                />
                <ErrorMessage
                    className={css.error}
                    name="number"
                    component="span"
                />

                <button className={css.btn} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
