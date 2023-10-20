import React from "react";
import "./Results.css";

function Results({computerScore, playerScore}) {
  let result = "tied"
  if (
    playerScore > computerScore
  ) {
    result = "Player is winning"
  }
  if (
    computerScore > playerScore
  ) {
    result = "computer is winning"
  }
  return <div>Results: {result}</div>;
}

export default Results;
