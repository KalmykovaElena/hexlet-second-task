import { FILTER_REVIEWS, SET_REVIEWS } from "../actions";

const initialState = {
    reviews: [],
    filteredReviews: [],
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REVIEWS:
            return { ...state, reviews: action.payload, filteredReviews: action.payload };
        case FILTER_REVIEWS:
            return { ...state, filteredReviews: action.payload };
        default:
            return state;
    }
};

export default reviewsReducer;