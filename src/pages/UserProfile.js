import React from 'react';
import { useSochiContext } from '../context/SochiContext.js';

const UserProfile = () => {
  const { 
    userPreferences, 
    favoritePhotos, 
    visitStats, 
    toggleTheme,
    cityData
  } = useSochiContext();

  const photoCategories = {
    olympic: "Олимпийский парк",
    nature: "Природа Сочи",
    sea: "Морские пейзажи",
    city: "Городская архитектура",
    mountains: "Горные виды"
  };

  return (
    <div className="page">
      <h1>👤 Ваш профиль</h1>
      
      <div className="profile-sections">
        
        <div className="profile-section">
          <h2>🎨 Настройки отображения</h2>
          <div className="settings-grid">
            <div className="setting-item">
              <span className="setting-label">Тема:</span>
              <div className="setting-value">
                {userPreferences.theme === 'light' ? 'Светлая' : 'Темная'}
                <button onClick={toggleTheme} className="toggle-btn">
                  Сменить на {userPreferences.theme === 'light' ? 'темную' : 'светлую'}
                </button>
              </div>
            </div>
            
            <div className="setting-item">
              <span className="setting-label">Язык:</span>
              <span className="setting-value">{userPreferences.language === 'ru' ? 'Русский' : 'English'}</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>📊 Статистика посещений</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>🏠 Главная</h3>
              <p className="stat-number">{visitStats.home}</p>
            </div>
            <div className="stat-card">
              <h3>📖 О городе</h3>
              <p className="stat-number">{visitStats.cityInfo}</p>
            </div>
            <div className="stat-card">
              <h3>🎯 Достопримечательности</h3>
              <p className="stat-number">{visitStats.attractions}</p>
            </div>
            <div className="stat-card">
              <h3>📸 Фотографии</h3>
              <p className="stat-number">{visitStats.photos}</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>❤️ Избранное</h2>
          <div className="favorites-grid">
            <div className="favorite-item">
              <h3>Избранные фото:</h3>
              <p className="favorite-count">{favoritePhotos.length} фото</p>
            </div>
            <div className="favorite-item">
              <h3>Избранные места:</h3>
              <p className="favorite-count">{userPreferences.favoriteAttractions.length} мест</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>📍 Посещенные категории фото</h2>
          <div className="categories-list">
            {userPreferences.visitedCategories.length > 0 ? (
              userPreferences.visitedCategories.map(category => (
                <span key={category} className="category-tag">
                  {photoCategories[category] || category}
                </span>
              ))
            ) : (
              <p>Вы еще не просмотрели ни одной категории фотографий</p>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h2>🏙️ Информация о городе</h2>
          <div className="city-info-profile">
            <div className="info-row">
              <span className="info-label">Название:</span>
              <span className="info-value">{cityData.name}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Население:</span>
              <span className="info-value">{cityData.population}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Площадь:</span>
              <span className="info-value">{cityData.area}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Климат:</span>
              <span className="info-value">{cityData.climate}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;