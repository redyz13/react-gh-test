import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Person } from './model/Person';

function App(): JSX.Element {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    // Chiamata al tuo server Node.js per ottenere la lista di persone
    fetch('http://localhost:3001/users') // Assumi che il tuo server esponga un endpoint /users
      .then((response) => response.json())
      .then((data) => setPersons(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // La dipendenza vuota fa sì che l'effetto venga eseguito solo una volta, all'avvio del componente

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
