import React from 'react';
import { useSochiContext } from '../context/SochiContext.js';

const AttractionCard = ({ attraction }) => {
  const { toggleFavoriteAttraction, isFavoriteAttraction } = useSochiContext();
  const isFavorite = isFavoriteAttraction(attraction.id);

  const getTypeIcon = (type) => {
    const icons = {
      park: '🌳',
      mountain: '⛰️',
      nature: '🌿',
      sea: '🌊',
      museum: '🏛️'
    };
    return icons[type] || '📍';
  };

  return (
    <div className="attraction-card">
      <div className="attraction-header">
        <span className="attraction-icon">{getTypeIcon(attraction.type)}</span>
        <h3>{attraction.name}</h3>
        <div className="attraction-actions">
          <div className="rating">
            ⭐ {attraction.rating}
          </div>
          <button 
            onClick={() => toggleFavoriteAttraction(attraction.id)}
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
      <p className="attraction-description">{attraction.description}</p>
      <div className="attraction-type">
        Тип: <span className="type-badge">{attraction.type}</span>
      </div>
    </div>
  );
};

export default AttractionCard;