import React from 'react';

const AttractionCard = ({ attraction }) => {
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
        <div className="rating">
          ⭐ {attraction.rating}
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