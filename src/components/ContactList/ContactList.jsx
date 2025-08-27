import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';

const ContactList = ({ contactsTasks, onDelete }) => {
    return (
        <ul className={css.list}>
            {contactsTasks.map(task => (
                <li key={task.id} className={css.item}>
                    <Contact contactItem={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contactsTasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;
