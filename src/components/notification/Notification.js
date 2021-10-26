import React from "react";
import PropTypes from "prop-types";
import style from "../statistics/statistics.module.css";

export default function Notification({ msg }) {
  return <div className={style.title}>{msg}</div>;
}

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
