import React from "react";
import { IconesFluentMdl2AndroidLogo } from "../Assets/Icones/Icones.js";

function Download(props) {
  return (
    <section id="download">
      <div className="container download-content">
        <h2>Télécharger ObjetTracker</h2>
        <p>Notre application est téléchageable sur google play store</p>
        <div className="dc-homicon">
          <IconesFluentMdl2AndroidLogo />
          <p>Android</p>
        </div>
      </div>
    </section>
  );
}

export default Download;
