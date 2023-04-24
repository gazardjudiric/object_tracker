import React from "react";
import Button from "./UI-kits/Button";
import phoneHeader from "../Assets/Images/locaaa.png";
import { IconesMouseAlt2 } from "../Assets/Icones/Icones";

function Header(props) {
  return (
    <section className="header">
      <div className="header_header">
        <div className="container header-home">
          <div className="header-left">
            <h1>
              <span>Le monde en developpement</span>
              <span> Object tracker : Avoir vos accessoir au bout des doigts</span>
            </h1>
            <p>
              Object Tracker, est un dispositif électronique doté d’un module GPS et d’un biper intégrer reliés à une application mobile et permettant de retrouver les objets perdus ou des affaires sur lesquelles ils ont été préalablement accrochés.
            </p>
            <div>
              <Button
                propriete={{ href: "#", text: "Técléchager", btnClass: "nb-btn" }}
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
      </div>
    </section>
  );
}

export default Header;
