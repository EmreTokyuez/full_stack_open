import { useState } from "react";

const StatisticLine = (props) => {
  if (props.total === 0) {
    if (props.stat === "good")
      return (
        <tr>
          <td>
            <p>No feedback given</p>
          </td>
        </tr>
      );
    else {
      return;
    }
  } else {
    return (
      <tr>
        {""}
        <td>
          {" "}
          {props.stat} {"  "}
          {props.num}
        </td>
      </tr>
    );
  }
};

const Button = (props) => {
  return <button onClick={props.handler}> {props.text} </button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [posNum, setPosNum] = useState(0);

  const CounterGood = (value) => {
    CounterTotal(total + 1);

    return setGood(value);
  };
  const CounterNeutral = (value) => {
    CounterTotal(total + 1);

    return setNeutral(value);
  };
  const CounterBad = (value) => {
    CounterTotal(total + 1);
    return setBad(value);
  };

  const CounterTotal = (value) => {
    // console.log(total);
    Avg();
    PosNum();
    const Total = (value) => setTotal(value);
    return Total(value);
  };

  const Avg = () => {
    // console.log([good, neutral, bad]);
    return setAverage((good * 1 + neutral * 0 + bad * -1) / total);
  };

  const PosNum = () => {
    return setPosNum(good / total);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={() => CounterGood(good + 1)} />
      <Button text="neutral" handler={() => CounterNeutral(neutral + 1)} />
      <Button text="bad" handler={() => CounterBad(bad + 1)} />
      <table>
        <thead>
          <tr>
            <th>Statistics</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine stat="good" num={good} total={total} />
          <StatisticLine stat="neutral" num={neutral} total={total} />
          <StatisticLine stat="bad" num={bad} total={total} />
          <StatisticLine stat="Total" num={total} total={total} />
          <StatisticLine stat="Average" num={average} total={total} />
          <StatisticLine stat="Positive" num={posNum} total={total} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
