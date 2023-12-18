import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Person } from '../server/model/Person';

function App(): JSX.Element {
  const [persons, setPersons] = useState<Person[]>([]);

  const remoteServerUrl = `${process.env.REACT_APP_WEBSERVER}/users`;

  useEffect(() => {
    fetch(remoteServerUrl)
      .then((response) => response.json())
      .then((data) => setPersons(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [remoteServerUrl]);

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
