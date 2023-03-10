import React from "react";
import Button from "./UI-kits/Button";
import phoneHeader from "../Assets/Images/locaaa.png";
import { IconesMouseAlt2 } from "../Assets/Icones/Icones";

function Header(props) {
  return (
    <section className="header">
      <div className="container header-home">
        <div className="header-left">
          <h1>
            <span>Le monde en developpement</span>
            <span> Object tracker : Avoir vos</span>
            <span> accessoir au bout des doigts</span>
          </h1>
          <p>
            ObjetTracker is a Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Obcaecati ea aliquam sit nemo nisi! Nesciunt quis
            illum id qui et!
          </p>
          <div>
            <Button
              propriete={{ href: "#", text: "Técléchager", btnclass: "h-btn" }}
            />
          </div>
        </div>
        <div className="header-right">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="header-floatingIcon">
        <a href="#">
          <IconesMouseAlt2 className="mouse" />
        </a>
      </div>
    </section>
  );
}

export default Header;
