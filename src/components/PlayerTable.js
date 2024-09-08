import React from 'react';

const PlayerTable = ({ players, selectedPlayers, handlePlayerClick }) => {
  const sortedPlayers = [...players].sort((a, b) => a.nickname.localeCompare(b.nickname));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Pref Pos</th>
          <th>Alt Pos 1</th>
          <th>Alt Pos 2</th>
          <th>Alt Pos 3</th>
        </tr>
      </thead>
      <tbody>
        {sortedPlayers.map((player) => (
          <tr key={player.nickname}>
            <td>
              <button
                onClick={() => handlePlayerClick(player)}
                className={`px-4 py-2 font-bold text-white rounded ${
                  selectedPlayers.includes(player) ? 'bg-green-500' : 'bg-blue-500'
                } hover:bg-blue-700`}
              >
                {player.nickname}
              </button>
              <button className="info-button" onClick={() => alert(player.name)}>
                ℹ️
              </button>
            </td>
            <td>{player.positions[0] !== 'N/A' ? player.positions[0] : ''}</td>
            <td>{player.positions[1] !== 'N/A' ? player.positions[1] : ''}</td>
            <td>{player.positions[2] !== 'N/A' ? player.positions[2] : ''}</td>
            <td>{player.positions[3] !== 'N/A' ? player.positions[3] : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
