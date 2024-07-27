import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();

        

        // Sort data by NRR in ascending order
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);

        setTeams(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTeamsData();
  }, []);

  return (
    <div className="container">
      <h1>IPL Points Table 2022</h1>
      <table className="points-table">
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;