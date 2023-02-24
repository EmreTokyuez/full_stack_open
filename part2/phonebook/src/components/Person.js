const Person = ({ person }, deleter) => {
  // console.log("object", { person });
  return (
    <li>
      {person.name}
      {person.number}
      <button onClick={deleter}>delete</button>
    </li>
  );
};

export default Person;
