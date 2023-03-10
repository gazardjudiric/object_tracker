import React from "react";
import { IconesMdiHexagonOutline } from "../../Assets/Icones/Icones";

function Feature(props) {
  const { icon, title, text } = props.propriete;
  return (
    <div className="feature">
      <div className="feature-iconeHome">
        <IconesMdiHexagonOutline className="feature-icone1" />
        <div className="feature-icone2">{icon}</div>
      </div>
      <div className="feature-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
