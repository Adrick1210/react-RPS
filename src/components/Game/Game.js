import React from "react";
import "./Game.css";
import Score from "../Score/Score.js";
import Button from "../Button/Button.js";
import Results from "../Results/Results.js";

function Game({
  playerScore,
  setPlayerScore,
  setPlayerChoice,
  playerChoice,
  computerScore,
  setComputerScore,
  setComputerChoice,
  computerChoice,
}) {
  function handleClick(label) {
    const options = ["Lapis", "Papyrus", "Scalpellus"];
    const computerResult = options[Math.floor(Math.random() * 3)];
    setComputerChoice(computerResult);
    setPlayerChoice(label);
    if (computerResult === label) {
      console.log(
        `It's a tie! the player chose ${label} and the computer chose ${computerResult}!`
      );
    }
    // tied case and computer rock and scissors
    // todo done: label rock computer scissors, computer paper label scissors
    console.log(computerResult);
    console.log(label);
  }
  return (
    <div>
      <Score score={playerScore} label="Player Score" />
      <Score score={computerScore} label="Computer Score" />
      <Button label="Lapis" handleClick={handleClick} />
      <Button label="Papyrus" handleClick={handleClick} />
      <Button label="Scalpellus" handleClick={handleClick} />
      <Results
        playerScore={playerScore}
        playerChoice={playerChoice}
        computerScore={computerScore}
        computerChoice={computerChoice}
      />
    </div>
  );
}

export default Game;
