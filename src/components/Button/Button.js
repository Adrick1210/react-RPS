import React from "react";
import "./Button.css";

function Button({ label, handleClick }) {
  return <button onClick={() => handleClick(label)}>{label}</button>;
}

export default Button;
