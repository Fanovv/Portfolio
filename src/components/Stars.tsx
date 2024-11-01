import React from 'react';
import './Stars.css';

const Starfield: React.FC = () => {
  return (
    <div className="h-full overflow-hidden relative">
      <div id="stars" className="absolute inset-0"></div>
      <div id="stars2" className="absolute inset-0"></div>
      <div id="stars3" className="absolute inset-0"></div>
    </div>
  );
};

export default Starfield;
