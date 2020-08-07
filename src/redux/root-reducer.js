import newsReducer from "./news/news.reducer";
// import userReducer from "./user/user.reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import userReducer from './user/user.reducer';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["news","user",],
  stateReconciler: hardSet,
};

export const rootReducer = combineReducers({
 news: newsReducer,
 user: userReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
