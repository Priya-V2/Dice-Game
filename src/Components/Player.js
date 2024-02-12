import React from "react";

export default function Player({
  player1Name,
  player2Name,
  activePlayer,
  currentScore,
  scores,
  winner,
}) {
  const players = [
    {
      className: "player player--0",
      playerName: player1Name,
      playerNum: 0,
    },
    {
      className: "player player--1",
      playerName: player2Name,
      playerNum: 1,
    },
  ];
  return (
    <>
      {players.map((player, index) => {
        const { className, playerName, playerNum } = player;

        let playerClasses = `${className} ${
          playerNum === activePlayer ? "player--active" : ""
        } ${playerNum === winner ? "player--winner" : ""}`;

        return (
          <section className={playerClasses} key={index}>
            <h2 className="name" id={`name--${playerNum}`}>
              {playerName}
            </h2>
            <p className="score" id={`score--${playerNum}`}>
              {scores[playerNum]}
            </p>
            <div className="current">
              <p className="current-label">Current</p>
              <p className="current-score" id={`current--${playerNum}`}>
                {playerNum === activePlayer ? currentScore : 0}
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
}
