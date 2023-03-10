import React from "react";

function Button(props) {
  const { text, btnclass, href } = props.propriete;
  return (
    <a href={href} className={`btn ${btnclass}`}>
      {text}
    </a>
  );
}

export default Button;
