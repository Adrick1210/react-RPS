import React from "react";
import "./Results.css";

function Results({ computerScore, playerScore, playerChoice, computerChoice }) {
  let result = "";
  // if (playerScore === 0 && computerScore === 0) {
  //   result = "The Game Begins..."
  // } else
  if (computerScore === playerScore) {
    result = `The Player and Computer are tied. The Player chose ${playerChoice} and the Computer chose ${computerChoice}`;
  }
  if (playerScore > computerScore) {
    result = `The Player wins! The player chose ${playerChoice} and the computer has picked ${computerChoice}!`;
  }
  if (computerScore > playerScore) {
    result = `The Computer wins! The player chose ${playerChoice} and the Computer chose ${computerChoice}!`;
  }
  return <div className="result"> The results are in: {result}</div>;
}

export default Results;
