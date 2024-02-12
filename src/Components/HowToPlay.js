import React, { useState } from "react";

let instructions = [
  "Click the 'Roll the Dice' button to roll the dice and add the points from your roll to your current score.",
  "If you're satisfied with your roll or want to secure your points, click the 'Hold' button. This will transfer your current score to your total score, and it will be your opponent's turn.",
  "Be cautious! If you roll a 1 on the dice, your current score will reset to zero, and it will also switch to the other player's turn.",
  "Players take turns rolling the dice, accumulating points, and deciding when to hold to add them to their total scores.",
  "The first player to reach a total score of 100 or more wins the game.",
  "Click 'New Game' to restart the game",
];

export default function HowToPlay() {
  const [howToPlay, setHowToPlay] = useState("how-to-play hidden"),
    [htpOverlay, setHtpOverlay] = useState("htp-overlay hidden");

  const htpOpen = () => {
    setHowToPlay("how-to-play");
    setHtpOverlay("htp-overlay");
  };

  return (
    <>
      <button className="htp-btn" onClick={htpOpen}>
        ?
      </button>
      <div className={howToPlay}>
        <button
          className="htp-close"
          onClick={() => {
            setHowToPlay("how-to-play hidden");
            setHtpOverlay("htp-overlay hidden");
          }}
        >
          &times;
        </button>
        <h3 className="htp-head">How To Play :</h3>
        <ol>
          {instructions.map((instruction, index) => {
            return (
              <li className="htp-list-el" key={`instruction-${index}`}>
                {instruction}
              </li>
            );
          })}
        </ol>
        <h3 className="htp-head">
          Enjoy the game and may the best roller win!
        </h3>
      </div>
      <div className={htpOverlay}></div>
    </>
  );
}

// useEffect(() => {
//   if (winner !== null) {
//     setHowToPlay("how-to-play");
//     setHtpOverlay("htp-overlay");
//   } else {
//     setHowToPlay("how-to-play hidden");
//     setHtpOverlay("htp-overlay hidden");
//   }
// }, [winner]);
