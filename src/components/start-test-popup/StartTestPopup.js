import { useDispatch } from "react-redux";

// Экшены
import { toTestScreen } from "../../actions/speedPrintAction";
const StartTestPopup = () => {
  const dispatch = useDispatch();
  const startTest = () => {
    dispatch(toTestScreen);
  };
  return (
    <div className="pop-up__wrapper">
      <div className="pop-up__container">
        <h1 className="pop-up__title">Добро пожаловать!</h1>
        <p className="pop-up__sub-title">
          Готов проверить свою скорость печати? Тогда нажимай!
        </p>
        <p className="pop-up__sub-title">
          Не забудь переключиться на английский язык &#128521;
        </p>
        <button onClick={startTest} className="pop-up__start-button">
          Поехали!
        </button>
      </div>
    </div>
  );
};

export default StartTestPopup;
