import React from 'react';
import { Link } from 'react-router-dom';
import { useSochiContext } from '../context/SochiContext.js';

const Header = () => {
  const { userPreferences, toggleTheme, visitStats } = useSochiContext();

  return (
    <header className="header" data-theme={userPreferences.theme}>
      <div className="container">
        <h1 className="logo">Сочи - Жемчужина Черного Моря</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/city-info" className="nav-link">О городе</Link>
          <Link to="/main-attraction" className="nav-link">Главная достопримечательность</Link>
          <Link to="/other-attractions" className="nav-link">Другие достопримечательности</Link>
          <Link to="/photos" className="nav-link">Фотографии</Link>
          <Link to="/profile" className="nav-link">👤 Профиль</Link>
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            title={`Тема: ${userPreferences.theme === 'light' ? 'Светлая' : 'Темная'}`}
          >
            {userPreferences.theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;