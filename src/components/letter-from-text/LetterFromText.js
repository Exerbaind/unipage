import { useSelector } from "react-redux";
const LetterFromText = (props) => {
  const currentLetterIndex = useSelector(
    (state) => state.appParameters.currentLetter
  );
  function letterState() {
    if (props.letterIndex === currentLetterIndex) {
      if (props.isMistake) {
        return `letter-wrong`;
      } else {
        return `letter-current`;
      }
    }
    if (props.letterIndex < currentLetterIndex) {
      return `letter-passed`;
    }
  }
  return <span className={letterState()}>{props.letter}</span>;
};

export default LetterFromText;
