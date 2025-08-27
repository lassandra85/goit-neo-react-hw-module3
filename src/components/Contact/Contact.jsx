import { HiOutlinePhone, HiOutlineUser } from 'react-icons/hi';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ contactItem, onDelete }) => {
    const { id, name, number } = contactItem;
    return (
        <>
            <div className={css.info}>
                <p className={css.text}>
                    <HiOutlineUser className={css.iconUser} />
                    {name}
                </p>
                <p className={css.text}>
                    <HiOutlinePhone className={css.iconPhone} />
                    {number}
                </p>
            </div>
                <button className={css.delete} onClick={() => onDelete(id)}>
                    Delete
                </button>
        </>
    );
};

Contact.propTypes = {
    contactItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Contact;
