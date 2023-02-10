import { useState } from "react";
import Person from "./components/Person";
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };
    console.log(persons.includes(personObject));
    if (persons.includes(personObject)) {
      console.log("error");
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const PersonChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={PersonChange} />
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
