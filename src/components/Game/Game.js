import React from "react";
import "./Game.css";
import Score from "../Score/Score.js";
import Button from "../Button/Button.js";
import Results from "../Results/Results.js";

function Game({
  playerScore,
  setPlayerScore,
  computerScore,
  setComputerScore,
}) {
  
  function handleClick(label) {
    const options = ["Rock", "Paper", "Scissors"];
    const computerResult = options[Math.floor(Math.random() * 3)];
    if (computerResult === label) {
      alert(
        "It's a tie! The computer chose " +
          computerResult +
          " and the player chose " +
          label +
          "!"
      );
    }
    if (computerResult === options[0] && label === options[2]) {
      setComputerScore(computerScore + 1);
    }
    // tied case and computer rock and scissors
    // todo: label rock computer scissors, computer paper label scissors
    console.log(computerResult);
  }
  return (
    <div>
      <Score score={playerScore} label="Player Score" />
      <Score score={computerScore} label="Computer Score" />
      <Button label="Rock" handleClick={handleClick} />
      <Button label="Paper" handleClick={handleClick} />
      <Button label="Scissors" handleClick={handleClick} />
      <Results playerScore={playerScore} computerScore={computerScore} />
    </div>
  );
}

export default Game;
