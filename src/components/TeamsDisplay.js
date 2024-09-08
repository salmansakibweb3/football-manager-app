import React from 'react';

const TeamsDisplay = ({ teams, numTeams }) => {
  return (
    <div className="teams">
      {teams.map((team, index) => (
        <div className="team-card" key={index}>
          <h4>Team {index + 1}</h4>
          <p>Suggested Formation: {numTeams === 3 ? '3-3-2' : numTeams === 2 ? '4-4-2' : '4-5-1'}</p>
          <ul>
            {team.map((player) => (
              <li key={player.name}>
                {player.nickname} ({player.positions[0]}/{player.positions[1] || 'N/A'})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamsDisplay;
