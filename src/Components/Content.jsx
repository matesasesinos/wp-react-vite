import React from 'react';
import Home from '../Home';
import About from '../About';

function Content({ currentRoute }) {
  return (
    <div id="content">
      {currentRoute === '#home' && <Home />}
      {currentRoute === '#about' && <About />}
    </div>
  );
}

export default Content;
