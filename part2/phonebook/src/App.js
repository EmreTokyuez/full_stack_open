import { useState, useEffect } from "react";
import Persons from "./components/Persons.js";
import PersonFilter from "./components/PersonFilter.js";
import PersonForm from "./components/PersonForm";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [showAll, setShowAll] = useState(true);
  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fullfilled");
      setPersons(response.data);
    });
  };

  useEffect(hook, []);
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
  const addSearch = (event) => {
    console.log(event);
    console.log("addSearch: ");
    console.log("newsearch", newSearch);
    setNewSearch(newSearch);
    setShowAll(!showAll);
  };
  const PersonChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const NumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const SearchChange = (event) => {
    console.log("SearchChange", event.target.value);
    setNewSearch(event.target.value);
    console.log(newSearch);
    console.log(PersonsToShow);
  };

  const PersonsToShow = showAll
    ? persons
    : persons.filter((person) => person.name.includes(newSearch));
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter
        text={"filter shown with:"}
        sub={addSearch}
        value={newSearch}
        change={SearchChange}
      ></PersonFilter>
      <PersonForm
        sub={addPerson}
        nametext={"name:"}
        namenew={newName}
        namechange={PersonChange}
        numbertext={"number:"}
        numbernew={newNumber}
        numberchange={NumberChange}
        buttontext={"add"}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons personList={PersonsToShow} />
    </div>
  );
};

export default App;
