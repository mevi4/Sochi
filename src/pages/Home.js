import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <div className="hero-section">
        <h1>Добро пожаловать в Сочи!</h1>
        <p>Курортная столица России на берегу Черного моря</p>
      </div>
      
      <div className="quick-links">
        <h2>Быстрые ссылки:</h2>
        <div className="links-grid">
          <Link to="/city-info" className="quick-link-card">
            <h3>📖 О городе</h3>
            <p>Узнайте больше о Сочи</p>
          </Link>
          
          <Link to="/main-attraction" className="quick-link-card">
            <h3>🏛️ Олимпийский парк</h3>
            <p>Главная достопримечательность</p>
          </Link>
          
          <Link to="/other-attractions" className="quick-link-card">
            <h3>🎯 Другие места</h3>
            <p>Что еще посмотреть</p>
          </Link>
          
          <Link to="/photos" className="quick-link-card">
            <h3>📸 Фотогалерея</h3>
            <p>Красивые виды Сочи</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;