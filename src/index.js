import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Подключение Redux и Redux-thunk для осуществления асинхронных запросов в Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Так же подключаем allReducers на случай, если будет несколько reducers

import allReducers from "./reducers";

// Для слежки за Redux в браузере с помощью Redux ToolKit

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnchancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
