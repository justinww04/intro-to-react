import React, { useState } from 'react';

function Character({ data }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{data.name}</h3>
      {showHomeworld && (
        
        <p className="character-planet">Homeworld: {data.homeworld.name}</p>
      )}
      {}
    </div>
  );
}

export default Character;