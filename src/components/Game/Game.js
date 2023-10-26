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
      setComputerScore(computerScore + 0);
      setPlayerScore(playerScore + 0);
    }
    if (computerResult === options[0] && label === options[2]) {
      setComputerScore(computerScore + 1);
    }
    if (computerResult === options[0] && label === options[1]) {
      setPlayerScore(playerScore + 1);
    }
    if (computerResult === options[1] && label === options[0]) {
      setComputerScore(computerScore + 1);
    }
    if (computerResult === options[1] && label === options[2]) {
      setPlayerScore(playerScore + 1);
    }
    if (computerResult === options[2] && label === options[1]) {
      setComputerScore(computerScore + 1);
    }
    if (computerResult === options[2] && label === options[0]) {
      setPlayerScore(playerScore + 1);
    }
    // tied case and computer rock and scissors
    // todo done: label rock computer scissors, computer paper label scissors
    console.log(computerResult);
    console.log(label);
    console.log(computerScore);
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
