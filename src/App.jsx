import { Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment } from "./Actions/actions";

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  const handleLinkClick = (newRoute) => {
    window.location.hash = newRoute;
    setCurrentRoute(newRoute);
  };

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

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
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
      </div>
    </>
  );
}

export default App;
