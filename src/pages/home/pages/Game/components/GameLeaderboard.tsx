import React, {useEffect, useState} from 'react';
import styles from './GameLeaderboard.module.css';

import {LeaderboardData, useGameContext} from 'pages/home/context/GameCtx';

const GameLeaderboard = () => {
  const {state} = useGameContext();
  const [leaderboard, setLeaderboard] = useState<LeaderboardData[]>([]);

  useEffect(() => {
    const leaderboardData = localStorage.getItem('leaderboard');
    if (leaderboardData)
      setLeaderboard(
        JSON.parse(leaderboardData)
          .sort((a: LeaderboardData, b: LeaderboardData) => b.points - a.points)
          .slice(0, 7),
      );
  }, [state.isOver]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Leaderboard</h3>
      <ul>
        {leaderboard.map((data, idx) => {
          return (
            <li key={idx}>
              {idx + 1}. {data.playerName}: {data.points}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GameLeaderboard;
