import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


const addPerson = (e) => {
  e.preventDefault()
  console.log("click registered",event.target)
  const personObject = {
    content: newName
  }

  newName(persons.concat(personObject))
  setNewName('')
}

const handleperson = (e) => {
  console.log(e.target.value)
  setPersons(e.target.value)
}
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
           type="text"
           onChange={handleperson}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App