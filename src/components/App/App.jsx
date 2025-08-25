import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState } from 'react';
//import css from './App.module.css';

const App = () => {
  const initialValues = {
    name: '',
    number: '',
  };
  const [values, setValues] = useState(initialValues);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm values={values} handleChange={setValues} />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
