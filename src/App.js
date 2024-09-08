import React, { useEffect, useState } from 'react';
import MatchDaySelection from './components/MatchDaySelection';
import './App.css';  // Make sure you're importing the CSS

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/players.json')
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      })
      .catch((error) => {
        console.error('Error fetching the player data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="title">Soccer Management App</h1>
      <MatchDaySelection players={players} />
    </div>
  );
}

export default App;
