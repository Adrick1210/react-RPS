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
  setWhoWon,
  whoWon,
}) {
  function handleClick(label) {
    const options = ["Lapis", "Papyrus", "Scalpellus"];
    const computerResult = options[Math.floor(Math.random() * 3)];
    setComputerChoice(computerResult);
    setPlayerChoice(label);
    if (computerResult === label) {
      setComputerScore((computerScore) => computerScore + 0);
      setPlayerScore((playerScore) => playerScore + 0);
      setWhoWon("tie");
    }
    if (computerResult === options[0] && label === options[2]) {
      setComputerScore((computerScore) => computerScore + 1);
      setWhoWon("computer");
    }
    if (computerResult === options[0] && label === options[1]) {
      setPlayerScore((playerScore) => playerScore + 1);
      setWhoWon("player");
    }
    if (computerResult === options[1] && label === options[0]) {
      setComputerScore((computerScore) => computerScore + 1);
      setWhoWon("computer");
    }
    if (computerResult === options[1] && label === options[2]) {
      setPlayerScore((playerScore) => playerScore + 1);
      setWhoWon("player");
    }
    if (computerResult === options[2] && label === options[1]) {
      setComputerScore((computerScore) => computerScore + 1);
      setWhoWon("computer");
    }
    if (computerResult === options[2] && label === options[0]) {
      setPlayerScore((playerScore) => playerScore + 1);
      setWhoWon("player");
    }
    // tied case and computer rock and scissors
    // todo done: label rock computer scissors, computer paper label scissors
  }
  return (
    <div className="game">
      <div id="scores">
        <Score score={playerScore} label="Player Score" />
        <Score score={computerScore} label="Computer Score" />
      </div>
      <div id="inputs">
        <Button label="Lapis" handleClick={handleClick} />
        <Button label="Papyrus" handleClick={handleClick} />
        <Button label="Scalpellus" handleClick={handleClick} />
      </div>
      <div id="results">
      <Results
        playerScore={playerScore}
        playerChoice={playerChoice}
        computerScore={computerScore}
        computerChoice={computerChoice}
        whoWon={whoWon}
      />
      </div>
    </div>
  );
}

export default Game;
