import { useEffect, useState } from "react";
import axios from "axios";
import "./Assets/Css/default.css";
import "./Assets/Css/app.css";
import "./Assets/Css/navbar.css";
import "./Assets/Css/modePerdu.css";
import "./Assets/Css/button.css";
import "./Assets/Css/header.css";
import "./Assets/Css/features.css";
import "./Assets/Css/feature.css";
import "./Assets/Css/download.css";
import "./Assets/Css/subscribe.css";
import "./Assets/Css/boiteAquestion.css";
import "./Assets/Css/faq.css";
import "./Assets/Css/footer.css";
import Navbar from "./Components/Navbar.js";
import Header from "./Components/Header.js";
import Features from "./Components/Features/Features.js";
import Download from "./Components/Download.js";
import Subscribes from "./Components/Subscribes.js";
import Faq from "./Components/Faq/Faq.js";
import Footer from "./Components/Footer.js";
import ModePerdu from "./Components/mode_perdu/ModePerdu";

function App() {
  const [visibility, setVisibility] = useState();
  // const [etatModePerdu, setEtatModePerdu] = useState(res.);
  // http://api.gildasfinagnon.com/gettrackermode.php
  // http://192.168.160.209/Objetracker/rest_api/gettrackermode.php?tracker_adress=E0:98:06:92:07:A8

  useEffect(() => {
    axios.get("http://api.gildasfinagnon.com/gettrackermode.php?tracker_adress=E0:98:06:92:07:A8")
      .then((res) => {
        let dataApi = res.data;
        setVisibility(dataApi[0].mode_perdu);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="header-bg">
        <Navbar />
        <Header />
        {/* <div>{dataApi}</div> */}
      </header>
      {visibility === true ? (
        <ModePerdu />
      ) : (
        <div></div>
      )}
      <Features />
      <Download />
      <Subscribes />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
