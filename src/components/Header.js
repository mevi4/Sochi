import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Сочи - Жемчужина Черного Моря</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/city-info" className="nav-link">О городе</Link>
          <Link to="/main-attraction" className="nav-link">Главная достопримечательность</Link>
          <Link to="/other-attractions" className="nav-link">Другие достопримечательности</Link>
          <Link to="/photos" className="nav-link">Фотографии</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;