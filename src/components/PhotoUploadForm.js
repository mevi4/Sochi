import React, { useState } from 'react';

const PhotoUploadForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    photo: null,
    description: '',
    tags: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Валидация ника
    if (!formData.username.trim()) {
      newErrors.username = 'Ник обязателен';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Ник должен содержать минимум 3 символа';
    }

    // Валидация пароля
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать минимум 6 символов';
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    // Валидация фотографии
    if (!formData.photo) {
      newErrors.photo = 'Фотография обязательна';
    }

    // Валидация описания
    if (!formData.description.trim()) {
      newErrors.description = 'Описание обязательно';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Описание должно содержать минимум 10 символов';
    }

    // Валидация тегов
    if (!formData.tags.trim()) {
      newErrors.tags = 'Теги обязательны';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'photo') {
      setFormData(prev => ({
        ...prev,
        photo: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Очистка ошибки при вводе
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Форма отправлена:', formData);
      // Здесь обычно отправка данных на сервер
      setIsSubmitted(true);
      setFormData({
        username: '',
        password: '',
        email: '',
        photo: null,
        description: '',
        tags: ''
      });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const handleAddSampleTags = () => {
    setFormData(prev => ({
      ...prev,
      tags: 'Сочи, Черное море, достопримечательности, природа, архитектура'
    }));
  };

  return (
    <div className="photo-upload-form">
      {isSubmitted && (
        <div className="success-message">
          ✅ Фотография успешно загружена! Спасибо за ваш вклад в галерею Сочи!
        </div>
      )}

      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="username">Никнейм *</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={errors.username ? 'error' : ''}
            placeholder="Введите ваш ник"
          />
          {errors.username && <span className="error-text">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? 'error' : ''}
            placeholder="Введите пароль"
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
            placeholder="example@mail.com"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="photo">Фотография *</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleInputChange}
            className={errors.photo ? 'error' : ''}
          />
          {errors.photo && <span className="error-text">{errors.photo}</span>}
          {formData.photo && (
            <div className="file-info">
              📎 Выбран файл: {formData.photo.name}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Описание фотографии *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={errors.description ? 'error' : ''}
            placeholder="Опишите что изображено на фотографии, где было сделано, в какое время года..."
            rows="4"
          />
          {errors.description && <span className="error-text">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="tags">
            Теги * 
            <button type="button" onClick={handleAddSampleTags} className="sample-tags-btn">
              Добавить пример тегов
            </button>
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className={errors.tags ? 'error' : ''}
            placeholder="Сочи, море, горы, парк, лето..."
          />
          {errors.tags && <span className="error-text">{errors.tags}</span>}
          <div className="tags-hint">
            💡 Разделяйте теги запятыми. Пример: Сочи, Черное море, Олимпийский парк
          </div>
        </div>

        <button type="submit" className="submit-btn">
          📤 Загрузить фотографию
        </button>
      </form>
    </div>
  );
};

export default PhotoUploadForm;