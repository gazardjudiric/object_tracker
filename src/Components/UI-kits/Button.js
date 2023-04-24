import React from "react";

function Button(props) {
  const { text, btnClass, href } = props.propriete;
  return (
    <a href={href} className={`btn ${btnClass}`}>
      {text}
    </a>
  );
}

export default Button;
