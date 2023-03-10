import "./Assets/Css/default.css";
import "./Assets/Css/app.css";
import "./Assets/Css/navbar.css";
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

function App() {
  return (
    <div className="App">
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Download />
      <Subscribes />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
