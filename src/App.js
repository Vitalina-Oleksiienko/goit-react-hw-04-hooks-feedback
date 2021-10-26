import "./App.css";
import { useState, useEffect, useRef } from "react";
import Section from "./components/section/Section";

  export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood((prev) => prev + 1);
  };
  const handleClickNeutral = () => {
    setNeutral((prev) => prev + 1);
  };
  const handleClickBad = () => {
    setBad((prev) => prev + 1);
  };

  let countTotalFeedback = useRef(0);
  let countPositiveFeedbackPercentage = useRef(0);

  useEffect(() => {
    countTotalFeedback.current = good + neutral + bad;
    countPositiveFeedbackPercentage.current = Math.round(
      (good / countTotalFeedback.current) * 100
    );
  });
    
 return (
    <div className="App">
      <Section
        title={"Please leave feedback"}
        handleClickGood={handleClickGood}
        handleClickNeutral={handleClickNeutral}
        handleClickBad={handleClickBad}
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={countTotalFeedback.current}
        positiveFeedbackPercentage={countPositiveFeedbackPercentage.current}
      />
    </div>
  );
}
