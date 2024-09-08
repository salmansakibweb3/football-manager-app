import React, { useState } from 'react';

const MatchDaySelection = ({ players }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [numTeams, setNumTeams] = useState(3); // Default to 3 teams

  // Handle player selection for matchday
  const handleSelection = (player) => {
    if (!selectedPlayers.includes(player)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  // Divide players into the selected number of teams
  const createTeams = () => {
    if (selectedPlayers.length === 0) return;

    // Shuffle the selected players randomly
    const shuffledPlayers = [...selectedPlayers].sort(() => 0.5 - Math.random());

    // Create an empty array for the teams
    const tempTeams = Array.from({ length: numTeams }, () => []);

    // Distribute players across the teams evenly
    shuffledPlayers.forEach((player, index) => {
      const teamIndex = index % numTeams;
      tempTeams[teamIndex].push(player);
    });

    setTeams(tempTeams);
  };

  return (
    <div>
      <h3>Select Players for Match Day</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Main Pos</th>
            <th>Alt Pos 1</th>
            <th>Alt Pos 2</th>
            <th>Alt Pos 3</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.name}>
              <td>
                <button onClick={() => handleSelection(player)}>
                  {player.name} ({player.nickname})
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

      <h3>Selected Players ({selectedPlayers.length})</h3>
      <ul>
        {selectedPlayers.map((player) => (
          <li key={player.name}>{player.name}</li>
        ))}
      </ul>

      {selectedPlayers.length > 0 && (
        <>
          <div>
            <label>Number of Teams: </label>
            <select value={numTeams} onChange={(e) => setNumTeams(parseInt(e.target.value))}>
              <option value={1}>1 Team</option>
              <option value={2}>2 Teams</option>
              <option value={3}>3 Teams</option>
            </select>
          </div>

          <button onClick={createTeams}>Create Teams</button>
        </>
      )}

      {teams.length > 0 && (
        <div>
          <h3>Teams</h3>
          {teams.map((team, index) => (
            <div key={index}>
              <h4>Team {index + 1}</h4>
              <ul>
                {team.map((player) => (
                  <li key={player.name}>{player.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchDaySelection;
