import React from 'react';

const PlayerList = ({ players }) => {
  return (
    <div>
      <h3>Player List</h3>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            {player.name} ({player.nickname}) - Positions: {player.positions.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
