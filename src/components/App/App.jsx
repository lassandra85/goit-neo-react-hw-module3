import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialContacts from '../../data/contacts.json';
import { useState } from 'react';
//import css from './App.module.css';

const App = () => {
  const [tasks, setTasks] = useState(initialContacts);

  const addTask = newValues => setTasks(prev => [...prev, newValues]);
  //const [values, setValues] = useState(initialValues);
  console.log(tasks);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addTask} />
      <SearchBox />
      <ContactList contactsTasks={tasks} />
    </div>
  );
};

export default App;
