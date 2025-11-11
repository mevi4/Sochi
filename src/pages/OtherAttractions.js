import React from 'react';
import AttractionCard from '../components/AttractionCard.js';

const OtherAttractions = () => {
  const attractions = [
    {
      id: 1,
      name: "Сочинский дендрарий",
      description: "Крупнейший парк с уникальной коллекцией растений со всего мира",
      type: "park",
      rating: 4.8
    },
    {
      id: 2,
      name: "Роза Хутор",
      description: "Горнолыжный курорт и красивейшая набережная в горах",
      type: "mountain",
      rating: 4.9
    },
    {
      id: 3,
      name: "Агурские водопады",
      description: "Живописные водопады в ущелье реки Агуры",
      type: "nature",
      rating: 4.7
    },
    {
      id: 4,
      name: "Морской порт Сочи",
      description: "Исторический порт с красивой архитектурой и яхтами",
      type: "sea",
      rating: 4.6
    },
    {
      id: 5,
      name: "Дача Сталина",
      description: "Музей в бывшей резиденции Иосифа Сталина",
      type: "museum",
      rating: 4.5
    },
    {
      id: 6,
      name: "Тисо-самшитовая роща",
      description: "Уникальный природный заповедник с реликтовыми растениями",
      type: "nature",
      rating: 4.8
    }
  ];

  return (
    <div className="page">
      <h1>🎯 Другие достопримечательности Сочи</h1>
      
      <div className="attractions-grid">
        {attractions.map(attraction => (
          <AttractionCard 
            key={attraction.id} 
            attraction={attraction}
          />
        ))}
      </div>
    </div>
  );
};

export default OtherAttractions;