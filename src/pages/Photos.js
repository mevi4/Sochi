import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoUploadForm from '../components/PhotoUploadForm.js';

const Photos = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  
  const photoCategories = {
    all: "Все фотографии",
    olympic: "Олимпийский парк",
    nature: "Природа Сочи",
    sea: "Морские пейзажи",
    city: "Городская архитектура",
    mountains: "Горные виды"
  };

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  const samplePhotos = [
    { id: 1, category: 'olympic', title: 'Стадион Фишт', description: 'Главная арена Олимпиады' },
    { id: 2, category: 'olympic', title: 'Поющий фонтан', description: 'Вечернее шоу фонтанов' },
    { id: 3, category: 'nature', title: 'Агурское ущелье', description: 'Красота кавказской природы' },
    { id: 4, category: 'sea', title: 'Черное море', description: 'Пляж в центре Сочи' },
    { id: 5, category: 'city', title: 'Морской порт', description: 'Исторический центр города' },
    { id: 6, category: 'mountains', title: 'Вид с Роза Пик', description: 'Панорама Кавказских гор' }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? samplePhotos 
    : samplePhotos.filter(photo => photo.category === activeCategory);

  return (
    <div className="page">
      <h1>📸 Фотогалерея Сочи</h1>
      
      <div className="photo-categories">
        <h3>Категории:</h3>
        <div className="category-buttons">
          {Object.entries(photoCategories).map(([key, name]) => (
            <button
              key={key}
              className={`category-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="photos-grid">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="photo-card">
            <div className="photo-placeholder">
              📷 {photo.title}
            </div>
            <div className="photo-info">
              <h4>{photo.title}</h4>
              <p>{photo.description}</p>
              <span className="photo-category">{photoCategories[photo.category]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="upload-section">
        <h2>📤 Добавить свою фотографию Сочи</h2>
        <PhotoUploadForm />
      </div>
    </div>
  );
};

export default Photos;