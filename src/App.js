import React, { useEffect } from 'react';
import Filters from './components/Filters/Filters';
import ReviewsTable from './components/ReviewsTable/ReviewsTable';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviewsReducer.reviews);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <div>
      <h1>Отзывы</h1>
      <Filters reviews={reviews} />
      <ReviewsTable />
    </div>
  );
};

export default App;
