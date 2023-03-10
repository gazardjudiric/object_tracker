import React from "react";
import { IconesMdiOutline } from "../../Assets/Icones/Icones";
import BoiteAquestion from "./BoiteAquestion";
import { Foirequestion } from "./data.js";

function Faq(props) {
  return (
    <section id="faq">
      <div className="container faq-home">
        <div className="faq-home-header">
          <IconesMdiOutline />
          <h2>FAQs</h2>
        </div>
      </div>
      <div className="faq-home-body">
        {Foirequestion.map((el, index) => (
          <BoiteAquestion
            key={"Question numéro " + index + 1}
            propriete={{ question: el.question, answer: el.answer }}
          />
        ))}
      </div>
    </section>
  );
}

export default Faq;
