import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import CityInfo from './pages/CityInfo.js';
import MainAttraction from './pages/MainAttraction.js';
import OtherAttractions from './pages/OtherAttractions.js';
import Photos from './pages/Photos.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city-info" element={<CityInfo />} />
            <Route path="/main-attraction" element={<MainAttraction />} />
            <Route path="/other-attractions" element={<OtherAttractions />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/photos/:category" element={<Photos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;