import React from 'react';
import phoneModePerdu from "../../Assets/Images/phone-header-bg.png"
import Button from '../UI-kits/Button';

function ModePerdu(props) {
    return (
        <section className="modePerduSection" id="modePerdu">
            <div className="container modePerduhome">
                <div className="modePerduhome-left">
                    <img src={phoneModePerdu} alt="phone" />
                </div>
                <div className="modePerduhome-right">
                    <h1>
                        Mode perdu activé
                    </h1>
                    <p>
                        Cet objet a été égarré. Veillez appellez le <span className="modeperdu"> 61177215 </span> pour la restitution de ce objet. Merci bien !
                    </p>
                    <div className="modePerduhome-right_btn">
                        <Button propriete={{
                            text: "Appelez le numéro",
                            btnClass: "nb-btn",
                            href: "#"
                        }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ModePerdu;