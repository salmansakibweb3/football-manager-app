import React from 'react';

const PlayerTable = ({ players, selectedPlayers, handlePlayerClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nickname</th>
          <th>Main Position</th>
          <th>Alt Pos 1</th>
          <th>Alt Pos 2</th>
          <th>Alt Pos 3</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.nickname}>
            <td>
              <button
                onClick={() => handlePlayerClick(player)}
                className={`px-4 py-2 font-bold text-white rounded ${selectedPlayers.includes(player) ? 'bg-green-500' : 'bg-blue-500'} hover:bg-blue-700`}
              >
                {player.nickname}
              </button>
              <button className="info-button" onClick={() => alert(player.name)}>
                ℹ️
              </button>
            </td>
            <td>{player.positions[0] || 'N/A'}</td>
            <td>{player.positions[1] || 'N/A'}</td>
            <td>{player.positions[2] || 'N/A'}</td>
            <td>{player.positions[3] || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
