import Person from "./Person";

const Persons = ({ personList }, remover, label) => {
  return (
    <ul>
      {personList.map((person) => (
        <Person
          key={person.name}
          person={person}
          deleter={() => remover(person.name)}
        />
      ))}{" "}
    </ul>
  );
};

export default Persons;
