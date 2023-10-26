import React from "react";
import "./Results.css";

function Results({ computerScore, playerScore, computerChoice, playerChoice }) {
  let result = "";
  if (computerScore + 1 > playerScore) {
    result = `The computer wins. The computer chose ${computerChoice} and the player chose ${playerChoice}!`;
  }
  if (computerScore + 0 < playerScore) {
    result = `The player wins. The computer chose ${computerChoice} the player chose ${playerChoice}!`;
  }
  if (computerChoice === playerChoice)
    result = `It's a tie! Both chose ${computerChoice}!`;

  return <div className="result"> The results are in: {result}</div>;
}

export default Results;
