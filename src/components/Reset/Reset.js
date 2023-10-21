import React from "react";
import "./Reset.css";

function Reset({ setPlayerScore, setComputerScore, setPlayerChoice, setComputerChoice }) {
  function resetGame() {
    setComputerScore(0);
    setPlayerScore(0);
    setComputerChoice("");
    setPlayerChoice("");
  }
  return <button onClick={resetGame}>Reset</button>;
}

export default Reset;
