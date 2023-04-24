import React, { useState } from "react";
import { IconesAnaconda, IconesMdiMinus, IconesMdiPlus } from "../Assets/Icones/Icones";
import Button from "./UI-kits/Button";

function Navbar(props) {

  const [showMenu, setShowMenu] = useState(false)

  function HandleChangeMenuIcones() {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="container navbar">
      <div className="nb-logo">
        <IconesAnaconda />
        <p className="nb-logo-text">
          bject<span>Tracker</span>
        </p>
      </div>
      <menu>
        <ul className="nb-links"
          id={showMenu ? "showResponsiveMenu" : "hideResponsiveMenu"}
        >
          <li>
            <a href="#/">Accueil</a>
          </li>
          <li>
            <a href="#features">Catégories</a>
          </li>
          <li>
            <a href="#download">Télécharger</a>
          </li>
          <li>
            <a href="#subscribe">Souscription</a>
          </li>
          <li className="btn_enSavoirPlus">
            <Button
              propriete={{
                href: "#faq",
                text: "En savoir plus",
                btnClass: "nb-btn",
              }}
            />
          </li>
        </ul>
      </menu>
      <div className="menu-icones" onClick={HandleChangeMenuIcones}>
        {showMenu ? (
          <IconesMdiMinus color="#fff" />
        ) : (
          <IconesMdiPlus color="#fff" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
