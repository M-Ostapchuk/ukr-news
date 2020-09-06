import { put, call, takeEvery, all, takeLatest } from "redux-saga/effects";
import { fetchCollectionSuccess, fetchCollectionFailure, searchCollectionSuccess, searchCollectionFailure } from "./news.actions";
import NewsActionTypes from "./news.types";



export function* fetchNewsAsync(action) {
  try {
    const newsCollection = yield fetch(action.payload);
    const json = yield newsCollection.json();

    yield put(fetchCollectionSuccess(json.articles));
  } catch (err) {
    yield put(fetchCollectionFailure(err));
  }
}

export function* searchNewsAsync(action) {
  try {
    const newsCollection = yield fetch(action.payload);
    const json = yield newsCollection.json();

    yield put(searchCollectionSuccess(json.articles));
  } catch (err) {
    yield put(searchCollectionFailure(err));
  }
}

export function* fetchNewsStartWatcher() {
  yield takeEvery(NewsActionTypes.FETCH_COLLECTIONS_START, fetchNewsAsync);
}

export function* searchNewsStartWatcher() {
  yield takeLatest(NewsActionTypes.SEARCH_COLLECTIONS_START, searchNewsAsync);
}

export function* newsSagas() {
  yield all([call(fetchNewsStartWatcher), call(searchNewsStartWatcher)]);
}
