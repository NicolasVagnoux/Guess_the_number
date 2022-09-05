import React, { useContext } from 'react';

import CurrentUserContext from '../contexts/CurrentUser';

const Game = () => {
  const { name, avatar } = useContext(CurrentUserContext);
  const randomNumber: number = Math.floor(Math.random() * 100) + 1;
  const tries: Array<Array<number | string>> = [
    [50, "C'est plus !"],
    [80, "C'est moins !"],
    [3, "C'est plus !"],
  ];

  return (
    <div className="game">
      <div className="game__intro">
        <img src={avatar} alt="avatar" />
        <p>
          Bienvenue <span>{name}</span> ! <br /> Pour gagner, tu dois deviner quel est le
          nombre secret (compris entre 0 et 100) ! C&apos;est parti ! {randomNumber}
        </p>
      </div>
      <div className="game__core">
        <div className="game__core__tries">
          <p className="game__core__tries__title">Essais</p>
          <p className="game__core__tries__tableHeader">
            <span>Numéro</span>
            <span>Nombre séléctionné</span>
            <span>Résultat</span>
          </p>
          <ul className="game__core__tries__tableList">
            {tries &&
              tries.map((oneTry, index) => (
                <li key={index}>
                  <span>{index + 1}</span>
                  <span>{oneTry[0]}</span>
                  <span>{oneTry[1]}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="game__core__userAction">
          <p className="game__core__userAction__hint">C&aps;est plus !</p>
          <div className="game__core__userAction__numberGrid">
            <div className="game__core__userAction__numberGrid__input">in</div>
            <div className="game__core__userAction__numberGrid__delete">x</div>
            <div className="game__core__userAction__numberGrid__number1">1</div>
            <div className="game__core__userAction__numberGrid__number2">2</div>
            <div className="game__core__userAction__numberGrid__number3">3</div>
            <div className="game__core__userAction__numberGrid__number4">4</div>
            <div className="game__core__userAction__numberGrid__number5">5</div>
            <div className="game__core__userAction__numberGrid__number6">6</div>
            <div className="game__core__userAction__numberGrid__number7">7</div>
            <div className="game__core__userAction__numberGrid__number8">8</div>
            <div className="game__core__userAction__numberGrid__number9">9</div>
            <div className="game__core__userAction__numberGrid__number0">0</div>
            <div className="game__core__userAction__numberGrid__validate">V</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
