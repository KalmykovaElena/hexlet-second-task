export const GET_REVIEWS = 'GET_REVIEWS';
export const SET_REVIEWS = 'SET_REVIEWS';
export const FILTER_REVIEWS = 'FILTER_REVIEWS';

export const getReviews = () => ({
  type: GET_REVIEWS,
});

export const setReviews = (payload) => ({
  type: SET_REVIEWS,
  payload,
});

