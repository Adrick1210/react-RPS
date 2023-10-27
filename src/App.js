import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Game from "./components/Game/Game.js";
import Reset from "./components/Reset/Reset.js";

function App() {
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [whoWon, setWhoWon] = useState("");
  
  return (
    <div className="App">
      <Header />
      <Game
        setComputerScore={setComputerScore}
        setComputerChoice={setComputerChoice}
        setPlayerScore={setPlayerScore}
        setPlayerChoice={setPlayerChoice}
        computerChoice={computerChoice}
        computerScore={computerScore}
        playerChoice={playerChoice}
        playerScore={playerScore}
        setWhoWon={setWhoWon}
        whoWon={whoWon}
      />
      <Reset
        setComputerScore={setComputerScore}
        setComputerChoice={setComputerChoice}
        setPlayerScore={setPlayerScore}
        setPlayerChoice={setPlayerChoice}
        setWhoWon={setWhoWon}
        whoWon={whoWon}
      />
    </div>
  );
}

export default App;

//todos:
// 1. Finish if conditionals for the handleClick function and set correct scores depending on who won
// 2. In reset component, add setPlayerChoice/setComputerChoice to props object and set them to default "" value in onclick handler
// 3. in Game component, at the top of the handle click component (after math.random) use setPlayerChoice(label) and setComputerChoice(computerResult)
// 4. Accept setPlayerChoice and setComputerChoice and computerChoice and playerChoice as props in the Game curly brackets in the main game function
// 5. pass playerChoice and computerChoice into Results component as props and accept them in the Results component as props in the curly brackets of the main Results function
// 6. in the results component use the playerChoice and computerChoice props to create a variable that sets the correct result test that you want such as `computer is winning, computer chose ${computerChoice} player choice ${playerChoice}`
// 7. update CSS/header text/images to style how you want
