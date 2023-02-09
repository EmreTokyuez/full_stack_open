import { useState } from "react";

const PhoneNum = ({ person }) => {
  console.log(person);
  return <li>{person.name}</li>;
};

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "emre",
    },
  ]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <PhoneNum key={persons[0].id} name={persons[0].name} />
      </ul>
    </div>
  );
};

export default App;
