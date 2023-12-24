import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPeople = 'http://localhost:9009/api/people';
const urlPlanets = 'http://localhost:9009/api/planets';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets)
        ]);

       
        const combinedData = peopleResponse.data.map(character => {
          const homeworld = planetsResponse.data.find(planet => planet.id === character.homeworld);
          return {
            ...character,
            homeworld: homeworld || {}  
          };
        });

       
        setCharacters(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    
    fetchData();
  }, []); 

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characters.map(character => (
        <Character key={character.id} data={character} />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
