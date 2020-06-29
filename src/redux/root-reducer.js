import newsReducer from "./news/news.reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["news"],
//   stateReconciler: hardSet,
// };

export const rootReducer = combineReducers({
 news: newsReducer
});

// export const persistedReducer = persistReducer(persistConfig, rootReducer);
