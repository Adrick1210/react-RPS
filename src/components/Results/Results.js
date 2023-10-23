import React from "react";
import "./Results.css";

function Results({ computerScore, playerScore, playerChoice, computerChoice }) {
  let result = "";
  if (playerScore === 0 && computerScore === 0) {
    result = "The Game Begins..."
  }
  
  return <div className="result"> The results are in: {result}</div>;
}

export default Results;
