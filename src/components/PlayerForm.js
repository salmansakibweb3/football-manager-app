import React, { useState } from 'react';
import playersData from '../data/players.json';  // Import local JSON data

const PlayerForm = ({ addPlayer }) => {
  const [name, setName] = useState('');
  const [positions, setPositions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && positions) {
      const newPlayer = {
        id: playersData.length + 1, // Assign unique ID
        name,
        positions: positions.split(',').map(pos => pos.trim()), // Positions as an array
      };
      addPlayer(newPlayer);
      setName('');
      setPositions('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Positions (comma separated)"
        value={positions}
        onChange={(e) => setPositions(e.target.value)}
        required
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default PlayerForm;
