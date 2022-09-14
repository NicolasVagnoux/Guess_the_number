import React, { useContext, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import CurrentUserContext from '../contexts/CurrentUser';

const Home = () => {
  const [avatarId, setAvatarId] = useState<number>(1);
  const { name, setName, setAvatar } = useContext(CurrentUserContext);
  const navigate: NavigateFunction = useNavigate();

  const handleAvatarUp = () => {
    avatarId === 15 ? setAvatarId(1) : setAvatarId(avatarId + 1);
  };

  const handleAvatarDown = () => {
    avatarId === 1 ? setAvatarId(15) : setAvatarId(avatarId - 1);
  };

  const handlePlayButton = () => {
    setAvatar(`./assets/avatars/avatar${avatarId}.png`);
    navigate('/game');
  };

  return (
    <div className="home">
      <h1 className="home__title">Guess the number</h1>
      <p className="home__description">
        Bienvenue sur Guess the number, un jeu dans lequel, pour gagner, vous devez...
        deviner le nombre !
      </p>
      <div className="home__userInfo">
        <form className="home__userInfo__name">
          <label htmlFor="userName">Quel est ton nom ?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="userName"
            id="userName"
          />
        </form>
        <div className="home__userInfo__avatar">
          <p>Choisis ton avatar !</p>
          <div className="home__userInfo__avatar__imageChoice">
            <button type="button" onClick={handleAvatarDown}>
              <img src="./assets/svgarrow.svg" alt="arrow-left" />
            </button>
            <img src={`./assets/avatars/avatar${avatarId}.png`} alt="avatar" />
            <button type="button" onClick={handleAvatarUp}>
              <img src="./assets/svgarrow.svg" alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
      <button className="home__play" type="button" onClick={handlePlayButton}>
        JOUER
      </button>
    </div>
  );
};

export default Home;
