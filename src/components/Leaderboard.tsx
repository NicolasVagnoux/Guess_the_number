import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import CurrentUserContext from '../contexts/CurrentUser';
import ILeaderboard from '../interfaces/ILeaderboard';

const Leaderboard = () => {
  const [leaderboardList, setLeaderboardList] = useState<ILeaderboard[]>([]);
  const { setName, setAvatar } = useContext(CurrentUserContext);

  //Function to get leaderboard from database
  useEffect(() => {
    const getLeaderboard = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/leaderboard`);
      setLeaderboardList(data);
    };
    getLeaderboard();
  }, []);

  //Navigation function
  const navigate: NavigateFunction = useNavigate();

  //Function to handle replay button
  const handleReplayButton = () => {
    setName('');
    setAvatar('');
    navigate('/');
  };

  return (
    <div className="leaderboard">
      <h1 className="leaderboard__title">Tableau des scores</h1>
      <ul className="leaderboard__list">
        <li className="leaderboard__list__header">
          <p>Nombre d&apos;essais</p>
        </li>
        {leaderboardList &&
          leaderboardList.map((listItem, i) => (
            <li className="leaderboard__list__item" key={i}>
              <p>{i + 1}</p>
              <div className="leaderboard__list__item__score">
                <img src={listItem.avatar} alt="avatar" />
                <p>{listItem.username}</p>
                <p>{listItem.score >= 10 ? listItem.score : '0' + listItem.score}</p>
              </div>
            </li>
          ))}
      </ul>
      <button
        className="leaderboard__playAgain"
        onClick={handleReplayButton}
        type="button">
        Rejouer
      </button>
    </div>
  );
};

export default Leaderboard;
