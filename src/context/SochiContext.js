import React, { createContext, useState, useContext, useEffect } from 'react';

// Создаем контекст
const SochiContext = createContext();

// Провайдер контекста
export const SochiProvider = ({ children }) => {
  // Состояние города
  const [cityData, setCityData] = useState({
    name: 'Сочи',
    population: '500,000',
    area: '3,502 км²',
    climate: 'Влажный субтропический',
    timezone: 'UTC+3',
    description: 'Крупнейший курортный город России на черноморском побережье'
  });

  // Состояние пользовательских предпочтений
  const [userPreferences, setUserPreferences] = useState(() => {
    // Загружаем из localStorage при инициализации
    const saved = localStorage.getItem('sochiPreferences');
    return saved ? JSON.parse(saved) : {
      theme: 'light',
      language: 'ru',
      favoriteAttractions: [],
      visitedCategories: []
    };
  });

  // Состояние для избранных фотографий
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  // Состояние для статистики посещений
  const [visitStats, setVisitStats] = useState({
    home: 0,
    cityInfo: 0,
    attractions: 0,
    photos: 0
  });

  // Сохраняем предпочтения в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('sochiPreferences', JSON.stringify(userPreferences));
  }, [userPreferences]);

  // Функция для изменения темы
  const toggleTheme = () => {
    setUserPreferences(prev => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    }));
  };

  // Функция для добавления/удаления избранных достопримечательностей
  const toggleFavoriteAttraction = (attractionId) => {
    setUserPreferences(prev => {
      const isFavorite = prev.favoriteAttractions.includes(attractionId);
      return {
        ...prev,
        favoriteAttractions: isFavorite
          ? prev.favoriteAttractions.filter(id => id !== attractionId)
          : [...prev.favoriteAttractions, attractionId]
      };
    });
  };

  // Функция для добавления избранных фотографий
  const toggleFavoritePhoto = (photoId) => {
    setFavoritePhotos(prev => {
      const isFavorite = prev.includes(photoId);
      return isFavorite
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId];
    });
  };

  // Функция для обновления статистики посещений
  const updateVisitStats = (page) => {
    setVisitStats(prev => ({
      ...prev,
      [page]: prev[page] + 1
    }));
  };

  // Функция для добавления посещенной категории
  const addVisitedCategory = (category) => {
    if (!userPreferences.visitedCategories.includes(category)) {
      setUserPreferences(prev => ({
        ...prev,
        visitedCategories: [...prev.visitedCategories, category]
      }));
    }
  };

  // Значение контекста
  const contextValue = {
    cityData,
    userPreferences,
    favoritePhotos,
    visitStats,
    toggleTheme,
    toggleFavoriteAttraction,
    toggleFavoritePhoto,
    updateVisitStats,
    addVisitedCategory,
    isFavoriteAttraction: (id) => userPreferences.favoriteAttractions.includes(id),
    isFavoritePhoto: (id) => favoritePhotos.includes(id)
  };

  return (
    <SochiContext.Provider value={contextValue}>
      {children}
    </SochiContext.Provider>
  );
};

// Хук для использования контекста
export const useSochiContext = () => {
  const context = useContext(SochiContext);
  if (!context) {
    throw new Error('useSochiContext must be used within a SochiProvider');
  }
  return context;
};