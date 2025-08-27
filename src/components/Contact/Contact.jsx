//import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ name, number }) => (
  <>
    <div className={css.contactDate}>
      <h3 className={css.contactName}>{name}</h3>
      <p className={css.number}>{number}</p>
    </div>
    <div className={css.delete}>
      <button className={css.deleteBtn}>Delete</button>
    </div>
  </>
);

export default Contact;
