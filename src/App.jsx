import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';

function App() {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length ? (
        <>
          <SearchBox />
          <ContactList />
        </>
      ) : null}
    </>
  );
}

export default App;
