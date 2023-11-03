import { Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  const handleLinkClick = (newRoute) => {
    window.location.hash = newRoute;
    setCurrentRoute(newRoute);
  };

  return (
    <>
      <h1>Hola Router</h1>
      <div id="menu">
        <Link to="#home" onClick={() => handleLinkClick("#home")}>
          Home
        </Link>
        <br />
        <Link to="#about" onClick={() => handleLinkClick("#about")}>
          Sobre nosotros
        </Link>
      </div>
      <div id="content">
        {currentRoute === "#home" && <Home />}
        {currentRoute === "#about" && <About />}
      </div>
    </>
  );
}

export default App;
