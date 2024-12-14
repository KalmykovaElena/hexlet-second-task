import { combineReducers } from 'redux';
import reviewsReducer from './reviewsReducer';

const reducer = combineReducers({
  reviewsReducer,
});

export default reducer;
