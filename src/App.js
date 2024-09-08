import React, { useEffect, useState } from 'react';
import MatchDaySelection from './components/MatchDaySelection';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch the players data from the public folder
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
      <h1>Soccer Management App</h1>
      {/* Render components for PlayerList and MatchDaySelection */}
      {/* Passing the players data as props */}
      {/* <PlayerList players={players} /> */}
      <MatchDaySelection players={players} />
    </div>
  );
}

export default App;
