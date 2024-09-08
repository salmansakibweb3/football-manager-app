import React, { useState } from 'react';
import PlayerTable from './PlayerTable';
import TeamsDisplay from './TeamsDisplay';

const MatchDaySelection = ({ players }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [numTeams, setNumTeams] = useState(2); // Default to 2 teams

  const handlePlayerClick = (player) => {
    const scrollPos = window.scrollY;

    if (selectedPlayers.includes(player)) {
      setSelectedPlayers(selectedPlayers.filter(p => p !== player));
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
    }

    window.scrollTo(0, scrollPos);
  };

  const createTeams = () => {
    if (selectedPlayers.length === 0) return;

    const shuffledPlayers = [...selectedPlayers].sort(() => 0.5 - Math.random());

    const tempTeams = Array.from({ length: numTeams }, () => []);

    shuffledPlayers.forEach((player, index) => {
      const teamIndex = index % numTeams;
      tempTeams[teamIndex].push(player);
    });

    setTeams(tempTeams);
  };

  return (
    <div className="matchday-container">
      <h3 className="section-heading">Select Players for Match Day</h3>

      <div className="table-wrapper">
        <PlayerTable players={players} selectedPlayers={selectedPlayers} handlePlayerClick={handlePlayerClick} />
      </div>

      <h3 className="section-heading">Selected Players ({selectedPlayers.length})</h3>
      <ul className="space-grotesk">
        {selectedPlayers.map((player) => (
          <li key={player.name}>{player.name}</li>
        ))}
      </ul>

      {selectedPlayers.length > 0 && (
        <>
          <div className="py-4">
            <label className="paragraph-heading space-grotesk">Number of Teams: </label>
            <select value={numTeams} onChange={(e) => setNumTeams(parseInt(e.target.value))}>
              <option value={1}>1 Team</option>
              <option value={2}>2 Teams</option>
              {selectedPlayers.length >= 19 && <option value={3}>3 Teams</option>}
            </select>
          </div>

          <button className="py-2 mt-2 mb-4 rounded text-black" onClick={createTeams}>Create Teams</button>
        </>
      )}

      {teams.length > 0 && <TeamsDisplay teams={teams} numTeams={numTeams} />}
    </div>
  );
};

export default MatchDaySelection;
