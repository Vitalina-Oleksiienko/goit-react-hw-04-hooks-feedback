import "./App.css";
import { Component } from "react";
import Section from "./components/section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };
  handleClickNeutral = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleClickBad = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );
    return (
      <div className="App">
        <Section
          title={"Please leave feedback"}
          handleClickGood={this.handleClickGood}
          handleClickNeutral={this.handleClickNeutral}
          handleClickBad={this.handleClickBad}
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default App;
