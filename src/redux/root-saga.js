import { call, all } from "redux-saga/effects";

import { newsSagas } from "./news/news.saga";

export default function* rootSagas() {
    yield all([call(newsSagas)])
}