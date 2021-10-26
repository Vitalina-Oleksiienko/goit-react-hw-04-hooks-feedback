import React from "react";
import style from "./section.modules.css";
import FeedbackOptions from "../feedback/Feedback";
import Statistics from "../statistics/Statistics";
import Notification from "../notification/Notification";
import PropTypes from "prop-types";

export default function Section({
  title,
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      <FeedbackOptions
        handleClickGood={handleClickGood}
        handleClickNeutral={handleClickNeutral}
        handleClickBad={handleClickBad}
      />
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification msg="No feedback given" />
      )}
    </>
  );
}

Section.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleClickGood: PropTypes.func.isRequired,
  handleClickNeutral: PropTypes.func.isRequired,
  handleClickBad: PropTypes.func.isRequired,
};
