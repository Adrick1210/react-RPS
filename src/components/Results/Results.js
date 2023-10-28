import React from "react";
import "./Results.css";

function Results({ computerChoice, playerChoice, whoWon }) {
  let result = "The game begins...";

  if (whoWon === "computer") {
    result = `The computer wins. The computer chose ${computerChoice} and the player chose ${playerChoice}...`;
  }
  if (whoWon === "player") {
    result = `The player wins. The computer chose ${computerChoice} the player chose ${playerChoice}...`;
  }
  if (whoWon === "tie") result = `It's a tie! Both chose ${computerChoice}...`;

  return <div className="result"> The results are in: {result}</div>;
}

export default Results;
