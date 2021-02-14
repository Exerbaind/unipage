import { useEffect } from "react";

// Стили

import "./style/App.css";

// Redux

import { useDispatch, useSelector } from "react-redux";
import { loadText, endTestAction } from "./actions/speedPrintAction";

// Компоненты

import StartTextPopup from "./components/start-test-popup/StartTestPopup";
import TestPage from "./components/test-page/TestPage";
import FinalResults from "./components/final-results/FinalResults";

function App() {
  const dispatch = useDispatch();

  // Boolean для начала теста

  const startAppTrigger = useSelector((state) => state.appParameters.beginTest);
  const endTestTrigger = useSelector((state) => state.appParameters.endTest);

  // Загрузка текста с API

  useEffect(() => {
    dispatch(loadText());
  }, []);

  return (
    <div className="App">
      {startAppTrigger || <StartTextPopup />}
      {/* <TestPage /> */}
      {endTestTrigger || <TestPage />}
      {endTestTrigger && <FinalResults />}
    </div>
  );
}

export default App;
