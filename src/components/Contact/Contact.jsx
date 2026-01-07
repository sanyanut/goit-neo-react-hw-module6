import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

function Contact({ onDelete, contact: { id, name, number } }) {
  return (
    <li className={css.contact_wrapper}>
      <div className={css.contact_col}>
        <div className={css.contact_inner}>
          <FaUser />
          <p className={css.contact_text}>{name}</p>
        </div>
        <div className={css.contact_inner}>
          <FaPhoneAlt />
          <p className={css.contact_text}>{number}</p>
        </div>
      </div>
      <button className={css.contact_delete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
