import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Экшены
import {
  toNextLetter,
  newMistake,
  startTest,
  endTestAction,
} from "../../actions/speedPrintAction";

// Компоненты
import LetterFromText from "../letter-from-text/LetterFromText";

const TextField = () => {
  const dispatch = useDispatch();
  const commonText = useSelector((state) => state.appParameters.commonText);
  const [isMistake, setIsMistake] = useState(false);

  const mistakes = useSelector((state) => state.appParameters.mistakes);
  const currentLetterIndex = useSelector(
    (state) => state.appParameters.currentLetter
  );

  // Основная проверка на верно/неверно введенные символы, ограничение на воод определенных символов
  function letterValidate(e) {
    dispatch(startTest);
    if (
      (e.keyCode >= 65 && e.keyCode <= 90) ||
      e.keyCode === 188 ||
      e.keyCode === 190 ||
      e.keyCode === 32 ||
      e.keyCode === 189
    ) {
      if (e.key === commonText[currentLetterIndex]) {
        setIsMistake(false);
        dispatch(toNextLetter(currentLetterIndex + 1));
      }
      if (e.key !== commonText[currentLetterIndex]) {
        setIsMistake(true);
        dispatch(newMistake(mistakes + 1));
      }
    }
  }

  function endTest() {
    if (currentLetterIndex === commonText.length) {
      dispatch(endTestAction);
    }
  }

  useEffect(() => {
    commonText.length && endTest();
    window.addEventListener("keydown", letterValidate);
    return () => {
      window.removeEventListener("keydown", letterValidate);
    };
  }, [currentLetterIndex, commonText]);

  return (
    <div className="text-container">
      {commonText.map((letter, index) => {
        return (
          <LetterFromText
            letter={letter}
            key={index}
            letterIndex={index}
            isMistake={isMistake}
          />
        );
      })}
    </div>
  );
};

export default TextField;
