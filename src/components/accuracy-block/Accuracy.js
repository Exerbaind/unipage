import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { coutAccuracy } from "../../actions/speedPrintAction";

// Icon

import accuracyIcon from "../../assets/accuracy.svg";

const Accuracy = () => {
  const dispatch = useDispatch();
  const typingAccuracy = useSelector(
    (state) => state.appParameters.typingAccuracy
  );
  const numberOfSymbols = useSelector(
    (state) => state.appParameters.commonText.length
  );

  const isStarted = useSelector((state) => state.appParameters.isStarted);
  const numberOfMistakes = useSelector((state) => state.appParameters.mistakes);

  useEffect(() => {
    isStarted && dispatch(coutAccuracy(numberOfMistakes, numberOfSymbols));
  }, [numberOfMistakes]);

  return (
    <div className="small-block">
      <img
        src={accuracyIcon}
        alt="Скорость печати"
        className="small-block__icon"
      />
      <p className="small-block__title">Точность</p>
      <p className="small-block__text">
        {typingAccuracy.toFixed(2)}
        <span>%</span>
      </p>
    </div>
  );
};

export default Accuracy;
