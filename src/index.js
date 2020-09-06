import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

// Persist
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_ua from "./translations/ua/common.json";
import common_de from "./translations/de/common.json";

let country = localStorage.getItem("country")

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: country, // language to use
  resources: {
    us: {
      common: common_en, // 'common' is our custom namespace
    },
    ua: {
      common: common_ua,
    },
    de: {
      common: common_de,
    },
  },
});

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </Router>
    </PersistGate>
  </Provider>,
  rootElement
);
serviceWorker.unregister();
