/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import CurrentUserContext from '../contexts/CurrentUser';
import ILeaderboard from '../interfaces/ILeaderboard';

const Game = () => {
  //Gets user info from the context
  const { name, avatar } = useContext(CurrentUserContext);

  //Defines a new random number at each page loading
  const [randomNumber, setRandomNumber] = useState<number>(0);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  //Array containing the differents tries + count of the number of tries
  const [tries, setTries] = useState<Array<Array<number | string>>>([]);
  const [nbTries, setNbTries] = useState<number>(1);

  //Number chosen by the user (string)
  const [userNumberStr, setUserNumberStr] = useState<string>('');

  //Hint
  const [hint, setHint] = useState<string>('-');

  //State activated when you win
  const [victory, setVictory] = useState<boolean>(false);

  //State to handle the status of the POST query
  const [status, setStatus] = useState<string>('');

  //Auto scrolling to the bottom of the tries list
  const bottomRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [nbTries]);

  //Auto scrolling to the top on page loading
  const topRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView();
  }, []);

  //Function to handle input validation
  const handleValidation = () => {
    const userNumber = Number(userNumberStr);
    setNbTries(nbTries + 1);
    if (userNumber < randomNumber) {
      setHint("C'est plus !");
      tries.push([nbTries, userNumber, "C'est plus !"]);
    }
    if (userNumber > randomNumber) {
      setHint("C'est moins !");
      tries.push([nbTries, userNumber, "C'est moins !"]);
    }
    if (userNumber === randomNumber) {
      setHint(`Bravo, le nombre secret était ${randomNumber} !`);
      tries.push([nbTries, userNumber, 'Bravo !']);
      setVictory(true);
    }
    setUserNumberStr('');
  };

  //Navigation function
  const navigate: NavigateFunction = useNavigate();

  //Function to handle score recording and navigation to leaderboard
  const handleScoreRecording = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus('Pending');
    try {
      await axios.post<ILeaderboard>(
        `${import.meta.env.VITE_API_URL}/api/leaderboard`,
        {
          username: name,
          avatar: avatar,
          score: nbTries - 1,
        },
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        },
      );
      setStatus('OK');
      navigate('/leaderboard');
    } catch (err) {
      console.error(err);
      setStatus('Error');
    }
  };

  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <div className="game">
      <div ref={topRef} />
      <div className="game__intro">
        <img src={avatar} alt="avatar" />
        <p>
          Bienvenue <span>{name}</span> ! <br /> Pour gagner, tu dois deviner quel est le
          nombre secret (compris entre 0 et 100) ! C&apos;est parti !
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
                  <span>{oneTry[0]}</span>
                  <span>{oneTry[1]}</span>
                  <span>{oneTry[2]}</span>
                </li>
              ))}
            <div ref={bottomRef} />
          </ul>
        </div>
        <div className="game__core__userAction">
          <p className="game__core__userAction__hint">{hint}</p>
          <div className="game__core__userAction__numberGrid">
            <div className="game__core__userAction__numberGrid__input">
              {userNumberStr && userNumberStr}
              {!victory && <span>|</span>}
            </div>
            <button
              onClick={() => setUserNumberStr('')}
              type="button"
              className="game__core__userAction__numberGrid__delete">
              <img src="./assets/numbers/delete.png" alt="delete" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '1')}
              type="button"
              className="game__core__userAction__numberGrid__number1">
              <img src="./assets/numbers/one.png" alt="one" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '2')}
              type="button"
              className="game__core__userAction__numberGrid__number2">
              <img src="./assets/numbers/two.png" alt="two" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '3')}
              type="button"
              className="game__core__userAction__numberGrid__number3">
              <img src="./assets/numbers/three.png" alt="three" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '4')}
              type="button"
              className="game__core__userAction__numberGrid__number4">
              <img src="./assets/numbers/four.png" alt="four" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '5')}
              type="button"
              className="game__core__userAction__numberGrid__number5">
              <img src="./assets/numbers/five.png" alt="five" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '6')}
              type="button"
              className="game__core__userAction__numberGrid__number6">
              <img src="./assets/numbers/six.png" alt="six" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '7')}
              type="button"
              className="game__core__userAction__numberGrid__number7">
              <img src="./assets/numbers/seven.png" alt="seven" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '8')}
              type="button"
              className="game__core__userAction__numberGrid__number8">
              <img src="./assets/numbers/eight.png" alt="eight" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '9')}
              type="button"
              className="game__core__userAction__numberGrid__number9">
              <img src="./assets/numbers/nine.png" alt="nine" />
            </button>
            <button
              onClick={() => setUserNumberStr(userNumberStr + '0')}
              type="button"
              className="game__core__userAction__numberGrid__number0">
              <img src="./assets/numbers/zero.png" alt="zero" />
            </button>
            {!victory && (
              <button
                onClick={handleValidation}
                type="button"
                className="game__core__userAction__numberGrid__validate">
                Valider
              </button>
            )}
          </div>
          {victory && (
            <button
              onClick={handleScoreRecording}
              className="game__core__userAction__showScore"
              type="button">
              Voir mon score
            </button>
          )}
        </div>
      </div>
      {status && status !== 'OK' && (
        <div className="game__scoreLoading">
          {status === 'Pending' && (
            <p>Ajout de votre score en cours, veuillez patienter...</p>
          )}
          {status === 'Erreur' && <p>Une erreur est survenue...</p>}
        </div>
      )}
    </div>
  );
};

export default Game;
