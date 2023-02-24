import { useState, useEffect } from "react";
import Persons from "./components/Persons.js";
import PersonFilter from "./components/PersonFilter.js";
import PersonForm from "./components/PersonForm";
// import axios from "axios";
import personService from "./services/persons";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);
  const removePerson = (personObject) => {
    if (window.confirm(`Do you really want to delete ${personObject.name} `)) {
      personService
        .remove(personObject.id)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== personObject.id ? person : returnedPerson
            )
          );
        })
        .catch((error) => {
          alert("error");
          setPersons(persons.filter((p) => p.id !== personObject.id));
        });
      window.open(`deleted ${personObject.name}`);
    } else {
      return;
    }
  };

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
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
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
      <Persons
        personList={PersonsToShow}
        label={"delete"}
        deleter={() => removePerson(PersonsToShow)}
      />
    </div>
  );
};

export default App;
