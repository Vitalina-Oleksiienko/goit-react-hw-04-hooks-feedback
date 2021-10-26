import React from "react";
import PropTypes from "prop-types";
import style from "./statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <>
      <h2 className={style.title}>Statistics</h2>
      <p className={style.p}>Good: {good}</p>
      <p className={style.p}>Neutral: {neutral}</p>
      <p className={style.p}>Bad: {bad}</p>
      <p className={style.p}>Total: {totalFeedback}</p>
      <p className={style.p}>
        Positive feedback:{" "}
        {positiveFeedbackPercentage ? positiveFeedbackPercentage : 0}
      </p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
