import { useSelector } from "react-redux";

// Иконки
import accuracyIcon from "../../assets/accuracy.svg";
import speedIcon from "../../assets/speed.svg";

const FinalResults = () => {
  const typingAccuracy = useSelector(
    (state) => state.appParameters.typingAccuracy
  );
  const speedOfTyping = useSelector((state) => state.appParameters.speed);

  function repeatTest() {
    window.location.reload();
  }
  return (
    <div className="final-results__wrapper">
      <div className="final-results__container">
        <h1 className="final-results__title">Ваш результат:</h1>
        <div className="final-results__results">
          <div className="final-results__results-item">
            <img src={speedIcon} alt="" className="results-item__image" />
            <p className="results-item__name">Скорость</p>
            <p className="results-item__text">
              {speedOfTyping} <span>зн./мин</span>
            </p>
          </div>
          <div className="final-results__results-item">
            <img src={accuracyIcon} alt="" className="results-item__image" />
            <p className="results-item__name">Точность</p>
            <p className="results-item__text">
              {typingAccuracy.toFixed(2)}
              <span>%</span>
            </p>
          </div>
        </div>
        {speedOfTyping < 100 && (
          <p className="final-results__congratulations">
            Ничего страшного!
            <br />
            Тебе просто необходимо поиграть немного в MMORPG и твои результаты
            вырастут!
          </p>
        )}
        {speedOfTyping > 100 && (
          <p className="final-results__congratulations">
            Поздравляю!
            <br />
            Твои навыки в наборе текста очень неплохи!
          </p>
        )}
        {speedOfTyping > 200 && (
          <p className="final-results__congratulations">
            Вот это да!
            <br />
            Видимо, ты родился с клавиатурой и ты настоящий магистр по набору
            текста!
          </p>
        )}
        <button className="final-results__repeat-button" onClick={repeatTest}>
          Попробовать еще раз
        </button>
      </div>
    </div>
  );
};

export default FinalResults;
