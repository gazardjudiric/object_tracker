import React from "react";
import {
  IconesMdiInstagram,
  IconesMdiTwitter,
  IconesTypcnSocialGooglePlus,
  IconesUilFacebookF,
} from "../Assets/Icones/Icones";

function Suscribes(props) {
  return (
    <section id="subscribe">
      <div className="container subscribe-home">
        <h2>S'abonner maintenant!</h2>
        <form>
          <div className="form-control">
            <input type="email" placeholder="Entrez votre mail..." />
            <button>S'abonner</button>
          </div>
        </form>

        <div className="sh-icones">
          <div className="sh-icone">
            <IconesTypcnSocialGooglePlus />
          </div>
          <div className="sh-icone">
            <IconesUilFacebookF />
          </div>
          <div className="sh-icone">
            <IconesMdiTwitter />
          </div>
          <div className="sh-icone">
            <IconesMdiInstagram />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Suscribes;
