import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName
    };

    setPersons([...persons, personObject]);
    setNewName('');
  };

  const handlePerson = (e) => {
    setNewName(e.target.value);


  };
 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input
            type="text"
            value={newName}
            onChange={handlePerson}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;