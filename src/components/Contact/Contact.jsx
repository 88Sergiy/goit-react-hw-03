import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi2';
import { HiPhone } from 'react-icons/hi2';
import styles from './Contact.module.css';

function Contact({ contact, onDelete }) {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.user}>
          <HiUser size={'18px'} title="contact icon" />
          <span>{contact.name}</span>
        </div>

        <div className={styles.phone}>
          <HiPhone size={'18px'} title="phone icon" />
          <span>{contact.number}</span>
        </div>
      </div>

      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </>
  );
}

Contact.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Contact;