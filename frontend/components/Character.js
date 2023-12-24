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
        // Apply the "character-planet" class to the planet information
        <p className="character-planet">Homeworld: {data.homeworld.name}</p>
      )}
      {/* Add other character information here */}
    </div>
  );
}

export default Character;