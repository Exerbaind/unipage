const initialState = {
  commonText: [],
  mistakes: 0,
  currentLetter: 0,
  speed: 0,
  typingAccuracy: 100,
  beginTest: false,
  isStarted: false,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMON_TEXT":
      return {
        ...state,
        commonText: action.payload.commonText.join("").split(""),
      };
    case "TO_TEST":
      return {
        ...state,
        beginTest: action.payload.beginTest,
      };
    case "START_TEST":
      return {
        ...state,
        isStarted: action.payload.isStarted,
      };
    case "NEXT_LETTER":
      return {
        ...state,
        currentLetter: action.payload.currentLetter,
      };
    case "ADD_MISTAKE":
      return {
        ...state,
        mistakes: action.payload.mistakes,
      };
    case "COUNT_SYMBOLS":
      return {
        ...state,
        speed: action.payload.speed,
      };
    case "COUNT_ACCURACY":
      return {
        ...state,
        typingAccuracy: action.payload.typingAccuracy,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gamesReducer;
