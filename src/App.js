import { useEffect, useState } from "react";

// Стили

import "./style/App.css";

// Redux

import { useDispatch, useSelector } from "react-redux";
import { loadText } from "./actions/speedPrintAction";

// Компоненты

import StartTextPopup from "./components/start-test-popup/StartTestPopup";

function App() {
  const dispatch = useDispatch();
  const beginTrigger = useSelector((state) => state.appParameters.beginTest);

  useEffect(() => {
    dispatch(loadText());
  }, [dispatch]);

  return <div className="App">{beginTrigger || <StartTextPopup />}</div>;
}

export default App;
