import { useState } from "react";

const StatisticsLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);
const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good * 100) / all || 0;
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticsLine text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="neutral" value={neutral} />
            </td>
          </tr>

          <tr>
            <td>
              <StatisticsLine text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="all" value={all} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="average" value={average} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="positive" value={positive} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button
        text="neutral"
        onClick={() => setNeutral(neutral + 1)}
      />
      <Button text="bad" onClick={() => setBad(bad + 1)} />

      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

export default App;
