const Person = ({ person }) => {
  // console.log("object", { person });
  return (
    <li>
      {person.name}
      {person.number}
    </li>
  );
};

export default Person;
