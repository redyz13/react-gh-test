import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import { useState, useEffect } from 'react';
import { PersonFacade, Person } from '../../shared/facade/PersonFacade';

function App(): JSX.Element {
  const [persons, setPersons] = useState<Person[]>([]);
  const fetchData = async (): Promise<void> => {
    const personFacade = new PersonFacade();

    try {
      const data = await personFacade.fetchUsers();
      setPersons(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. ^^ :D hehe
        </p>
        <ul>
          {persons.map((person, index) => (
            <li key={index}>
              {person.name} {person.surname}
            </li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
