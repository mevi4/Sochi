import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './App.css';          // Основные стили
import './context/ContextStyles.css'; // Стили контекста
import './index.css';        // Если есть index.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);