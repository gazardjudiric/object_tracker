import React from "react";
import { IconesAnaconda } from "../Assets/Icones/Icones";
import Button from "./UI-kits/Button";

function Navbar(props) {
  return (
    <nav className="container navbar">
      <div className="nb-logo">
        <IconesAnaconda />
        <p className="nb-logo-text">
          bject<span>Tracker</span>
        </p>
      </div>
      <menu>
        <ul className="nb-links">
          <li>
            <a href="#">Accueil</a>
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
          <li>
            <Button
              propriete={{
                href: "#",
                text: "En savoir plus",
                btnclass: "nb-btn",
              }}
            />
          </li>
        </ul>
      </menu>
    </nav>
  );
}

export default Navbar;
