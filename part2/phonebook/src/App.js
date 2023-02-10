import { useState } from "react";
import Person from "./components/Person";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "053532" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    const names = persons.map((person) => person.name);
    console.log("names: ", names);
    if (names.includes(personObject.name)) {
      console.log("error");
      window.alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      setPersons(persons.concat(personObject));

      setNewName("");
      setNewNumber("");
    }
  };

  const PersonChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const NumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={PersonChange} />
          <div>
            number: <input value={newNumber} onChange={NumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <ul>
          {persons.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default App;
