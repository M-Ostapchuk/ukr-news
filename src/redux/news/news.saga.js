import { put, call, takeEvery, all } from "redux-saga/effects";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./news.actions";
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
export function* fetchNewsStartWatcher() {
  yield takeEvery(NewsActionTypes.FETCH_COLLECTIONS_START, fetchNewsAsync);
}

export function* newsSagas() {
  yield all([call(fetchNewsStartWatcher)]);
}
