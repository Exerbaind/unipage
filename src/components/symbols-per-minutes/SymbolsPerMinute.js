import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// Экшены
import { symbolsPerMinute } from "../../actions/speedPrintAction";

// Иконки
import speedIcon from "../../assets/speed.svg";

const SymbolsPerMinute = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0);
  const speedOfTyping = useSelector((state) => state.appParameters.speed);

  function startTimer() {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
  }

  const isStarted = useSelector((state) => state.appParameters.isStarted);
  const numberOfSymbols = useSelector(
    (state) => state.appParameters.currentLetter
  );

  useEffect(() => {
    startTimer();
    dispatch(symbolsPerMinute(numberOfSymbols, timer));
  }, [isStarted, timer]);

  return (
    <div className="small-block">
      <img
        src={speedIcon}
        alt="Скорость печати"
        className="small-block__icon"
      />
      <p className="small-block__title">Скорость</p>
      <p className="small-block__text">
        {speedOfTyping} <span>зн./мин</span>
      </p>
    </div>
  );
};

export default SymbolsPerMinute;
