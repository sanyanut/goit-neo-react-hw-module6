import Contact from '../Contact/Contact.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import css from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters.name);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(item => {
    const contactName = item.name || '';
    const filterValue = filters || '';

    return contactName.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <>
      {filteredContacts.length ? (
        <ul className={css.contact_list__content}>
          {filteredContacts.map(contact => (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={handleDeleteContact}
            />
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
}

export default ContactList;
