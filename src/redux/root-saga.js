import { call, all } from "redux-saga/effects";

import { newsSagas } from "./news/news.saga";
import { userSagas } from "./user/user.saga";

export default function* rootSagas() {
    yield all([call(newsSagas), call(userSagas)])
}