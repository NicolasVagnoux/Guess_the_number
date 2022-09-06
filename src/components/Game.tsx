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
          <p className="game__core__userAction__hint">C&apos;est plus !</p>
          <div className="game__core__userAction__numberGrid">
            <div className="game__core__userAction__numberGrid__input">in</div>
            <div className="game__core__userAction__numberGrid__delete">x</div>
            <div className="game__core__userAction__numberGrid__number1">
              <img src="./assets/numbers/one.png" alt="one" />
            </div>
            <div className="game__core__userAction__numberGrid__number2">
              <img src="./assets/numbers/two.png" alt="two" />
            </div>
            <div className="game__core__userAction__numberGrid__number3">
              <img src="./assets/numbers/three.png" alt="three" />
            </div>
            <div className="game__core__userAction__numberGrid__number4">
              <img src="./assets/numbers/four.png" alt="four" />
            </div>
            <div className="game__core__userAction__numberGrid__number5">
              <img src="./assets/numbers/five.png" alt="five" />
            </div>
            <div className="game__core__userAction__numberGrid__number6">
              <img src="./assets/numbers/six.png" alt="six" />
            </div>
            <div className="game__core__userAction__numberGrid__number7">
              <img src="./assets/numbers/seven.png" alt="seven" />
            </div>
            <div className="game__core__userAction__numberGrid__number8">
              <img src="./assets/numbers/eight.png" alt="eight" />
            </div>
            <div className="game__core__userAction__numberGrid__number9">
              <img src="./assets/numbers/nine.png" alt="nine" />
            </div>
            <div className="game__core__userAction__numberGrid__number0">
              <img src="./assets/numbers/zero.png" alt="zero" />
            </div>
            <div className="game__core__userAction__numberGrid__validate">Valider</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
