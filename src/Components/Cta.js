import React, { useState, useEffect } from "react";

export default function Cta({
  setName,
  playing,
  rollDice,
  diceValue,
  holdScore,
  winner,
  winnerName,
  resetGame,
}) {
  const [modalClassName, setModalClassName] = useState("modal hidden");
  const [overlayClassName, setOverlayClassName] = useState("overlay hidden");

  useEffect(() => {
    if (winner !== null) {
      setModalClassName("modal");
      setOverlayClassName("overlay");
    } else {
      setModalClassName("modal hidden");
      setOverlayClassName("overlay hidden");
    }
  }, [winner]);

  return (
    <>
      {diceValue === null ? (
        ""
      ) : (
        <img
          src={`Dice/dice-${diceValue}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={resetGame}>
        🔄 New game
      </button>
      <button className="btn btn--setName" onClick={setName}>
        🎮 Set Name
      </button>
      <button className="btn btn--roll" onClick={rollDice} disabled={!playing}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={holdScore} disabled={!playing}>
        📥 Hold
      </button>

      <div className={modalClassName}>
        <button
          className="close-modal"
          onClick={() => {
            setModalClassName("modal hidden");
            setOverlayClassName("overlay hidden");
          }}
        >
          &times;
        </button>
        <h1 className="winner-msg">{winnerName} wins the game</h1>
      </div>
      <div className={overlayClassName}></div>
    </>
  );
}
