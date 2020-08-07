import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  getCurrentUser,
  createUserProfileDocument,
  auth,
  getUserData,
  getUserCollections,
} from "../../firebase/firebase";
import {
  // getCurrentUserSuccess,
  // getCurrentUserFailure,
  signUpFailure,
  emailSignInFailure,
  signUpSuccess,
  emailSignInSuccess,
  googleSignInFailure,
  googleSignInSuccess,
  signOutSuccess,
  signOutFailure,
  UserFailure,
  getUserDataSuccess,
} from "./user.actions";
import UserActionTypes from "./user.types";
import { provider } from "../../firebase/firebase";

export function* signUpUserAsync({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield user.updateProfile({ displayName: displayName });
    yield call(createUserProfileDocument, user);
    const userData = yield getUserData(user);
    yield put(signUpSuccess(userData));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}

export function* signInUserAsync({ payload: { email, password } }) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
    const currentUser = yield getCurrentUser();
    const userData = yield getUserData(currentUser);
    yield createUserProfileDocument(currentUser);
    yield put(emailSignInSuccess(userData));
  } catch (err) {
    yield put(emailSignInFailure(err));
  }
}

export function* signInWithGoogleAsync() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield createUserProfileDocument(user);
    const userData = yield getUserData(user);
    yield put(googleSignInSuccess(userData));
  } catch (err) {
    yield googleSignInFailure(err);
  }
}

export function* signOutAsync() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* getUserCollectionsAsync() {
  try {
    const data = yield getUserCollections();
    yield put(getUserDataSuccess(data));
  } catch (err) {
    yield put(UserFailure(err));
  }
}

export function* signUpUserWatcher() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUserAsync);
}

export function* signInUserWatcher() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInUserAsync);
}

export function* signInWithGoogleWatcher() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogleAsync);
}

export function* signOutWatcher() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutAsync);
}

export function* getUserCollectionsWatcher() {
  yield takeLatest(
    UserActionTypes.GET_USER_DATA_START,
    getUserCollectionsAsync
  );
}

export function* userSagas() {
  yield all([
    call(signUpUserWatcher),
    call(signInUserWatcher),
    call(signInWithGoogleWatcher),
    call(signOutWatcher),
    call(getUserCollectionsWatcher),
  ]);
}
