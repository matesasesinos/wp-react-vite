import React from 'react';
import Home from '../Home';
import About from '../About';

interface ContentProps {
  currentRoute: string;
}

function Content({ currentRoute } : ContentProps ) {
  return (
    <div id="content">
      {currentRoute === '#home' && <Home />}
      {currentRoute === '#about' && <About />}
    </div>
  );
}

export default Content;
