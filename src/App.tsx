import './App.scss';

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Game from './components/Game';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
