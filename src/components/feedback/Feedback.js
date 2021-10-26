import React from "react";
import PropTypes from "prop-types";
import style from "./feedback.module.css";

export default function FeedbackOptions({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
}) {
  return (
    <>
      <button className={style.button} type="button" onClick={handleClickGood}>
        Good
      </button>
      <button
        className={style.button}
        type="button"
        onClick={handleClickNeutral}
      >
        Neutral
      </button>
      <button className={style.button} type="button" onClick={handleClickBad}>
        Bad
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  handleClickGood: PropTypes.func.isRequired,
  handleClickNeutral: PropTypes.func.isRequired,
  handleClickBad: PropTypes.func.isRequired,
};
