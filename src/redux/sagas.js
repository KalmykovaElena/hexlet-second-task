import {  put, takeLatest } from 'redux-saga/effects';
import {  GET_REVIEWS, SET_REVIEWS } from './actions';
import { reviews } from '../api/mockData';

function* fetchReviews() {
    yield put({ type: SET_REVIEWS, payload: reviews });
}

export default function* watchFetchReviews() {
    yield takeLatest(GET_REVIEWS, fetchReviews);
}