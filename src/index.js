import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

// import { history } from "./history/history";

// Persist
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <Router>
        <App />
      </Router>
    {/* </PersistGate> */}
  </Provider>,
  rootElement
);
serviceWorker.unregister();
