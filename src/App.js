import React, { useState } from "react";
import Player from "./Components/Player";
import Cta from "./Components/Cta";
import HowToPlay from "./Components/HowToPlay";

function App() {
  // Define state variables
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [playing, setPlaying] = useState(true);
  const [activePlayer, setActivePlayer] = useState(0);
  const [diceValue, setDiceValue] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [winner, setWinner] = useState(null);
  const [winnerName, setWinnerName] = useState("");

  // Set Player Name
  let setName = () => {
    console.log("clicked");
    setPlayer1Name(prompt("Player1"));
    setPlayer2Name(prompt("Player2"));
  };

  // Event handler for rolling the dice
  const rollDice = () => {
    if (playing) {
      let value = Math.trunc(Math.random() * 6) + 1;
      setDiceValue(value);
      if (value !== 1) {
        setCurrentScore((prevScore) => prevScore + value);
      } else {
        switchPlayer();
      }
    }
  };

  // Event handler for holding the current score
  const holdScore = () => {
    if (playing) {
      const newScores = [...scores];
      newScores[activePlayer] += currentScore;
      setScores(newScores);
      setCurrentScore(0);
      console.log("holdScore Clicked");
      console.log(activePlayer, currentScore, scores, playing, winner);

      // Check if active player reaches winning score
      if (newScores[activePlayer] >= 100) {
        setPlaying(false);
        setWinner(activePlayer);
        let playersName = [player1Name, player2Name];
        setWinnerName(playersName[activePlayer]);
      } else {
        switchPlayer();
      }
    }
  };

  // Function to switch active player
  const switchPlayer = () => {
    setCurrentScore(0);
    setActivePlayer((prevPlayer) => (prevPlayer === 0 ? 1 : 0));
  };

  // Function to start a new game
  const resetGame = () => {
    setPlaying(true);
    setActivePlayer(0);
    setDiceValue(null);
    setCurrentScore(0);
    setScores([0, 0]);
    setWinner(null);
  };

  return (
    <main>
      <Player
        player1Name={player1Name}
        player2Name={player2Name}
        activePlayer={activePlayer}
        currentScore={currentScore}
        scores={scores}
        winner={winner}
      />
      <Cta
        setName={setName}
        playing={playing}
        rollDice={rollDice}
        diceValue={diceValue}
        holdScore={holdScore}
        winner={winner}
        winnerName={winnerName}
        resetGame={resetGame}
      />
      <HowToPlay />
    </main>
  );
}

export default App;
