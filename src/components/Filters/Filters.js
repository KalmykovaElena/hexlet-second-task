/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Filters.css';

const Filters = ({ reviews }) => {
    const dispatch = useDispatch();
    const [platform, setPlatform] = useState('');
    const [minRating, setMinRating] = useState(1);
    const [maxRating, setMaxRating] = useState(5);
    const [sortBy, setSortBy] = useState('date'); 
    const [sortOrder, setSortOrder] = useState('asc'); 
    const [searchText, setSearchText] = useState('');

    const applyFilters = () => {
        let filteredReviews = reviews.filter(review => {
            return (
                (platform === '' || review.platform === platform) &&
                review.rating >= minRating &&
                review.rating <= maxRating &&
                review.text.toLowerCase().includes(searchText.toLowerCase()) 
            );
        });
    
        filteredReviews.sort((a, b) => {
            if (sortBy === 'date') {
                return sortOrder === 'asc'
                    ? new Date(a.date) - new Date(b.date)
                    : new Date(b.date) - new Date(a.date);
            } else if (sortBy === 'rating') {
                return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
            }
            return 0;
        });
    
        dispatch({ type: 'FILTER_REVIEWS', payload: filteredReviews });
    };

    useEffect(() => {
        applyFilters(); 
    }, [platform, minRating, maxRating, sortBy, sortOrder, searchText]);

    return (
        <div className="filters-container">
            <h2>Фильтры</h2>
            <div className="filter-group">
                <label>
                    Платформа:
                    <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                        <option value="">Все</option>
                        <option value="Google">Google</option>
                        <option value="Яндекс">Яндекс</option>
                        <option value="2ГИС">2ГИС</option>
                    </select>
                </label>

                <label>
                    Минимальный рейтинг:
                    <input
                        type="number"
                        value={minRating}
                        min="1"
                        max="5"
                        onChange={(e) => setMinRating(Number(e.target.value))}
                    />
                </label>

                <label>
                    Максимальный рейтинг:
                    <input
                        type="number"
                        value={maxRating}
                        min="1"
                        max="5"
                        onChange={(e) => setMaxRating(Number(e.target.value))}
                    />
                </label>

                <label>
                    Сортировать по:
                    <select className='wide-field' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="date">Времени добавления</option>
                        <option value="rating">Рейтингу</option>
                    </select>
                </label>

                <label>
                    Порядок:
                    <select className='wide-field' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="asc">По возрастанию</option>
                        <option value="desc">По убыванию</option>
                    </select>
                </label>

                <label>
                    Поиск:
                    <input
                    className='wide-field'
                        type="text"
                        value={searchText}
                        placeholder="Введите текст для поиска"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
};

export default Filters;