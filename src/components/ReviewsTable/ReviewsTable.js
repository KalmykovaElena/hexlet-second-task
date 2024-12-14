import React from 'react';
import { useSelector } from 'react-redux';
import './ReviewsTable.css';

const ReviewsTable = () => {
    const filteredReviews = useSelector(state => state.reviewsReducer.filteredReviews);

    return (
        <div className="table-container">
            <table className="reviews-table">
                <thead>
                    <tr>
                        <th>Платформа</th>
                        <th>Рейтинг</th>
                        <th>Время добавления</th>
                        <th>Текст отзыва</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReviews.map(review => (
                        <tr key={review.id}>
                            <td>{review.platform}</td>
                            <td>{review.rating}</td>
                            <td>{new Date(review.date).toLocaleString()}</td>
                            <td>{review.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewsTable;