import React from "react";
import "./Score.css";

function Score({score, label}) {
  return <div>
    <p>{label}: {score}</p>
  </div>;
}

export default Score;
