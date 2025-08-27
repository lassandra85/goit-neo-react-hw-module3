import { useState } from 'react';
import { useLocalStorage } from 'react-use';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialContacts from '../../data/contacts.json';

import css from './App.module.css';

const App = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', initialContacts);
    const [filter, setFilter] = useState('');

    const addTask = newValues => setTasks(prev => [...prev, newValues]);

    const deleteTask = taskId =>
        setTasks(prev => prev.filter(task => task.id !== taskId));

    const visibleTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onAdd={addTask} />
            <SearchBox value={filter} search={setFilter} />
            <ContactList contactsTasks={visibleTasks} onDelete={deleteTask} />
        </div>
    );
};

export default App;
