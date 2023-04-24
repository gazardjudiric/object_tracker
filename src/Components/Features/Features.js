import React from "react";
import { IconesBookmarkStarFill } from "../../Assets/Icones/Icones";
import PhoneFeatures from "../../Assets/Images/phone-features.png";
import { FeaturesList } from "./data.js";
import Feature from "./Feature";

function Features(props) {
  return (
    <section id="features">
      <div className="container features-home">
        <div className="fh-iconesHome">
          <IconesBookmarkStarFill className="fh-icones" />
          <h2>Caractéristiques principales</h2>
        </div>
        <div className="feature-content">
          <div className="fc-left">
            <img src={PhoneFeatures} alt="Phone" />
          </div>
          <div className="fc-right">
            {FeaturesList.map((feature, index) => (
              <Feature
                key={"Caractérisques" + index + 1}
                propriete={{
                  icon: feature.icon,
                  title: feature.title,
                  text: feature.text,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
