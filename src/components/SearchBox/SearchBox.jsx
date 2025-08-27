import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ value, search }) => {
    return (
        <div className={css.searchBox}>
            <p className={css.searchLabel}>Find contacts by name</p>
            <input
                className={css.searchInput}
                type="text"
                value={value}
                onChange={e => search(e.target.value)}
            ></input>
        </div>
    );
};

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    search: PropTypes.func.isRequired,
};

export default SearchBox;
