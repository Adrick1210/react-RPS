import React from "react";
import "./Reset.css";

function Reset({ setPlayerScore, setComputerScore }) {
  function resetGame() {
    setComputerScore(0);
    setPlayerScore(0);
  }
  return <button onClick={resetGame}>Reset</button>;
}

export default Reset;
