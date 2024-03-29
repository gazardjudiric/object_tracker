import React from "react";
import { IconesMdiMapMarkerRadius } from "../Assets/Icones/Icones.js";
import { IconesAnaconda } from "../Assets/Icones/Icones";

function Footer(props) {
  return (
    <section id="footer">
      <div className="container footer-home">
        <div className="footer-home-content">
          <div className="footer-box">
            <h4>Lien Utile</h4>
            <ul className="footer-links">
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
                <a href="#faq">En savoir plus</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Support</h4>
            <ul className="footer-links">
              <li>
                <a href="">Soutien</a>
              </li>
              <li>
                <a href="">A propos</a>
              </li>
              <li>
                <a href="">Apprendre</a>
              </li>
              <li>
                <a href="">Associé</a>
              </li>
              <li>
                <a href="">Messageries</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4>contactez nous</h4>
            <ul className="footer-contact">
              <li>
                <p>
                  <IconesMdiMapMarkerRadius className="footer-contact-icones" />
                  &nbsp; Address: Cotonou
                </p>
              </li>
              <li>
                <p>
                  <IconesMdiMapMarkerRadius className="footer-contact-icones" />
                  &nbsp; Phone: +229 61-17-72-15.
                </p>
              </li>
              <li>
                <p>
                  <IconesMdiMapMarkerRadius className="footer-contact-icones" />
                  &nbsp; Fax: +229 61-17-72-15.
                </p>
              </li>
              <li>
                <p>
                  <IconesMdiMapMarkerRadius className="footer-contact-icones" />
                  &nbsp; Email: gazardjudiric@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <IconesMdiMapMarkerRadius className="footer-contact-icones" />
                  &nbsp; Website: objettracker.netlify.app
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <div className="footer-logo">
              <IconesAnaconda />
              <p className="nb-logo-text">
                bjet<span>Tracker</span>
              </p>
            </div>
          </div>
        </div>
        <p>&copy; Copyright 2023. objettracker.netlify.app</p>
      </div>
    </section>
  );
}

export default Footer;
