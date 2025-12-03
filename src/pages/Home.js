import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSochiContext } from '../context/SochiContext.js';

const Home = () => {
  const { cityData, updateVisitStats, userPreferences } = useSochiContext();

  useEffect(() => {
    updateVisitStats('home');
  }, []);

  return (
    <div className="stats-grid-main">
      <div className="hero-section">
        <h1>Добро пожаловать в {cityData.name}!</h1>
        <p>{cityData.description}</p>
      </div>
      
      <div className="city-stats">
        <h3>📊 Краткая статистика:</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Население:</span>
            <span className="stat-value">{cityData.population}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Площадь:</span>
            <span className="stat-value">{cityData.area}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Климат:</span>
            <span className="stat-value">{cityData.climate}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Часовой пояс:</span>
            <span className="stat-value">{cityData.timezone}</span>
          </div>
        </div>
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