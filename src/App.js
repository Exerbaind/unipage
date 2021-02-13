import { useEffect } from "react";

// Стили

import "./style/App.css";

// Redux

import { useDispatch, useSelector } from "react-redux";
import { loadText } from "./actions/speedPrintAction";

// Компоненты

import StartTextPopup from "./components/start-test-popup/StartTestPopup";
import TestPage from "./components/test-page/TestPage";

function App() {
  const dispatch = useDispatch();

  // Boolean для начала теста

  const startAppTrigger = useSelector((state) => state.appParameters.beginTest);

  // Загрузка текста с API

  useEffect(() => {
    dispatch(loadText());
  }, []);

  return (
    <div className="App">
      {startAppTrigger || <StartTextPopup />}
      <TestPage />
    </div>
  );
}

export default App;
