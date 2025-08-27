import Contact from '../Contact/Contact';
//import PropTypes from 'prop-types';

import css from './ContactList.module.css';

const ContactList = ({ contactsTasks }) => {
  return (
    <ul className={css.contactsList}>
      {contactsTasks.map(({ id, name, number }) => (
        <li key={id} className="contactItem">
          <Contact contactItem={{ name, number }} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
