import { useState } from "react";
const Button = (props) => {
  return <button onClick={props.handleclick}> {props.text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setvote] = useState(new Uint8Array(anecdotes.length));
  const [selected, setSelected] = useState(0);
  const ranSelector = () => {
    let min = Math.ceil(0);
    let max = Math.floor(anecdotes.length);
    let num = Math.floor(Math.random() * (max - min) + min);
    console.log(num);
    return num; // The maximum is exclusive and the minimum is inclusive
  };

  const StatisticLine = (props) => {
    return (
      <p>
        {props.stat} {props.num}
      </p>
    );
  };

  const selectAnectode = () => {
    let num = ranSelector();
    return setSelected(num);
  };

  const voting = () => {
    console.log(votes[selected]);
    const copy = [...votes];
    copy[selected] += 1;
    return setvote(copy);
  };
  return (
    <div>
      <h1> anectode of the day</h1>
      {anecdotes[selected]}
      <div></div>
      <StatisticLine stat={"votes"} num={votes[selected]}>
        {" "}
      </StatisticLine>
      <Button handleclick={voting} text={"vote"} />
      <Button handleclick={selectAnectode} text={"next anectode"} />
    </div>
  );
};

export default App;
