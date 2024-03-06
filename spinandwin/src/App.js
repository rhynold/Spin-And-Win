import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TermsPage from './components/TermsPage';
import GamePage from './components/GamePage';
import LoserPage from './components/LoserPage';
import WinnerPage from './components/WinnerPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/lose" element={<LoserPage />} />
        <Route path="/win" element={<WinnerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
