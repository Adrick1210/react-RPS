import React from "react";
import "./Reset.css";

function Reset({ setPlayerScore, setComputerScore, setPlayerChoice, setComputerChoice, setWhoWon }) {
  function resetGame() {
    setComputerScore(0);
    setPlayerScore(0);
    setComputerChoice("");
    setPlayerChoice("");
    setWhoWon("")
  }
  return <button onClick={resetGame}>Reset</button>;
}

export default Reset;
