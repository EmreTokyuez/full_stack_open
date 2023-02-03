import { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      {""}
      <p>
        {props.text} {props.value}
      </p>
      {""}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <h2>statistics</h2>
      <Statistics text="good" />
      <Statistics text="neutral" />
      <Statistics text="bad" />
    </div>
  );
};

export default App;
