import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainAttraction = () => {
  const navigate = useNavigate();

  const handleViewPhotos = () => {
    navigate('/photos/olympic');
  };

  return (
    <div className="page">
      <h1>🏛️ Олимпийский парк</h1>
      
      <div className="attraction-content">
        <div className="attraction-image">
          <div style={{padding: '2rem', textAlign: 'center'}}>
            🏟️ Олимпийский парк Сочи
            <br />
            <span style={{fontSize: '3rem'}}>🏛️</span>
          </div>
        </div>
        
        <div className="attraction-info">
          <h2>Главная достопримечательность Сочи</h2>
          
          <div className="info-grid">
            <div className="info-item">
              <h3>📍 Расположение</h3>
              <p>Имеретинская низменность, Адлерский район</p>
            </div>
            
            <div className="info-item">
              <h3>🏟️ Основные объекты</h3>
              <ul>
                <li>Стадион "Фишт"</li>
                <li>Ледовый дворец "Большой"</li>
                <li>Дворец зимнего спорта "Айсберг"</li>
                <li>Керлинговый центр "Ледяной куб"</li>
              </ul>
            </div>
            
            <div className="info-item">
              <h3>🎡 Развлечения</h3>
              <ul>
                <li>Сочи Автодром (Формула-1)</li>
                <li>Парк "Сочи Парк"</li>
                <li>Поющий фонтан</li>
                <li>Олимпийская набережная</li>
              </ul>
            </div>
          </div>
          
          <button onClick={handleViewPhotos} className="cta-button">
            📸 Посмотреть фотографии Олимпийского парка
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainAttraction;