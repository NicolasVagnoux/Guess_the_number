import React, { useContext } from 'react';

import CurrentUserContext from '../contexts/CurrentUser';

const Game = () => {
  const { name, avatar } = useContext(CurrentUserContext);

  return (
    <div className="game">
      <p>Hello {name}</p>
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default Game;
