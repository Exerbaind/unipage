import LetterFromText from "../letter-from-text/LetterFromText";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toNextLetter, newMistake } from "../../actions/speedPrintAction";

const TextField = () => {
  const dispatch = useDispatch();
  const commonText = useSelector((state) => state.appParameters.commonText);
  const [isMistake, setIsMistake] = useState(false);

  const mistakes = useSelector((state) => state.appParameters.mistakes);
  const currentLetterIndex = useSelector(
    (state) => state.appParameters.currentLetter
  );

  function letterValidate(e) {
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

  useEffect(() => {
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
