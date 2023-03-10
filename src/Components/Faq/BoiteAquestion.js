import React, { useState } from "react";
import { IconesMdiMinus, IconesMdiPlus } from "../../Assets/Icones/Icones.js";

function BoiteAquestion(props) {
  const { question, answer } = props.propriete;
  const [showAnswer, setShowAnswer] = useState(false);

  function handleClick() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className="container boite-Aquestion">
      <div className="bA-question">
        <h4>{question}</h4>
        <button className="bA-question-icones" onClick={handleClick}>
          {showAnswer ? (
            <IconesMdiMinus color="red" />
          ) : (
            <IconesMdiPlus color="#1f93ff" />
          )}
        </button>
      </div>
      <div className="bA-answer">{showAnswer && <p>{answer}</p>}</div>
    </div>
  );
}

export default BoiteAquestion;
