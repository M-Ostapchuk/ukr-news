import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
// Persist
import { persistStore } from "redux-persist";

// Root Saga
import rootSagas from "./root-saga";
import { persistedReducer } from "./root-reducer";


const sagaMiddleware = createSagaMiddleware();

const middleWares = [logger, sagaMiddleware];

const store = createStore(persistedReducer, applyMiddleware(...middleWares))

const persistor = persistStore(store);
// persistor.purge()
sagaMiddleware.run(rootSagas);

export {store, persistor};
